<template>
  <div v-if="loaded" class="building-page" id="b-top">
    <div class="header-container container">
      <h1 class="text-green my-md-3 header-border">{{ build.title }}</h1>
    </div>
    <div class="building-banner text-center">
      <img src="@/assets/banner1.jpg" alt="buildings banner" />
    </div>
    <div class="building-image text-center">
      <img
        class="fit"
        :src="build.gallery[0].path"
        :alt="`Image for building ${buildingNumber}`"
      />
    </div>
    <div class="building-text">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="b-number">
              <img src="@/assets/b-test/badge.png" alt="badge icon" />
              <span class="text-green-light">{{ buildingNumber }}</span>
            </div>
          </div>
          <div v-html="build.description" class="col-md-8"></div>
        </div>
      </div>
    </div>
    <div class="building-image container text-center">
      <img
        class="fit"
        :src="build.gallery[1].path"
        :alt="`Image for building ${buildingNumber}`"
      />
    </div>
    <div class="for-rent bg-green-light my-4">
      <div class="container">
        <h2 class="text-white">שטחים להשכרה</h2>
      </div>
    </div>
    <div class="offices-list">
      <div class="container">
        <div class="row">
          <Office
            :key="office.id"
            v-for="office in build.offices"
            :class="[
              'mb-3',
              build.offices.length > 1 ? 'col-md-6 fz-18' : 'col-md-12 fz-20'
            ]"
            :office="office"
            @openModal="foo(office)"
          />
        </div>
      </div>
    </div>
    <div class="all-modal">
      <!-- Modal Component -->
      <b-modal
        @hide="onModalClose"
        id="modal1"
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
import { mapGetters } from "vuex";
import Office from "@/components/Office";
export default {
  name: "building",
  components: {
    Office
  },

  data() {
    return {
      videoPath: null,
      videoTitle: "demo"
    };
  },
  computed: {
    build() {
      return this.building(this.$route.params.id);
    },
    buildingNumber() {
      return this.$route.params.id;
    },
    ...mapGetters({ site: "getAll", building: "building", loaded: "loaded" })
  },

  methods: {
    onModalClose() {
      this.videoPath = null;
    },
    foo(office) {
      // console.log("foo", office);
      this.videoTitle = `${office.title_label} ${
        office.square
      } מ''ר, ${this.floorToString(office.floor)}`;
      this.videoPath = office.video_url.replace(
        "https://youtu.be/",
        "https://youtube.com/embed/"
      );
      this.$root.$emit("bv::show::modal", "modal1");
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
