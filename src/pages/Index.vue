<template>
    <div>
        <div class="hero-wrapper">
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
      typedOptions: ['World', 'Mundo', 'Mondo', 'Svět', 'Wellt']
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
      position: absolute;
      bottom: 15%;
      left: 5%;
      letter-spacing: 1px;

      .hero-name {
          display: inline;
          width: 140px;
          margin: 0 auto 0 0;
          font-size: 30px;
          font-family: 'GT-Haptik-Thin';
      }
      .typed-me {
          color: $gray;
          font-family: 'GT-Haptik-Lazer';
      }
  }
</style>
