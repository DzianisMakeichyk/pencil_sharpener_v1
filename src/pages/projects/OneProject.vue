<template>
    <section class="container">
        <div class="reveal-me"></div>
        <div class="photo-container"></div>
        <div class="content-container">
            <div class="bg-gray relative">
                <div class="project-me-wrapper">
                    <div class="project-me">
                        <div class="sub-header-wrapper">
                            <h1 class="sub-header">
                                {{ currentProject.name }}
                            </h1>
                        </div>
                    </div>
                    <div class="project-section-wrapper">
                        <div class="project-section project-top">
                            <div class="project-left">
                                <p class="project-title">
                                    opis
                                </p>
                                <p class="project-description">
                                    {{ currentProject.description }}
                                </p>

                                <div class="project-buttons">
                                    <div class="drop-me-one">
                                        <a :href="currentProject.see_project" class="button-wrapper" target="_blank">
                                           <span class="button primary">
                                               Zobacz projekt
                                           </span>
                                        </a>
                                    </div>

                                    <div class="drop-me-one" v-if="currentProject.repo_project">
                                        <a :href="currentProject.repo_project" class="button-wrapper" target="_blank">
                                           <span class="button primary">
                                               Zobacz repozytorium
                                           </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-right">
                                <div class="project-technologies">
                                    <div class="one-techno-row">
                                        <p class="project-title">
                                            Technologie
                                        </p>
                                        <ul class="techno-list">
                                            <li class="one-tech" v-for="technology in currentProject.technologies" :key="technology">{{technology.name}}</li>
                                        </ul>
                                    </div>
                                    <div class="one-techno-row">
                                        <p class="project-title">
                                            klient
                                        </p>
                                        <ul class="techno-list">
                                            <li class="one-tech">{{ currentProject.client }}</li>
                                        </ul>
                                    </div>
                                    <div class="one-techno-row">
                                        <p class="project-title">
                                            rok
                                        </p>
                                        <ul class="techno-list">
                                            <li class="one-tech">{{ currentProject.year }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import find from 'lodash/find'
export default {
  name: 'OneProject',
  data () {
    return {
      dates: [
        {
          slug: 'stypendium-z-wyboru',
          name: 'Stypendium z wyboru',
          image: 'image',
          description: 'Projekt firmy Absolvent.pl. Stypendium z Wyboru to ogólnopolski program stypendialny stworzony po to, by pomagać zdolnym, kreatywnym i ambitnym studentom i młodym absolwentom w realizowaniu swoich marzeń edukacyjnych i zawodowych.',
          technologies: [
            {name: 'ReactJs'},
            {name: 'JavaScript/ES6'},
            {name: 'SCSS/SASS'},
            {name: 'GSAP'}
          ],
          year: '2015',
          client: 'Absolvent.pl',
          see_project: 'https://stypendiumzwyboru.pl/',
          repo_project: '',
          prev: 'prev',
          next: 'next'
        },
        {
          slug: 'makabra',
          name: 'Fest Makabra',
          image: 'image',
          description: 'FEST MAKABRA to nowy, ogólnopolski przegląd filmowy, prezentujący zagraniczne filmy z pogranicza horroru, thrillera, mrocznego fantasy i czarnej komedii. Większość filmów z programu zostanie wyświetlona w Polsce premierowo i będzie to jedyna okazja do obejrzenia ich na wielkim ekranie. Pierwsza edycja przeglądu filmowego FEST MAKABRA odbędzie się w kinach studyjnych i niezależnych w całej Polsce w lutym i marcu 2017 roku. Organizatorem wydarzenia jest dystrybutor filmów Kino Świat.',
          technologies: [
            {name: 'HTML'},
            {name: 'SCSS/SASS'},
            {name: 'Handlebars'},
            {name: 'JavaScript'},
            {name: 'JQuery'}
          ],
          year: '2015',
          client: 'Open Gate',
          see_project: 'http://www.festmakabra.pl/',
          repo_project: 'https://github.com/DzianisMakeichyk/film',
          prev: 'prev',
          next: 'next'
        },
        {
          slug: 'cateringoo',
          name: 'Cateringoo',
          image: 'image',
          description: 'Nasza firma cateringowa jest rozpoznawalna w całej środkowej Polsce. Czy to Łódź, czy Warszawa, nasze usługi cateringowe cieszą się dużym powodzeniem i nienaganną opinią w zakresie jakości dostarczonego jedzenia oraz całokształtu współpracy z klientem. ',
          technologies: [
            {name: 'HTML'},
            {name: 'SCSS/SASS'},
            {name: 'Handlebars'},
            {name: 'JavaScript/ES6'},
            {name: 'GSAP'},
            {name: 'Laravel'}
          ],
          year: '2018',
          client: 'Still secret ;)',
          see_project: 'https://www.cateringoo.pl/',
          repo_project: '',
          prev: 'prev',
          next: 'next'
        },
        {
          slug: 'nova-dolna',
          name: 'Nova Dolna',
          image: 'image',
          description: 'Nova Dolna to inwestycja w dolnej części Mokotowa. W sąsiedztwie z Parkiem Promenada oraz Morskim Okiem. Dobra lokalizacja dla ludzi ceniących sobie spokój, ale pragnących mieszkać w centrum miasta.',
          technologies: [
            {name: 'HTML'},
            {name: 'SCSS/SASS'},
            {name: 'JavaScript/ES6'},
            {name: 'GSAP'},
            {name: 'WordPress'}
          ],
          year: '2017',
          client: 'Cape Morris',
          see_project: 'http://novadolna.pl/',
          repo_project: '',
          prev: 'prev',
          next: 'next'
        },
        {
          slug: 'vg-capital',
          name: 'VG Capital',
          image: 'image',
          description: 'VG Capital od 10 lat realizuje inwestycje deweloperskie w Kołobrzegu, Warszawie oraz w pozostałych regionach Polski. Kluczowym aspektem naszych projektów jest ich dopasowanie do oczekiwań i możliwości naszych Klientów.',
          technologies: [
            {name: 'HTML'},
            {name: 'SCSS/SASS'},
            {name: 'JavaScript/ES6'},
            {name: 'GSAP'},
            {name: 'WordPress'}
          ],
          year: '2017',
          client: 'Cape Morris',
          see_project: 'http://vgcapital.pl/',
          repo_project: '',
          prev: 'prev',
          next: 'next'
        },
        {
          slug: 'telegram',
          name: 'Can I Use',
          image: 'image',
          description: 'As we know telegram can give us almost full feeds what we will need during a day. News channels, education channels, wether bots, google bots, cat gif channels, chatting with friends and etc. And as I’am front end developer I often must checking supporting new technologies or suport old technologies for older browsers as IE10(yes, somebody still use it) for current project. As I using telegram for every day I thought to my self what I should code a Telegram bot that can help me shorten the path to do this.',
          technologies: [
            {name: 'REST API'},
            {name: 'Node Js'}
          ],
          year: '2017',
          client: 'Pencil Sharpener',
          see_project: 'https://t.me/caniusecombot',
          repo_project: 'https://medium.com/@dzianismakeichyk/telegram-bot-can-i-use-2fcda4610897',
          prev: 'prev',
          next: 'next'
        }
      ]
    }
  },
  computed: {
    currentProject: function () {
      return find(this.dates, (project) => (
        project.slug === this.$route.params.slug
      ))
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
        font-family: 'Montserrat';
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
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 1.71;
        text-align: left;
        color: #20252a;
        padding-bottom: 45px;

        @include breakpoint(medium) {
            padding-bottom: 60px;
        }

        @include breakpoint(medium-lg) {
            font-size: 15px;
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

        .one-tech {
            font-size: 11px;
            padding: 0 0 7px 5px;
            color: $black;

            @include breakpoint(medium) {
                padding: 0 0 7px 0;
            }

            @include breakpoint(medium-lg) {
                font-size: 13px;
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
            font-family: 'Montserrat';
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
            font-family: 'Montserrat';
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
            }
        }
    }

    .bg-gray {
        @include breakpoint(medium) {
            height: 100%;
        }
    }
</style>
