<template>
  <div class="skeleton">
    <SkeletonBody />
  </div>
</template>

<script>
import SkeletonBody from '@/components/SkeletonComponent.vue'

export default {
  name: 'SkeletonView',
  components: {
    SkeletonBody
  }
}
</script>
