<template>
    <section class="container">
        <div class="full-height">
            <div class="content-container with-top">
                <div class="reveal-me"></div>
                <div class="relative">
                    <div class="full-height-content">
                        <div class="sub-header-wrapper top-position">
                            <h2 class="sub-header">
                                Współpraca
                            </h2>
                        </div>
                        <div class="partners-container bg-gray">
                            <!-- One partner -->
                            <div class="partner-box" v-for="partner in partners" :key="partner">
                                <div class="partner">
                                    <img :src="partner.src" :alt="partner.alt" />
                                    <svg width="400px" height="22px" viewBox="0 0 400 22" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="navigation-line"><g stroke="#9B30FF" stroke-width="22"><path d="M0,11 L400,11" id="line" style=""></path></g></svg>
                                </div>
                            </div>
                            <!-- END One partner -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Partners',
  data () {
    return {
      partners: [
        {src: require('../assets/images/partners/google.png'), alt: 'google'},
        {src: require('../assets/images/partners/google.png'), alt: 'google'},
        {src: require('../assets/images/partners/google.png'), alt: 'google'},
        {src: require('../assets/images/partners/google.png'), alt: 'google'},
        {src: require('../assets/images/partners/google.png'), alt: 'google'},
        {src: require('../assets/images/partners/google.png'), alt: 'google'}
      ]
    }
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    .sub-header-wrapper {
        top: -3%;

        @include breakpoint(medium) {
            top: -6%;
        }

        @include breakpoint(medium-lg) {
            top: -10%;
        }

        @include breakpoint(large) {
            top: -17%;
        }

        @include breakpoint(extralarge) {
            top: -7%;
        }
    }

    .full-height-content {
        @include breakpoint(medium) {
            position: absolute;
            width: 100%;
            bottom: 30px;
        }

        @include breakpoint(medium-lg) {
            top: 55%;
            transform: translateY(-50%);
        }
    }

    .partners-container {
        .partner-box {
            width: 100%;
            padding: 62px 58px;

            @include breakpoint(medium) {
                width: 50%;
                padding: 80px 0;
            }

            @include breakpoint(medium-lg) {
                width: 33.33%;
                padding: 95px 0;
            }

            @include breakpoint(large) {
                padding: 80px 0;
            }

            @include breakpoint(extralarge) {
                padding: 112px 0;
            }
        }

        .partner {
            position: relative;
            width: 100%;
            max-width: 150px;
            margin: 0 auto;

            img {
                display: block;
                width: 100%;
            }

            svg {
                position: absolute;
                top: 50%;
                left: -10%;
                width: 0;
                height: 11px;
                transform-origin: 0 100%;
                transform: translateY(0px) rotate(-5deg);
                transition: 0.3s ease;
            }

            &:hover {
                svg {
                    width: 120%;
                }
            }
        }
    }

    .relative {
        height: 100%;
    }
</style>
