<template>
    <div
      class="menu-wrapper"
      @click="MenuToggle"
    >
        <div class="burger" :class="{ 'clicked': this.$store.state.isOpenMenu}" @click="animationMenuItems">
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
                        <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'About'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        O mnie
                        <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Blog
                        <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Partners'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Współpraca
                        <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                    </span>
                </router-link>
                <router-link
                  :to="{name: 'Portfolio'}"
                  class="one-menu-item"
                >
                    <span class="menu-item">
                        Kontakt
                        <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                    </span>
                </router-link>
            </ul>
            <div class="menu-contact">
                <a href="tel:+48797657075" class="menu-contact-me">
                    <span class="select-text">
                        +48 797657075
                    </span>
                </a>
                <a href="mailto:dzianis@pencilsharpener.pl" class="menu-contact-me">
                    <span class="select-text">
                        dzianis@pencilsharpener.pl
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import TweenMax from 'gsap'

export default {
  name: 'Menu',
  methods: {
    MenuToggle () { this.$store.commit('MenuToggle') },
    animationMenuItems () {
      let menuItems = document.getElementsByClassName('menu-item')
      let menuLang = document.getElementsByClassName('one-languages')
      let menuContact = document.getElementsByClassName('menu-contact-me')

      if (!this.$store.state.isOpenMenu) {
        TweenMax.staggerTo(menuItems, 0.4, { y: 0 }, 0.2)
        TweenMax.staggerTo(menuLang, 0.4, { y: 0 }, 0.2)
        TweenMax.staggerTo(menuContact, 0.4, { y: 0 }, 0.2)
      } else {
        TweenMax.staggerTo(menuItems, 0.4, { y: 100 }, 0.2)
        TweenMax.staggerTo(menuLang, 0.4, { y: 100 }, 0.2)
        TweenMax.staggerTo(menuContact, 0.4, { y: 100 }, 0.2)
      }
    }
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

      @include breakpoint(medium) {
          width: 35%;
          left: auto;
          right: 0;
      }

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
      overflow: hidden;

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
          transition: .3s ease;
          transform: translateY(100%);
          &:not(:last-child) {
              margin-right: 15px;
          }

          &.is-active,
          &:hover {
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
          position: relative;
          display: block;
          text-align: right;
          font-size: 30px;
          color: $black;
          padding-bottom: 5px;
          letter-spacing: .5px;
          /* For animation */
          overflow: hidden;

          @include breakpoint(medium) {
              font-size: 36px;
          }

          @include breakpoint(medium-lg) {
              font-size: 40px;
          }

          @include breakpoint(large) {
              font-size: 48px;
          }

          @include breakpoint(extralarge) {
              font-size: 52px;
          }

          svg {
              position: absolute;
              top: 60%;
              right: 0;
              width: 100%;
              height: 11px;
              transform-origin: 0 100%;
              transform: translateY(50px) rotate(15deg);
              transition: 0.3s ease;
              z-index: -1;
          }

          .menu-item {
              position: relative;
              display: inline-block;
              transform: translateY(100%);
          }

          &.is-active,
          &:hover {
              svg {
                  transform: translateY(0px);
                  /*width: 100%;*/
              }
          }
      }
  }

  .menu-contact {
      position: absolute;
      bottom: 10%;
      right: 14%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      text-align: right;
      overflow: hidden;
      padding: 0 8px;

      .menu-contact-me {
          position: relative;
          font-family: Montserrat;
          font-weight: 300;
          font-size: 13px;
          color: $gray;
          transform: translateY(100%);

          &:nth-child(1) {
              padding-bottom: 5px;
          }

          &:hover {
              color: $white;
              text-decoration: none;
          }
      }
  }

</style>
