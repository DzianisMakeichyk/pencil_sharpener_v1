<template>
    <div>
        <section class="container">
            <div class="content-container with-top">
                <div class="bg-gray relative">
                    <h2 class="sub-header">
                        Współpraca
                    </h2>
                    <div class="partners-container">
                        <!-- One partner -->
                        <div class="partner-box" v-for="partner in partners" v-bind:key="partner">
                            <div class="partner">
                                <img :src="partner.src" :alt="partner.alt"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
    .sub-header {
        top: -3%;

        @include breakpoint(medium) {
            top: -4%;
        }

        @include breakpoint(medium-lg) {
            top: -7%;
        }
    }

    .partners-container {
        display: flex;
        flex-direction: column;

        @include breakpoint(medium) {
            flex-wrap: wrap;
            flex-direction: row;
        }

        @include breakpoint(large) {
            padding-left: 25%;
        }

        .partner-box {
            width: 100%;
            padding: 62px 58px;

            @include breakpoint(medium) {
                width: 50%;
                padding: 112px 0;
            }

            @include breakpoint(medium-lg) {
                width: 33.33%;
            }

            .partner {
                width: 100%;
                max-width: 150px;
                margin: 0 auto;

                img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>
