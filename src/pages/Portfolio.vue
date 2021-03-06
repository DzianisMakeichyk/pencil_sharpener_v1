<template>
    <div class="container">
        <div class="full-height portfolio-page">
            <div class="content-container">
                <div class="full-height-content relative animation">
                    <div class="bg-gray relative">
                        <div class="portfolio-top">
                            <div class="portfolio-heading heading-text">
                                {{ $t("project.description_1") }}
                            </div>
                            <div class="portfolio-desc description">
                                <p v-html="$t('project.description_2')"></p>
                            </div>
                        </div>
                        <ScrollDownArrow scrollTo="portfolio-start"/>
                        <!-- Projects -->
                        <div class="projects-wrapper" id="portfolio-start">
                            <div class="projects">
                                <div
                                    class="project-shot"
                                    v-for="product in products"
                                    :key="product.id"
                                >
                                    <div class="project-link">
                                        <div class="reveal-me-small"></div>
                                        <localized-link
                                                :to="`portfolio/${product.url}`"
                                                :product="product"
                                        >
                                            <div class="one-project-bg" :class="product.image"></div>
                                            <div class="one-project-body">
                                                <h4 class="one-project-title">
                                                    {{product.name}}
                                                </h4>
                                                <h5 class="one-project-description description">
                                                    {{product.description}}
                                                </h5>
                                            </div>
                                        </localized-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END Projects -->
                    </div>
                </div>
                <DropMeALine section="second"/>
            </div>
        </div>
    </div>
</template>

<script>
import DropMeALine from '../components/Drop-me-a-line'
import ScrollDownArrow from '../components/ScrollDownArrow'
import LocalizedLink from '../components/Locale/LocalizedLink'
import $ from 'jquery'
import { TweenMax, Power0 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

export default {
  name: 'Portfolio',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
  components: {
    DropMeALine,
    LocalizedLink,
    ScrollDownArrow
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    fetch(`/static/api/${this.$route.params.locale}/products.json`)
      .then(response => response.json())
      .then((products) => { this.products = products })
      .then(() => {
        let controller = new ScrollMagic.Controller()
        $('.project-shot').each(function () {
          let bg = $(this).find('.project-link')
          let parallax = TweenMax.from(bg, 1, {
            y: '50%',
            ease: Power0.easeNone
          })
          new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '100%'
          })
            .setTween(parallax)
            .addTo(controller)
        })
        $('.project-shot').each(function () {
          let revealMe = $(this).find('.reveal-me-small')
          let enterReveal = TweenMax.staggerTo(revealMe, 0.65, {delay: 0.55, scaleX: 0}, 0.2)
          new ScrollMagic.Scene({
            triggerElement: this,
            offset: '-220%'
          })
            .setTween(enterReveal)
            .addTo(controller)
        })
      })
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped>
    .portfolio-top {
        padding: 220px 10px 100px;
        text-align: center;

        @include breakpoint(medium) {
            width: 100%;
            max-width: 320px;
            margin-left: 52%;
            padding: 275px 0 120px;
            text-align: left;
        }

        @include breakpoint(large) {
            padding: 250px 0 100px;
        }

        @include breakpoint(extralarge) {
            padding: 300px 0 200px;
        }
    }

    .portfolio-heading {
        padding: 0 0 15px;
        line-height: 1.25;

        @include breakpoint(large) {
            padding: 0 0 20px;
        }

        @include breakpoint(extralarge) {
            padding: 0 0 25px;
        }
    }

    .portfolio-desc {
        color: $gray-black;
        line-height: 1.71;
        font-family: 'Montserrat', sans-serif;
    }

    .projects {
        @include breakpoint(medium) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            max-width: 90%;
            margin: 0 auto;
        }

        @include breakpoint(large) {
            max-width: 1050px;
        }
    }

    .project-shot {
        padding-bottom: 25px;
        margin-bottom: 25px;
        cursor: pointer;

        @include breakpoint(medium) {
            padding-bottom: 75px;
            width: 40%;
            max-width: 480px;
            flex: 1 1 40%;
        }

        @include breakpoint(medium-lg) {
            /*padding-bottom: 100px;*/
        }

        @include breakpoint(large) {
            /*padding-bottom: 140px;*/
        }

        &:nth-child(odd) {
            @include breakpoint(medium) {
                margin-right: 25px;
            }
            @include breakpoint(medium-lg) {
                margin-right: 45px;
            }
            @include breakpoint(large) {
                margin-right: 60px;
            }
        }

        &:nth-child(2) {
            @include breakpoint(medium) {
                margin-top: 50%;
            }

            @include breakpoint(large) {
                margin-top: 35%;
            }
        }

        &:nth-child(3),
        &:nth-child(5) {
            @include breakpoint(medium) {
                margin-top: -50%;
            }

            @include breakpoint(large) {
                margin-top: -35%;
            }
        }

        &:hover {
            .one-project-bg {
                &:before {
                    height: 100%;
                    transform: translateY(0) rotate(0);
                }
            }
        }
    }
    .one-project-bg {
         position: relative;
         width: 100%;
         height: 360px;
         margin-bottom: 25px;
         /*background-position: center;*/
         background-position: 32%;
         background-size: cover;
         /*background-size: inherit;*/
         background-repeat: no-repeat;
         overflow: hidden;

         @include breakpoint(medium) {
             height: 420px;
         }

         @include breakpoint(medium-lg) {
             height: 460px;
             margin-bottom: 35px;
         }

         @include breakpoint(large) {
             height: 500px;
             margin-bottom: 40px;
         }

         &.first-project {
             background-image: url('~@/assets/images/portfolio/mobile/stypendium-z-wyboru_01.jpg');
         }

         &.second-project {
             background-image: url('~@/assets/images/portfolio/mobile/novadolna_01.jpg');
         }

         &.third-project {
             background-image: url('~@/assets/images/portfolio/mobile/vgcapital_01.jpg');
         }

         &.four-project {
             background-image: url('~@/assets/images/portfolio/mobile/telegram_01.jpg');
         }

         &.five-project {
             background-image: url('~@/assets/images/portfolio/mobile/cateringoo_01.jpg');
         }

         &.six-project {
             background-image: url('~@/assets/images/portfolio/mobile/fest-makabra_01.jpg');
         }

         &:before {
             content: '';
             position: absolute;
             bottom: 0;
             left: -25px;
             width: 120%;
             /*height: 100%;*/
             height: 0;
             background: $darkviolet-color;
             opacity: .4;
             transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
             transform: translateY(100px) rotate(15deg);
         }
     }

    .one-project-body {
        text-align: center;
        padding: 0 15px;

        @include breakpoint(medium) {
            text-align: left;
            padding: 0;
        }

        .one-project-title {
            font-family: 'PT Serif', serif;
            font-size: 26px;
            color: $black;
            padding-bottom: 10px;

            @include breakpoint(medium) {
                padding-bottom: 15px;
                font-size: 28px;
            }

            @include breakpoint(large) {
                font-size: 32px;
                padding-bottom: 20px;
            }
        }

        .one-project-description {
            color: $gray-black;
            line-height: 1.71;
            font-family: 'Montserrat', sans-serif;
        }
    }
</style>
