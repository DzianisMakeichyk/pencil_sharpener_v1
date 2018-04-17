<template>
    <div>
        <div class="hero-wrapper">
            <h2 class="hero-name">
                Pencil to&nbsp;
            </h2>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "nerdy nerdy.nerdy nerdy,nerdy nerdy nerdy nerdy nerdy nerdynerdy nerdy nerdy simple.", "pure JS.", "pretty.", "fun!" ]'>
            </span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Index',
  mounted () {
    let TxtRotate = function (el, toRotate, period) {
      toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    console.log(this.toRotate)
    }

    TxtRotate.prototype.tick = function () {
      let i = this.loopNum % this.toRotate.length
      let fullTxt = this.toRotate[i]
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      let that = this
      let delta = 300 - Math.random() * 100

      if (this.isDeleting) { delta /= 2 }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick()
      }, delta)
    }

    let elements = document.getElementsByClassName('txt-rotate')
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate')
      let period = elements[i].getAttribute('data-period')
      if (toRotate) {
        TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    let css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }'
    document.body.appendChild(css)
  }
}
</script>

<!--scoped-->
<style lang="scss">
  .hero-wrapper {
      position: absolute;
      /*display: inline-flex;*/
      /*align-content: flex-start;*/
      /*justify-content: center;*/
      /*width: 100%;*/
      bottom: 15%;
      left: 5%;
      letter-spacing: 1px;

      .hero-name {
          width: 140px;
          margin: 0 auto 0 0;
          font-size: 30px;
          font-family: 'GT-Haptik-Thin';
      }
      /* Typed */
      .vue-typer {
          font-size: 30px;
          font-family: 'GT-Haptik-Thin';

          .custom.char {
              color: $gray;
          }
      }
  }
</style>
