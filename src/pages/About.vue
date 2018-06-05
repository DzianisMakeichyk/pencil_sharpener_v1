<template>
    <section class="container ">
        <div class="photo-container"></div>
        <div class="content-container">
            <div class="bg-gray relative">
                <div class="about-me-wrapper animation">
                    <div class="about-me">
                        <div class="sub-header-wrapper">
                            <div class="sub-header-box">
                                <p class="about-title">
                                    {{ $t("about.work") }}
                                </p>
                                <h1 class="sub-header">
                                    Dzianis Makeichyk
                                </h1>
                            </div>
                        </div>
                    </div>
                    <!-- 1 -->
                    <div class="about-section-wrapper">
                        <div class="about-section about-top">
                            <div class="about-left">
                                <div class="about-title relative">
                                    <div class="box-reveal"></div>
                                    O mnie
                                </div>
                                <div class="about-description relative">
                                    <div class="box-reveal-small"></div>
                                    <span v-html="$t('about.description')"></span>
                                </div>
                            </div>
                            <div class="about-right">
                                <div class="about-technologies">
                                    <div class="one-techno-row">
                                        <div class="about-title relative">
                                            <div class="box-reveal"></div>
                                            {{ $t("about.technologie") }}
                                        </div>
                                        <ul class="techno-list">
                                           <li class="one-tech relative" v-for="skill in skills" :key="skill.name">
                                               <div class="box-reveal-small"></div>
                                               {{skill.name}}
                                           </li>
                                        </ul>
                                    </div>
                                    <div class="one-techno-row">
                                        <div class="about-title relative">
                                            <div class="box-reveal-small"></div>
                                            {{ $t("about.skill") }}
                                        </div>
                                        <ul class="techno-list">
                                            <li class="one-tech relative" v-for="ability in abilities" :key="ability.name">
                                                <div class="box-reveal-small"></div>
                                                {{ability.name}}
                                            </li>
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
                            <div class="about-quotation relative">
                                <div class="box-reveal-small"></div>
                                What we
                                <br/>
                                know how
                                <br/>
                                to do <span class="select-text">well.</span>
                            </div>
                        </div>
                        <div class="about-right">
                            <div class="about-me-text-wrapper">
                                <div class="about-me-text relative">
                                    <div class="box-reveal-small"></div>
                                    {{ $t("about.second-description") }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END 2 -->
                    <!-- 3 -->
                    <div class="about-section available">
                        <p class="about-quotation">
                            {{ $t("about.available_1") }}
                            <br/>
                            <span class="about-quotation-small">
                                {{ $t("about.available_2") }}
                            </span>
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
import $ from 'jquery'
import TweenMax from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

export default {
  name: 'About',
  metaInfo: {
    title: 'O mnie | Dzianis Makeichyk'
  },
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
        { name: 'VueJS/Vuex' },
        { name: 'ReactJs' },
        { name: 'PWA' },
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
    let slide = $('.one-techno-row1')
    let slideUl = slide.find('.techno-list')
    let slideUlLi = slideUl.find('.one-tech')
    let slideTime = 2000
    let controller = new ScrollMagic.Controller()
    $('.about-section').each(function () {
      let revealMe = $(this).find('.box-reveal-small')
      let enterReveal = TweenMax.staggerTo(revealMe, 0.65, {scaleX: 0}, 0.2)
      new ScrollMagic.Scene({
        triggerElement: this
      })
        .setTween(enterReveal)
        .addTo(controller)
    })

    function runSlide () {
      if (slideUlLi.hasClass('slide-active')) {
        $('.slide-active').slideDown().siblings().slideUp()
      }
    }

    function startSlide () {
      slideUlLi.first().addClass('slide-active').siblings().removeClass('slide-active')
      runSlide()
    }
    startSlide()

    function autoSlide () {
      if ($('.slide-active').is(':last-of-type')) {
        setTimeout(startSlide, slideTime / 100)
      } else {
        $('.slide-active').next().addClass('slide-active').siblings().removeClass('slide-active')
        runSlide()
      }
    }
    slideUlLi.each(function () {
      runSlide()
    })
    setInterval(autoSlide, slideTime)
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    .container {
        background-color: $gray-light;
    }
    .photo-container {
      background-image: url('~@/assets/images/dzianis_makeichyk.jpg');
      background-size: cover;
      background-position: 87% 50%;
      background-repeat: no-repeat;
      height: 320px;

      @include breakpoint(medium) {
        height: 420px;
        background-position: center;
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
            /*padding: 140px 0 108px;*/
            padding: 100px 0 108px;
        }

        .sub-header-wrapper {
            .sub-header {
                @include breakpoint(medium-lg) {
                    font-size: 50px;
                }

                @include breakpoint(large) {
                    font-size: 52px;
                }
            }
        }
    }

    .about-me,
    .about-section-wrapper {
        padding: 0 15px;

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
        font-family: 'Montserrat', sans-serif;
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

        &.box-shadow {
            @include breakpoint(medium) {
                box-shadow: 0 2px 16px 0 rgba(20, 20, 20, 0.5);
            }
        }

        .sub-header-box {
            position: relative;
            padding: 0 35px 7px 30px;
            z-index: 1001;
            &:before {
                @include breakpoint(medium) {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: $darkviolet;
                }
            }
        }

        .sub-header,
        .about-title {
            @include breakpoint(medium) {
                color: $white;
                position: relative;
            }
        }

        .about-title {
            @include breakpoint(medium) {
                padding: 12px 0 5px;
            }
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
        font-family: 'Montserrat', sans-serif;
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
            font-family: 'Montserrat', sans-serif;
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
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            text-align: left;
            font-weight: 400;
            line-height: 1.5;

            @include breakpoint(medium-lg) {
                line-height: 1.7;
            }

            .box-reveal-small {
                background: $blue-sea;
            }
        }
    }

    .button {
        margin: 0 auto;
    }
</style>
