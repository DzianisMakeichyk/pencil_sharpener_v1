<template>
    <section class="container">
        <div class="reveal-me"></div>
        <div class="photo-container" v-bind:class="currentProject.classImage"></div>
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
                                        <ul class="techno-list techno-box">
                                            <li class="one-tech" v-for="technology in currentProject.technologies" :key="technology">
                                                <span class="select-text">
                                                    {{technology.name}}
                                                </span>
                                            </li>
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
        <!-- Arrows -->

        <!-- Left-->
        <div class="sub-menu left">
            <router-link
                class="sub-title-left"
                :to="{
                      name: 'OneProject',
                      params: {
                        slug: currentProject.prev
                      }
                    }"
            >
                Poprzedni project
            </router-link>
        </div>
        <!-- Right-->
        <div class="sub-menu right">
            <router-link
                class="sub-title-right"
                :to="{
                  name: 'OneProject',
                  params: {
                    slug: currentProject.next
                  }
                }"
            >
                Następny projekt
            </router-link>
        </div>
        <!-- Bottom-->
        <!--<div class="sub-menu bottom">-->
            <!--<div class="sub-title-right">-->
                <!--Hello-->
            <!--</div>-->
        <!--</div>-->
    </section>
</template>

<script>
import find from 'lodash/find'
export default {
  name: 'OneProject',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
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
          classImage: 'first-project',
          repo_project: '',
          prev: 'makabra',
          next: 'nova-dolna'
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
          classImage: 'six-project',
          prev: 'cateringoo',
          next: 'stypendium-z-wyboru'
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
          classImage: 'five-project',
          prev: 'telegram',
          next: 'makabra'
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
          classImage: 'second-project',
          prev: 'stypendium-z-wyboru',
          next: 'vg-capital'
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
          classImage: 'third-project',
          prev: 'nova-dolna',
          next: 'telegram'
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
          prev: 'vg-capital',
          classImage: 'four-project',
          next: 'cateringoo'
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
            font-family: 'GT-Haptik-Thin';
            text-transform: uppercase;
            letter-spacing: 1px;
            left: -45px;

            @include breakpoint(medium) {
                left: -43px;
            }

            @include breakpoint(large) {
                left: -33px;
                font-size: 11px;
            }

            @include breakpoint(extralarge) {
                left: -25px;
            }
        }

        .sub-title-right {
            position: fixed;
            top: 50%;
            transform: translateY(-50%) rotate(90deg);
            z-index: 200;
            color: #b1b1b1;
            font-size: 10px;
            font-family: 'GT-Haptik-Thin';
            text-transform: uppercase;
            letter-spacing: 1px;
            right: -44px;

            @include breakpoint(medium) {
                right: -42px;
            }

            @include breakpoint(large) {
                right: -33px;
                font-size: 11px;
            }

            @include breakpoint(extralarge) {
                right: -25px;
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
            padding: 0 35px 5px;
            box-shadow: 0 2px 16px 0 rgba(20, 20, 20, 0.5);
        }

        .sub-header {
            @include breakpoint(medium) {
                color: $white;
            }
        }

        &:before {
            @include breakpoint(medium) {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: $darkviolet;
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

        &.techno-box {
            margin-left: -5px;
        }

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
