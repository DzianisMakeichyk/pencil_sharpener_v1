<template>
    <section class="container">
        <div class="photo-container"></div>
        <div class="content-container">
            <div class="bg-gray relative">
                <div class="reveal-me"></div>
                <div class="sub-header-wrapper">
                    <h1 class="sub-header">
                        Dzianis Makeichyk
                    </h1>
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
