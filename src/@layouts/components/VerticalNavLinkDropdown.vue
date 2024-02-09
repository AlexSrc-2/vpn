<script setup>
const props = defineProps({
  item: {
    type: null,
    required: true,
  },
})

const isOpen = ref(false)
</script>

<template>
  <li
    class="nav-link"
    :class="{
      disabled: item.disable,
      open: isOpen
    }"
  >
    <div class="nav-group-label" @click="isOpen = !isOpen">
        <VIcon
          :icon="item.icon"
          class="nav-item-icon"
        />
        <!-- 👉 Title -->
        <span class="nav-item-title">
          {{ item.title }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             aria-hidden="true"
             role="img"
             tag="i"
             class="v-icon notranslate v-theme--dark nav-group-arrow iconify iconify--bx"
             width="1em"
             height="1em"
             viewBox="0 0 24 24" style="font-size: 20px; height: 20px; width: 20px;">
          <path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"></path>
        </svg>
    </div>
    <ul v-if="item.childrens && item.childrens.length" data-v-c7a0f8a6="" class="nav-group-children" :style="{
      height: isOpen ? 'auto': 0
    }">
      <li v-for="childItem in item.childrens" class="nav-link">
        <Component
          :is="childItem.to ? 'RouterLink' : 'a'"
          :to="childItem.to"
          :href="childItem.href"
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--dark v-icon--size-default text-disabled nav-item-icon nav-item-child-icon iconify iconify--bxs" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2z"></path></svg>
          <!-- 👉 Title -->
          <span class="nav-item-title">
            {{ childItem.title }}
          </span>
        </Component>
      </li>
    </ul>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .nav-group-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover::before {
        position: absolute;
        border-radius: inherit;
        background: currentcolor;
        block-size: 100%;
        content: "";
        inline-size: 100%;
        inset: 0;
        pointer-events: none;
        opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
    }
  }
  .nav-link.open {
    .nav-group-label {
      --v-activated-opacity: 0.16;
      background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
      box-shadow: none;
      color: rgb(var(--v-theme-primary));
    }
  }
  .nav-group-children {
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
    will-change: block-size;
  }

  .nav-item-child-icon {
    --v-icon-size-multiplier: 1;
    align-items: center;
    display: inline-flex;
    font-feature-settings: "liga";
    height: 1em;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    user-select: none;
    vertical-align: middle;
    width: 1em;
    font-size: .5rem !important;
    margin-inline-end: 1.0625rem;
    margin-inline-start: 0.4375rem;
  }
}
</style>
