<template>
    <div
      class="menu-wrapper"
      @click="MenuToggle"
    >
        <div class="burger" :class="{ 'clicked': this.$store.state.isOpenMenu}">
            <span></span>
        </div>
        <div
          class="slideout"
          :class="{ 'is-active': this.$store.state.isOpenMenu}"
        >
            <ul class="slideout-menu">
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                  item
                </router-link>
            </ul>
        </div>
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
    z-index: 250;

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

  .slideout {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 30px;
      background-color: #34495e;
      transform: translateX(100%);
      transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

      &.is-active {
          transform: translateX(0);
      }
  }

</style>
