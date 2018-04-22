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
        {src: require('../assets/images/partners/google.png'), alt: 'google'}
      ]
    }
  }
}
</script>

<!--scoped-->
<style lang="scss">
    .partners-container {
        display: flex;
        flex-direction: column;

        .partner-box {
            width: 100%;
            padding: 62px 58px;

            .partner {
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>
