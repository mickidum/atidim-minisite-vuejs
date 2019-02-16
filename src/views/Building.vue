<template>
  <div v-if="loaded" class="building-page" id="b-top">
    <div class="header-container container">
      <h1 class="text-green my-3 header-border">{{ build.title }}</h1>
    </div>
    <div class="building-banner text-center">
      <img src="@/assets/banner1.jpg" alt="buildings banner">
    </div>
    <div class="building-image text-center">
      <img class="fit" :src="build.gallery[0].path" :alt="`Image for building ${buildingNumber}`">
    </div>
    <div class="building-text">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="b-number">
              <img src="@/assets/b-test/badge.png" alt="badge icon">
              <span class="text-green-light">{{ buildingNumber }}</span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="b-text mb-3">
              <div class="rig text-green-light">תיאור:</div>
              <div class="lef px-2">
                מרכז מסחרי הכולל מגוון שירותים לדיירי ואורחי הפארק. במרכז:
                מסעדות, בתי קפה, כספומט, דואר, פורום חדרי ישיבות והדרכה, מספרה,
                גן ילדים, מרפאת שיניים וחנות נוחות. היצע גדול לעובדים ואורחים
                בחניון המקורה.
              </div>
            </div>

            <div class="b-text mb-3">
              <div class="rig text-green-light">קומות:</div>
              <div class="lef px-2">קומת מסחר וחניון עילי ותחתון.</div>
            </div>

            <div class="b-text">
              <div class="rig text-green-light">שטח מ''ר:</div>
              <div class="lef px-2">
                שטח מסחרי של כ- 2,500 מ''ר,4 קומות חניון תחתון. 6 קומות חניון.
                עילי.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="building-image container text-center">
      <img class="fit" :src="build.gallery[1].path" :alt="`Image for building ${buildingNumber}`">
    </div>
    <div class="for-rent bg-green-light my-4">
      <div class="container">
        <h2 class="text-white">שטחים להשכרה</h2>
      </div>
    </div>
    <div class="offices-list">
      <div class="container">
        <div class="row">
          <div
            :key="office.id"
            v-for="office in build.offices"
            :class="['mb-3', build.offices.length > 1 ? 'col-md-6 fz-18' : 'col-md-12 fz-20']"
          >
            <div class="row">
              <div class="col-5 px-1">
                <div class="video-block">
                  <h6 class="text-green-light">
                    {{office.title_label}} {{office.square}} מ''ר,
                    <span
                      class="text-nowrap"
                    >{{floorToString(office.floor)}}</span>
                  </h6>
                  <div @click="foo(office)" v-b-modal.modal1 class="video-image">
                    <img src="@/assets/b-test/video.jpg" alt="video">
                  </div>
                </div>
              </div>
              <div class="col-7 px-1">
                <img :src="office.featured_image.path" :alt="office.title">
              </div>
            </div>
          </div>
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
          <b-embed type="iframe" aspect="16by9" :src="videoPath" allowfullscreen/>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "building",

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
  // mounted() {
  //   console.log(this.build);
  // },
  methods: {
    // onModalOpen() {
    //   console.log("open", this);
    // },
    onModalClose() {
      this.videoPath = null;
    },
    foo(office) {
      console.log("foo", office);
      this.videoTitle = `${office.title_label} ${
        office.square
      } מ''ר, ${this.floorToString(office.floor)}`;
      this.videoPath = office.video_url.replace(
        "https://youtu.be/",
        "https://youtube.com/embed/"
      );
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
