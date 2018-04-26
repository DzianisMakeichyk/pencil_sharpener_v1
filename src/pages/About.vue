<template>
    <section class="container">
        <div class="reveal-me"></div>
        <div class="photo-container"></div>
        <div class="content-container">
            <div class="bg-gray relative">
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
                    <div class="about-section">
                        <p class="about-title">
                            O mnie
                        </p>
                        <p class="about-description">
                            Hi there, I am a creative developer and designer, I enjoy building beautiful and thoughtful experiences. I like to mix code surprising visuals and pleasing interactions. I take my work seriously but not myself.
                        </p>
                    </div>
                    <!-- END 1 -->
                    <!-- 2 -->
                    <div class="about-section">

                    </div>
                    <!-- END 2 -->
                    <!-- 3 -->
                    <div class="about-section">

                    </div>
                    <!-- END 3 -->
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

    .about-me-wrapper {
        padding: 60px 10px;
    }

    .about-title {
        font-size: 11px;
        letter-spacing: 0.5px;
        line-height: 1.67;
        text-align: left;
        color: $gray-medium;
        font-family: 'Montserrat';
        padding-bottom: 10px;
    }

    .about-section {
        padding: 50px 0 0 0;
    }

    .about-description {
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 1.71;
        text-align: left;
        color: #20252a;
    }
</style>
