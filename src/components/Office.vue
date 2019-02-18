<template>
  <div v-if="office" :class="officeClass">
    <div class="row">
      <div class="col-5 px-1">
        <div class="video-block">
          <h6 class="text-green-light">
            {{ office.title_label }} {{ office.square }} מ''ר,
            <span class="text-nowrap"
              >{{ floorToString(office.floor) }} {{ "," + building }}</span
            >
          </h6>
          <div @click="$emit('openModal', office)" class="video-image">
            <img src="@/assets/b-test/video.jpg" alt="video" />
          </div>
        </div>
      </div>
      <div class="col-7 px-1">
        <img :src="office.featured_image.path" :alt="office.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    office: Object,
    officeClass: String,
    openModal: Function,
    building: String
  },
  methods: {
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
