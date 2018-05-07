<template>
    <div>
        <div class="reveal-me"></div>
        <div class="hero-wrapper bg-gray">
            <h2 class="hero-name">
                Pencil <span v-if="this.$store.state.windowWidth >= 767">Sharpener </span>to
                <span class="typed-me" id="typed"></span>
            </h2>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  name: 'Index',
  data () {
    return {
      typedOptions: ['Rock', 'Happy if you scroll down and explore their work', 'More Work', 'Think Big', 'Hard', 'Fun']
    }
  },
  mounted () {
    const typed = new Typed('#typed', {
      strings: this.typedOptions,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 2000
    })
    console.log(typed)
  }
}
</script>

<!--scoped-->
<style lang="scss">
  .hero-wrapper {
      height: 100vh;

      .hero-name {
          position: absolute;
          bottom: 25%;
          letter-spacing: 1px;
          left: 36px;
          right: 36px;
          display: inline;
          /*width: 140px;*/
          margin: 0 auto 0 0;
          font-size: 30px;
          font-family: 'GT-Haptik-Thin';

          @include breakpoint(medium) {
              left: 54px;
              right: 54px;
          }

          @include breakpoint(large) {
              left: 93px;
              right: 93px;
          }

          @include breakpoint(extralarge) {
              left: 118px;
              right: 118px;
          }
      }
      .typed-me {
          color: $gray;
          font-family: 'GT-Haptik-Lazer';
      }
  }
</style>
