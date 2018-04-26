<template>
    <section class="container">
        <div class="content-container with-top">
            <div class="bg-gray relative">
                <div class="reveal-me"></div>
                <div class="sub-header-wrapper">
                    <h2 class="sub-header">
                        O Mnie
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'About'
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    .sub-header-wrapper {
        top: -3%;

        @include breakpoint(medium) {
            top: -4%;
        }

        @include breakpoint(medium-lg) {
            top: -7%;
        }

        @include breakpoint(large) {
            top: -8%;
        }
    }
</style>
