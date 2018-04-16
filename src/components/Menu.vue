<template>
    <div
      class="menu-wrapper"
      @click="MenuToggle"
      :class="{ 'is-active': this.$store.state.isOpenMenu}"
    >
        <div class="burger" :class="{ 'clicked': this.$store.state.isOpenMenu}">
            <span></span>
        </div>
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

  .burger {
    position: fixed;
    top: 10px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    z-index: 10;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      user-select: none;

      &:before,
      &:after {
        content: '';
        position: absolute;
      }

      &:before {
        top: -6px;
      }

      &:after {
        top: 6px;
      }
    }

    &.clicked {
      span {
        background-color: transparent;

        &:before,
        &:after {
          background-color: $white;
        }

        &:before {
          transform: translateY(6px) rotate(45deg);
        }

        &:after {
          transform: translateY(-6px) rotate(-45deg);
        }
      }

      &.clicked span::before {

      }
    }
  }

  .burger span,
  .burger span::before,
  .burger span::after {
      display: block;
      width: 25px;
      height: 2px;
      background-color: $black;
      outline: 1px solid transparent;
      transition-property: background-color, transform;
      transition-duration: 0.3s;
  }

</style>
