<template>
    <div
      class="menu-wrapper"
      @click="MenuToggle"
      v-bind:class="{ 'is-active': this.$store.state.isOpenMenu}"
    >
        <div class="slideout-opener">
            {{this.$store.state.isOpenMenu}}
        </div>
        <!--<ul class="slideout-menu">-->
            <!--<li class="one-menu-item">-->
                <!--item-->
            <!--</li>-->
        <!--</ul>-->
    </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    MenuToggle () { this.$store.commit('MenuToggle') }
  }
}
</script>

<style lang="scss" scope>
  .menu-wrapper {
    cursor: pointer;
  }
</style>
