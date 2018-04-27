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
                        <div class="about-section">
                        <div class="about-left">
                            <p class="about-title">
                                O mnie
                            </p>
                            <p class="about-description">
                                Hi there, I am a creative developer and designer, I enjoy building beautiful and thoughtful experiences. I like to mix code surprising visuals and pleasing interactions. I take my work seriously but not myself.
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
                    <div class="about-section">
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
                                    Nazywam się <b>Dzianis Makeichyk</b> i jestem <b>Front-End Developerem</b>. Zajmuję się tworzeniem stron internetowych, blogów, od responsywnego mailingu, banera, do layout wykonany na podstawie <b>ReactJS i VueJs</b>. Zawsze dążę do tego, żeby każdy zbudowany przez mnie projekt był całkowicie optymalny od strony użytkowej oraz graficznej. Dzięki latom doświadczenia przy tworzeniu projektów internetowych oraz graficznych przyjąłem i trzymam się politykę, że właściwa, intuicyjna nawigacja, inteligentna i przejrzysta grafika, sprawne działanie wszystkich elementów strony pomoga w maksynalnym dotarciu do potrzebnych informacji. Wszystkie te elementy dobrze zgrane sprawią, że odbiorcy szybciej dokonają zakupu, zamówią usługę, dopiszą się do newslettera czy wypełnią formularz kontaktowy. Dzięki temu strona skutecznie zareklamuje się jako godnego zaufania, wydajnego przedsiębiorcę i zwiększy Twoje zyski.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <!-- END 2 -->
                    <!-- 3 -->
                    <div class="about-section">
                        <p class="about-quotation">
                            Available for freelance
                            <br/>
                            <span class="about-quotation-small">And for a beer.</span>
                        </p>
                    </div>
                    <!-- END 3 -->
                </div>
                <DropMeALine/>
            </div>
        </div>
    </section>
</template>

<script>
import DropMeALine from '../components/Drop-me-a-line'

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
      ]
    }
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
    }

    .about-me,
    .about-section-wrapper {
        padding: 0 10px;
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
    }

    .about-section {
        padding: 50px 0 10px 0;
    }

    .about-description {
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 1.71;
        text-align: left;
        color: #20252a;
    }

    .about-left,
    .about-right {
        padding-bottom: 40px;
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
        }
    }

    .about-quotation {
        padding: 0 0 40px 30px;
        line-height: 1.2;
        font-size: 40px;
        text-align: left;
        font-family: 'PT Serif', serif;
        overflow: hidden;

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

        .about-me-text {
            color: $gray-hard;
            font-family: 'Montserrat';
            font-size: 14px;
            text-align: left;
            font-weight: 400;
            line-height: 1.5;
        }
    }

    .button {
        margin: 0 auto;
    }
</style>
