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
            <div class="change-languages">
                <div class="one-languages is-active">en.</div>
                <div class="one-languages">pl</div>
            </div>
            <ul class="slideout-menu">
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item is-active"
                >
                    <span class="menu-item">
                        Portfolio
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        O mnie
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Blog
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Wspólpraca
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Kontakt
                    </span>
                </router-link>
            </ul>
            <div class="menu-contact">
                <a href="tel:+48797657075" class="menu-contact-me">+48 797657075</a>
                <a href="mailto:dzianis@pencilsharpener.pl" class="menu-contact-me">dzianis@pencilsharpener.pl</a>
            </div>
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
      background-color: $gray-medium;
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
      background-color: $white;
      transform: translateX(100%);
      transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

      &.is-active {
          transform: translateX(0);
      }
  }

  .change-languages {
      width: 100%;
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      text-transform: uppercase;
      font-size: 14px;
      font-family: Montserrat;
      font-weight: 800;
      padding-top: 35px;
      padding-right: 10%;

      @include breakpoint(medium) {
          padding-top: 40px;
      }

      @include breakpoint(large) {
          padding-top: 65px;
      }

      @include breakpoint(extralarge) {
          padding-top: 80px;
      }

      .one-languages {
          position: relative;
          color: $gray;
          &:not(:last-child) {
              margin-right: 15px;
          }

          &.is-active {
              color: $black;
          }
      }
  }

  .slideout-menu {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15%;
      font-family: 'PT Serif', serif;
      font-weight: 400;

      .one-menu-item {
          display: block;
          text-align: right;
          font-size: 30px;
          color: $black;
          padding-bottom: 5px;
          letter-spacing: .5px;

          .menu-item {
              position: relative;
              display: inline-block;

              &:before {
                  content: '';
                  width: 110%;
                  position: absolute;
                  left: -5%;
                  right: 0;
                  top: 63%;
                  transform: scaleX(0) translateY(-50%);
                  height: 9px;
                  background: $darkviolet;
                  transition: 400ms cubic-bezier(1, 0, 0, 1) 0ms;
                  z-index: -1;
              }
          }

          &.is-active {
              .menu-item {
                  &:before {
                      transform: scaleX(1) translateY(-50%);
                  }
              }
          }

          &:hover {
              .menu-item {
                  &:before {
                      transform: scaleX(1) translateY(-50%);
                  }
              }
          }
      }
  }

  .menu-contact {
      position: absolute;
      bottom: 10%;
      right: 15%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      text-align: right;

      .menu-contact-me {
          font-family: Montserrat;
          font-weight: 300;
          font-size: 13px;
          color: $gray;

          &:nth-child(1) {
              padding-bottom: 5px;
          }
      }
  }

</style>
