
<template>
  <picture>
    <source
      type="image/webp"
      :srcset="`${avatarUrl.webp} 1x,
        ${avatarUrl.webp2x} 2x,
        ${avatarUrl.webp4x} 4x`"
    />
    <img
      :src="avatarUrl.jpg"
      :srcset="`${avatarUrl.jpg}, ${avatarUrl.jpg2x} 2x, ${avatarUrl.jpg4x} 4x`"
      :alt="user.name"
      :width="width"
      :height="height"
    />
  </picture>
</template>

<script>
import { avatar } from "@/common/helpers";

export default {
  name: "Avatar",
  props: {
    user: {
      type: Object,
      default: null,
    },
    width: {
      type: [Number, String],
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    avatarUrl() {
      return avatar(this.user.avatar);
    },
  },
};
</script>

<style scoped>

</style>
