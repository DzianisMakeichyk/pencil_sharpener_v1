<template>
    <div class="container">
        <div class="full-height portfolio-page">
            <div class="content-container">
                <div class="reveal-me"></div>
                <div class="full-height-content relative">
                    <div class="bg-gray">
                        <div class="portfolio-top">
                            <p class="portfolio-heading heading-text">
                                Są tu 6 projektów,
                                wybrahych dla prezentacji
                            </p>
                            <p class="portfolio-desc description">
                                Akurat jest ich ponad 30 dla ponad 10 klientów, nie mogę pokazać Ci wszystkiego ;) I dlatego wybrałem kilka najciekawszych.
                                <br/>
                                Enjou!
                            </p>
                        </div>
                        <!-- Projects -->
                        <div class="projects-wrapper">
                            <div class="projects">
                                <div class="project-shot" v-for="project in projects" :key="project">
                                    <div class="one-project-bg" v-bind:class="project.classImage"></div>
                                    <div class="one-project-body">
                                        <h4 class="one-project-title">
                                            {{project.name}}
                                        </h4>
                                        <h5 class="one-project-description description">
                                            {{project.description}}
                                        </h5>
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

export default {
  name: 'Portfolio',
  components: {
    DropMeALine
  },
  data () {
    return {
      projects: [
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'},
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'},
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'},
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'},
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'},
        {name: 'Stypendium z wyboru', description: 'Development, Branding, Product, Marketing', classImage: 'first-project', url: 'url'}
      ]
    }
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
        font-family: 'Montserrat';
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
         background-position: center;
         background-size: cover;
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
             background-image: url('~@/assets/images/dzianis_makeichyk.jpg');
         }

         &:before {
             content: '';
             position: absolute;
             bottom: 0;
             left: -25px;
             width: 120%;
             /*height: 100%;*/
             height: 0;
             background-color: $darkviolet;
             opacity: .7;
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
            font-family: 'Montserrat';
        }
    }
</style>
