<template>
    <div>
        <section class="container">
            <div class="photo-container" :class="product.classImage"></div>
            <div class="content-container">
                <div class="bg-gray relative">
                    <div class="project-me-wrapper">
                        <div class="project-me">
                            <div class="sub-header-wrapper">
                                <div class="sub-header-box">
                                    <h1 class="sub-header">
                                        {{ product.name }}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="project-section-wrapper">
                            <div class="project-section project-top">
                                <div class="project-left">
                                    <div class="project-title relative">
                                        <div class="box-reveal"></div>
                                        {{ $t("project.description-name") }}
                                    </div>
                                    <div class="project-description relative">
                                        <div class="box-reveal"></div>
                                        <p v-html="product.description_large"></p>
                                    </div>

                                    <div class="project-buttons">
                                        <div class="drop-me-one">
                                            <a :href="product.see_project" class="button-wrapper" target="_blank">
                                               <span class="button primary">
                                                   {{ $t("project.see-project") }}
                                               </span>
                                            </a>
                                        </div>

                                        <div class="drop-me-one" v-if="product.repo_project">
                                            <a :href="product.repo_project" class="button-wrapper" target="_blank">
                                               <span class="button primary">
                                                   {{ $t("project.see-repo") }}
                                               </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-right">
                                    <div class="project-technologies">
                                        <div class="one-techno-row">
                                            <div class="project-title relative">
                                                <div class="box-reveal"></div>
                                                {{ $t("about.technologie") }}
                                            </div>
                                            <ul class="techno-list techno-box relative">
                                                <div class="box-reveal"></div>
                                                <li class="one-tech" v-for="technology in product.technologies" :key="technology.name">
                                                    <div class="select-text">
                                                        {{technology.name}}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="one-techno-row">
                                            <div class="project-title relative">
                                                <div class="box-reveal"></div>
                                                {{ $t("project.client") }}
                                            </div>
                                            <ul class="techno-list">
                                                <li class="one-tech relative">
                                                    <div class="box-reveal"></div>
                                                    {{ product.client }}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="one-techno-row">
                                            <div class="project-title relative">
                                                <div class="box-reveal"></div>
                                                {{ $t("project.year") }}
                                            </div>
                                            <ul class="techno-list">
                                                <li class="one-tech relative">
                                                    <div class="box-reveal"></div>
                                                    {{ product.year }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Arrows -->

            <!-- Left-->
            <localized-link
                class="sub-menu left"
                :to=product.prev
            >
                <div class="sub-title-left">
                    <span>
                        {{ $t("project.prev-project") }}
                    </span>
                </div>
            </localized-link>
            <!-- Right-->
            <localized-link
                class=" sub-menu right"
                :to=product.next
            >
                <div class="sub-title-right">
                    <span>
                        {{ $t("project.next-project") }}
                    </span>
                </div>
            </localized-link>
            <!-- Bottom-->
            <!--<div class="sub-menu bottom">-->
                <!--<div class="sub-title-right">-->
                    <!--Hello-->
                <!--</div>-->
            <!--</div>-->
        </section>
    </div>
</template>

<script>
import find from 'lodash/find'
import LocalizedLink from '../../components/Locale/LocalizedLink'

export default {
  name: 'OneProject',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
  components: {
    LocalizedLink
  },
  data () {
    return {
      product: []
    }
  },
  mounted () {
    fetch(`/static/api/${this.$route.params.locale}/products.json`)
      .then(response => response.json())
      .then((products) => { this.product = products })
      .then(() => {
        find(this.product, (project) => {
          if (project.url === this.$route.params.slug) {
            this.product = project
          }
        })
      })
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    .sub-menu {
        position: fixed;
        background: $white;
        z-index: 350;
        top: 0;

        &.left,
        &.right {
            height: 100%;
            width: 25px;
            background-color: $white;

            @include breakpoint(medium) {
                width: 30px;
            }

            @include breakpoint(large) {
                width: 55px;
            }

            @include breakpoint(extralarge) {
                width: 70px;
            }
        }

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }

        &.bottom {
            width: 100%;
            height: 25px;
            left: 0;
            right: 0;
            bottom: 0;

            @include breakpoint(medium) {
                height: 30px;
            }

            @include breakpoint(large) {
                height: 55px;
            }

            @include breakpoint(extralarge) {
                height: 70px;
            }
        }

        .sub-title-left {
            position: fixed;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            z-index: 200;
            color: #b1b1b1;
            font-size: 10px;
            font-family: 'GT-Haptik-Thin', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;

            @include breakpoint(large) {
                font-size: 11px;
            }
        }

        .sub-title-right {
            position: fixed;
            top: 50%;
            transform: translateY(-50%) rotate(90deg);
            z-index: 200;
            color: #b1b1b1;
            font-size: 10px;
            font-family: 'GT-Haptik-Thin', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;

            @include breakpoint(large) {
                font-size: 11px;
            }
        }
    }
    .locale-pl {
        .sub-title-left {
            left: -45px;

            @include breakpoint(medium) {
                left: -43px;
            }

            @include breakpoint(large) {
                left: -33px;
            }

            @include breakpoint(extralarge) {
                left: -25px;
            }
        }

        .sub-title-right {
            right: -44px;

            @include breakpoint(medium) {
                right: -42px;
            }

            @include breakpoint(large) {
                right: -33px;
            }

            @include breakpoint(extralarge) {
                right: -25px;
            }
        }
    }
    .locale-en {
        .sub-title-left {
            left: -41px;
            @include breakpoint(medium) {
                left: -39px;
            }

            @include breakpoint(large) {
                left: -30px;
            }

            @include breakpoint(extralarge) {
                left: -21px;
            }
        }

        .sub-title-right {
            right: -30px;

            @include breakpoint(medium) {
                right: -28px;
            }

            @include breakpoint(large) {
                right: -19px;
            }

            @include breakpoint(extralarge) {
                right: -11px;
            }
        }
    }
    .photo-container {
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

        &.first-project {
            background-image: url('~@/assets/images/portfolio/desktop/stypendium-z-wyboru_01.png');
        }

        &.second-project {
            background-image: url('~@/assets/images/portfolio/desktop/novadolna_01.png');
        }

        &.third-project {
            background-image: url('~@/assets/images/portfolio/desktop/vgcapital_01.png');
        }

        &.four-project {
            background-image: url('~@/assets/images/portfolio/desktop/telegram_01.png');
        }

        &.five-project {
            background-image: url('~@/assets/images/portfolio/desktop/cateringoo_01.png');
        }

        &.six-project {
            background-image: url('~@/assets/images/portfolio/desktop/fest-makabra_01.png');
        }
    }

    .project-me-wrapper {
        padding: 40px 0 0;

        @include breakpoint(medium) {
            padding: 50px 0 10px;
        }

        @include breakpoint(medium-lg) {
            padding: 70px 0 55px;
        }

        @include breakpoint(large) {
            padding: 90px 0 75px;
        }
    }

    .project-me,
    .project-section-wrapper {
        padding: 0 15px;

        @include breakpoint(medium) {
            padding: 0 25px;
        }

        @include breakpoint(large) {
            width: 100%;
            max-width: 90%;
            margin: 0 auto;
        }
    }

    .project-title {
        font-size: 10px;
        letter-spacing: 0.5px;
        line-height: 1.67;
        text-align: left;
        color: $gray-medium;
        font-family: 'Montserrat', sans-serif;
        padding-bottom: 15px;
        text-transform: uppercase;
        font-weight: 500;

        @include breakpoint(medium-lg) {
            font-size: 12px;
        }
    }

    .sub-header-wrapper {
        @include breakpoint(medium) {
            position: absolute;
            top: -40px;
            left: 3%;
        }

        &.box-shadow {
            @include breakpoint(medium) {
                box-shadow: 0 2px 16px 0 rgba(20, 20, 20, 0.5);
            }
        }

        .sub-header-box {
            @include breakpoint(medium) {
                position: relative;
                padding: 0 35px 5px;
            }

            &:before {
                @include breakpoint(medium) {
                    display: block;
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

        .sub-header {
            @include breakpoint(medium) {
                color: $white;
            }
        }
    }

    .project-section {
        padding: 50px 0 10px 0;

        @include breakpoint(medium) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @include breakpoint(large) {
            padding: 70px 0 10px 0;
        }

        .project-left,
        .project-right {
            padding-bottom: 40px;

            @include breakpoint(medium) {
                width: 33.33%;
                flex: 1 1 33.33%;
            }
        }

        &.project-top {
            align-items: flex-start;
        }
    }

    .project-description {
        font-family: 'Montserrat', sans-serif;
        /*font-size: 14px;*/
        font-size: 13px;
        line-height: 1.71;
        text-align: left;
        color: #20252a;
        padding-bottom: 45px;

        @include breakpoint(medium) {
            padding-bottom: 60px;
        }

        @include breakpoint(medium-lg) {
            /*font-size: 15px;*/
            padding-right: 25px;
        }

        @include breakpoint(large) {
            width: 100%;
            max-width: 480px;
            padding-bottom: 77px;
        }
    }

    .project-technologies {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;

        .one-techno-row {
            width: 33.33%;
            flex: 1 1 33.33%;
        }
    }

    .techno-list {
        list-style: none;
        margin-left: 0;
        padding-left: 0;

        &.techno-box {
            margin-left: -5px;
        }

        .one-tech {
            font-size: 11px;
            /*padding: 0 0 7px 5px;*/
            padding: 0 0 0 5px;
            color: $black;

            @include breakpoint(medium) {
                /*padding: 0 0 7px 0;*/
                padding: 0;
            }

            @include breakpoint(medium-lg) {
                font-size: 13px;
            }

            .select-text {
                overflow: hidden;
                padding: 1px 5px;

                &:hover {
                    color: $white;
                }
            }
        }
    }
    .project-description-me {
        .project-quotation {
            @include breakpoint(medium) {
                padding: 0 0 0 20%;
            }
        }
    }

    .available {
        .project-quotation {
            @include breakpoint(medium) {
                padding: 0;
                margin: 0 auto;
                text-align: center;
                line-height: 1;
            }
        }
    }

    .project-quotation {
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

        .project-quotation-small {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            text-align: left;
        }
    }

    .project-me-text-wrapper {
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

        .project-me-text {
            color: $gray-hard;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            text-align: left;
            font-weight: 400;
            line-height: 1.5;

            @include breakpoint(medium-lg) {
                line-height: 1.7;
            }
        }
    }

    .project-buttons {
        display: flex;
        flex-direction: column;

        @include breakpoint(large) {
            flex-direction: row;
            justify-content: space-between;
            max-width: 500px;
            margin: 0 auto 0 0;
        }

        .drop-me-one {
            margin-bottom: 20px;
        }

        .button {
            margin: 0 auto;
            width: 220px;

            @include breakpoint(medium) {
                width: 230px;
            }

            @include breakpoint(large) {
                width: 225px;
                margin: 0 auto 0 0;
            }
        }
    }

    .bg-gray {
        @include breakpoint(medium) {
            height: 100%;
        }
    }
</style>
