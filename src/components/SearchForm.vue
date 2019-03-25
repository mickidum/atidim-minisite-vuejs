<template>
  <div>
    <b-form id="search-form">
      <div class="container">
        <div class="form-row">
          <div class="col-md-3">
            <label class="sr-only" for="search-form-type">סוג נכס</label>
            <b-form-select
              id="search-form-type"
              v-model="officeType"
              :options="officeTypeOptions"
            >
            </b-form-select>
          </div>
          <div class="col-md-3 p-2 mt-4 mt-md-0">
            <label class="sr-only" for="search-form-square">שטח במ''ר</label>
            <range-slider
              class="slider"
              min="50"
              max="2500"
              step="50"
              v-model="square"
            >
            </range-slider>

            <div style="min-height: 40px;" class="text-center">
              <strong
                >שטח: מ- <span v-show="square">{{ square }}</span> מ''ר</strong
              >
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <label class="sr-only" for="search-form-floor">כל קומה</label>
            <b-form-select
              id="search-form-floor"
              v-model="floor"
              :options="getFloors"
              class="mb-3"
            >
            </b-form-select>
          </div>
          <div class="col-md-3 mb-2">
            <b-button @click="searchFilter" class="btn-block" variant="success"
              >חיפוש</b-button
            >
          </div>
        </div>
      </div>
    </b-form>
    <div class="search-results offices-list my-3">
      <div class="container" style="max-width: 820px;">
        <div v-if="filteredOffices" class="row">
          <Office
            :key="office.id"
            v-for="office in filteredOffices"
            :class="['mb-3', 'col-md-12 fz-20']"
            :office="office"
            :building="', ' + office.building.title"
            @openModal="foo(office)"
          />
        </div>
        <div v-if="noResults" class="no-res text-center">
          <h4>לא נמצא נכס המתאים...</h4>
        </div>
      </div>
    </div>

    <div class="all-modal">
      <!-- Modal Component -->
      <b-modal
        @hide="onModalClose"
        id="modal2"
        title-tag="h6"
        :title="videoTitle"
        size="xl"
        body-class="body-off"
        hide-footer
        header-class="head-off"
        centered
      >
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="videoPath"
            allowfullscreen
          />
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import Office from "@/components/Office";
export default {
  components: {
    RangeSlider,
    Office
  },
  data() {
    return {
      videoPath: null,
      videoTitle: "demo",
      officeType: null,
      floor: null,
      square: 500,
      noResults: false,
      filteredOffices: [],
      officeTypeOptions: [
        { value: null, text: "כל סוג הנכס" },
        { value: "משרד", text: "משרד" },
        { value: "מסחר", text: "מסחר" },
        { value: "מעטפת", text: "מעטפת" }
      ]
    };
  },
  computed: {
    allOffices() {
      return this.$store.getters.getOffices;
    },

    getFloors() {
      const tupple = new Set();
      let arr = [];
      arr.push({ value: null, text: "כל קומה" });
      this.allOffices.forEach(o => {
        tupple.add(o.floor);
      });
      const sort = [...tupple].sort((a, b) => a - b);
      sort.forEach(a => {
        arr.push({ value: a, text: a });
      });
      return arr;
    }
  },
  // created() {
  //   console.log(this.allOffices);
  // },
  methods: {
    searchFilter() {
      this.filteredOffices = this.allOffices.filter(office => {
        // SIMPLE
        if (!this.officeType && !this.floor && !this.square) {
          return office;
        }
        if (
          office.compatible_for === this.officeType &&
          !this.floor &&
          !this.square
        ) {
          return office.compatible_for === this.officeType;
        }
        if (office.floor == this.floor && !this.officeType && !this.square) {
          return office.floor == this.floor;
        }
        if (
          office.square >= this.square * 0.8 &&
          !this.officeType &&
          !this.floor
        ) {
          return office.square >= this.square * 0.8;
        }
        // by officeType
        if (
          office.compatible_for === this.officeType &&
          office.floor === this.floor &&
          !this.square
        ) {
          return (
            office.compatible_for === this.officeType &&
            office.floor == this.floor
          );
        }

        if (
          office.compatible_for === this.officeType &&
          office.square >= this.square * 0.8 &&
          !this.floor
        ) {
          return (
            office.compatible_for === this.officeType &&
            office.square >= this.square * 0.8
          );
        }
        // by floor
        if (
          office.floor === this.floor &&
          office.square >= this.square * 0.8 &&
          !this.officeType
        ) {
          return (
            office.floor === this.floor && office.square >= this.square * 0.8
          );
        }
        // by all
        if (
          office.compatible_for === this.officeType &&
          office.square >= this.square * 0.8 &&
          office.floor === this.floor
        ) {
          return (
            office.compatible_for === this.officeType &&
            office.square >= this.square * 0.8 &&
            office.floor === this.floor
          );
        }
      });
      if (!this.filteredOffices.length) {
        this.noResults = true;
      } else {
        this.noResults = false;
      }
    },
    onModalClose() {
      this.videoPath = null;
    },
    foo(office) {
      console.log(office);
      this.videoTitle = `${office.title_label} ${
        office.square
      } מ''ר, ${this.floorToString(office.floor)}, ${office.building.title}`;
      this.videoPath =
        office.video_url.replace(
          "https://youtu.be/",
          "https://youtube.com/embed/"
        ) + "?autoplay=1";
      this.$root.$emit("bv::show::modal", "modal2");
    },
    floorToString(floor) {
      if (floor == 0) {
        return "קומת קרקע";
      } else if (floor < 0) {
        const rev = floor
          .split("")
          .reverse()
          .join("");
        return `קומה ${rev}`;
      }
      return `קומה ${floor}`;
    }
  }
};
</script>
