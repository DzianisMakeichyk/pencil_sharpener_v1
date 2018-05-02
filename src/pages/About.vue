<template>
    <section class="container">
        <div class="photo-container"></div>
        <div class="content-container">
            <div class="bg-gray relative">
                <div class="reveal-me"></div>
                <div class="about-me-wrapper">
                    <div class="about-me">
                        <div class="sub-header-wrapper">
                            <p class="about-title">
                                FRONTEND DEVELOPER AT CAPE MORRIS
                            </p>

                            <h1 class="sub-header">
                                Dzianis Makeichyk
                            </h1>
                        </div>
                    </div>
                    <!-- 1 -->
                    <div class="about-section-wrapper">
                        <div class="about-section about-top">
                            <div class="about-left">
                                <p class="about-title">
                                    O mnie
                                </p>
                                <p class="about-description">
                                    Nazywam się <b>Dzianis Makeichyk</b> i jestem <b>Front-End Developerem</b>. Zajmuję się tworzeniem stron internetowych, blogów, od responsywnego mailingu, banera, do layout wykonany na podstawie <b>ReactJS</b> i <b>VueJs</b>.
                                </p>
                            </div>
                            <div class="about-right">
                                <div class="about-technologies">
                                    <div class="one-techno-row">
                                        <p class="about-title">
                                            Technologie
                                        </p>
                                        <ul class="techno-list">
                                           <li class="one-tech" v-for="skill in skills" :key="skill">{{skill.name}}</li>
                                        </ul>
                                    </div>
                                    <div class="one-techno-row">
                                        <p class="about-title">
                                            Umiejętności
                                        </p>
                                        <ul class="techno-list">
                                            <li class="one-tech" v-for="ability in abilities" :key="ability">{{ability.name}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END 1 -->
                    <!-- 2 -->
                    <div class="about-section about-description-me">
                        <div class="about-left">
                            <p class="about-quotation">
                                What we
                                <br/>
                                know how
                                <br/>
                                to do <span class="select-text">well.</span>
                            </p>
                        </div>
                        <div class="about-right">
                            <div class="about-me-text-wrapper">
                                <h6 class="about-me-text">
                                    Zawsze dążę do tego, żeby każdy zbudowany przez mnie projekt był całkowicie optymalny od strony użytkowej oraz graficznej. Dzięki latom doświadczenia przy tworzeniu projektów internetowych oraz graficznych przyjąłem i trzymam się politykę, że właściwa, intuicyjna nawigacja, inteligentna i przejrzysta grafika, sprawne działanie wszystkich elementów strony pomoga w maksynalnym dotarciu do potrzebnych informacji. Wszystkie te elementy dobrze zgrane sprawią, że odbiorcy szybciej dokonają zakupu, zamówią usługę, dopiszą się do newslettera czy wypełnią formularz kontaktowy. Dzięki temu strona skutecznie zareklamuje się jako godnego zaufania, wydajnego przedsiębiorcę i zwiększy Twoje zyski.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <!-- END 2 -->
                    <!-- 3 -->
                    <div class="about-section available">
                        <p class="about-quotation">
                            Available for freelance
                            <br/>
                            <span class="about-quotation-small">And for a beer.</span>
                        </p>
                    </div>
                    <!-- END 3 -->
                </div>
                <DropMeALine section="first"/>
            </div>
        </div>
    </section>
</template>

<script>
import DropMeALine from '../components/Drop-me-a-line'
import { TimelineMax, TweenLite } from 'gsap'

export default {
  name: 'About',
  components: {
    DropMeALine
  },
  data () {
    return {
      skills: [
        { name: 'HTML/Jade' },
        { name: 'SCSS/SASS' },
        { name: 'Handlebars' },
        { name: 'JavaScript/ES6' },
        { name: 'VueJS/VUEX' },
        { name: 'ReactJs' },
        { name: 'WordPress' }
      ],
      abilities: [
        { name: 'Frontend Development' },
        { name: 'Interaction Design' },
        { name: 'User Experience' }
      ],
      Slider: [
        {
          elementName: null,
          element: null,
          viewWidth: 0,
          viewHeight: 0,
          currentPos: 0,
          startPos: 0,
          loopInterval: null,
          defaultOptions: {
            autoplay: false,
            timer: 10
          },
          settings: {},
          currentSlide: 0,
          loop: null
        }]
    }
  },
  methods: {
  //
  },
  mounted () {
    let $intro = document.querySelector('.one-techno-row')
    let $slider = document.querySelectorAll('.techno-list')
    let $slides = $slider.find('.one-tech')
    let slidesNum = $slides.length
    let prevSlideID = null
    let currentSlideID = 0
    let isAnimating = false
    let tlMax = new TimelineMax({ onComplete: startAutoPlay })

    tlMax
      .to($intro, 0.5, { delay: 1, autoAlpha: 0 })

    function init () {
      TweenLite.set($slides, {
        left: '-100%'
      })
      gotoSlide(0, 0)
    }

    function gotoNextSlide () {
      let slideToGo = currentSlideID + 1
      if (slideToGo >= slidesNum) {
        slideToGo = 0
      }
      stopAutoPlay()
      gotoSlide(slideToGo, 1, 'next')
    }

    function gotoSlide (slideID, _time, _direction) {
      if (!isAnimating) {
        isAnimating = true
        prevSlideID = currentSlideID
        currentSlideID = slideID
        let $prevSlide = $slides.eq(prevSlideID)
        let $currentSlide = $slides.eq(currentSlideID)
        let time = 1
        if (_time !== null) {
          time = _time
        }
        let direction = 'next'
        if (_direction != null) {
          direction = _direction
        }
        if (direction === 'next') {
          TweenLite.to($prevSlide, time, {
            left: '-100%'
          })
          TweenLite.fromTo($currentSlide, time, {
            left: '100%'
          }, {
            left: '0'
          })
        } else {
          TweenLite.to($prevSlide, time, {
            left: '100%'
          })
          TweenLite.fromTo($currentSlide, time, {
            left: '-100%'
          }, {
            left: '0'
          })
        }
        TweenLite.delayedCall(time, function () {
          isAnimating = false
        })
      }
    }

    function play () {
      gotoNextSlide()
      TweenLite.delayedCall(4, play)
    }

    function startAutoPlay (immediate) {
      if (immediate != null) {
        immediate = false
      }

      if (immediate) {
        gotoNextSlide()
      }
      TweenLite.delayedCall(4, play)
    }

    function stopAutoPlay () {
      this.isAutoPlay = false
      TweenLite.killDelayedCallsTo(play)
    }
    init()
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    .photo-container {
      background-image: url('~@/assets/images/dzianis_makeichyk.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 320px;

      @include breakpoint(medium) {
        height: 420px;
      }

      @include breakpoint(large) {
        height: 500px;
      }
    }

    .about-me-wrapper {
        padding: 60px 0 0;

        @include breakpoint(medium) {
            padding: 80px 0 70px;
        }

        @include breakpoint(medium-lg) {
            padding: 100px 0 75px;
        }

        @include breakpoint(large) {
            padding: 140px 0 108px;
        }
    }

    .about-me,
    .about-section-wrapper {
        padding: 0 10px;

        @include breakpoint(medium) {
            padding: 0 25px;
        }
    }

    .about-title {
        font-size: 11px;
        letter-spacing: 0.5px;
        line-height: 1.67;
        text-align: left;
        color: $gray-medium;
        font-family: 'Montserrat';
        padding-bottom: 15px;
        text-transform: uppercase;

        @include breakpoint(medium-lg) {
            font-size: 12px;
        }
    }

    .sub-header-wrapper {
        @include breakpoint(medium) {
            position: absolute;
            top: -70px;
            left: 3%;
        }
    }

    .about-section {
        padding: 50px 0 10px 0;

        @include breakpoint(medium) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @include breakpoint(large) {
            padding: 70px 0 10px 0;
        }

        .about-left,
        .about-right {
            padding-bottom: 40px;

            @include breakpoint(medium) {
                width: 50%;
                flex: 1 1 50%;
            }
        }

        &.about-top {
            align-items: flex-start;
        }
    }

    .about-description {
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 1.71;
        text-align: left;
        color: #20252a;

        @include breakpoint(medium-lg) {
            font-size: 15px;
            padding-right: 25px;
        }

        @include breakpoint(large) {
            width: 100%;
            max-width: 480px;
        }
    }

    .about-technologies {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;

        .one-techno-row {
            width: 50%;
            flex: 1 1 50%;
        }
    }

    .techno-list {
        list-style: none;
        margin-left: 0;
        padding-left: 0;

        .one-tech {
            font-size: 12px;
            padding: 0 0 7px 5px;
            color: $black;

            @include breakpoint(medium) {
                padding: 0 0 7px 0;
            }

            @include breakpoint(medium-lg) {
                font-size: 13px;
            }
        }
    }
    .about-description-me {
      .about-quotation {
        @include breakpoint(medium) {
          padding: 0 0 0 20%;
        }
      }
    }

    .available {
      .about-quotation {
        @include breakpoint(medium) {
          padding: 0;
          margin: 0 auto;
          text-align: center;
          line-height: 1;
        }
      }
    }

    .about-quotation {
        padding: 0 0 40px 0;
        line-height: 1.2;
        font-size: 40px;
        text-align: center;
        font-family: 'PT Serif', serif;
        overflow: hidden;

        @include breakpoint(medium) {
            padding: 0 0 40px 30px;
            text-align: left;
        }

        span {
            display: inline-flex;
            overflow-x: hidden;
            color: $gray-medium-1;
            transition: 0.3s ease;

            &:before {
                line-height: 1.6;
            }

            &:hover {
                color: $white;
            }
        }

        .about-quotation-small {
            font-family: 'Montserrat';
            font-size: 14px;
            text-align: left;
        }
    }

    .about-me-text-wrapper {
        width: 100%;
        background: $blue-sea;
        padding: 40px 30px;

        @include breakpoint(medium) {
            padding: 50px;
        }

        @include breakpoint(medium-lg) {
            padding: 60px;
        }

        @include breakpoint(large) {
            padding: 70px;
        }

        .about-me-text {
            color: $gray-hard;
            font-family: 'Montserrat';
            font-size: 14px;
            text-align: left;
            font-weight: 400;
            line-height: 1.5;

            @include breakpoint(medium-lg) {
                line-height: 1.7;
            }
        }
    }

    .button {
        margin: 0 auto;
    }
</style>
