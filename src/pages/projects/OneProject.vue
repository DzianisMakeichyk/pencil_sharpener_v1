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
                                Dzianis Makeichyk
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
                                        Nazywam się <b>Dzianis Makeichyk</b> i jestem <b>Front-End Developerem</b>. Zajmuję się tworzeniem stron internetowych, blogów, od responsywnego mailingu, banera, do layout wykonany na podstawie <b>ReactJS</b> i <b>VueJs</b>.
                                    </p>

                                    <div class="project-buttons">
                                        <div class="drop-me-one">
                                            <a href="mailto:dzianis@pencilsharpener.pl" class="button-wrapper">
                                               <span class="button primary">
                                                   Zobacz projekt
                                               </span>
                                            </a>
                                        </div>

                                        <div class="drop-me-one">
                                            <a href="mailto:dzianis@pencilsharpener.pl" class="button-wrapper">
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
                                                <li class="one-tech" v-for="skill in skills" :key="skill">{{skill.name}}</li>
                                            </ul>
                                        </div>
                                        <div class="one-techno-row">
                                            <p class="project-title">
                                                klient
                                            </p>
                                            <ul class="techno-list">
                                                <li class="one-tech" v-for="ability in abilities" :key="ability">{{ability.name}}</li>
                                            </ul>
                                        </div>
                                        <div class="one-techno-row">
                                            <p class="project-title">
                                                rok
                                            </p>
                                            <ul class="techno-list">
                                                <li class="one-tech" v-for="ability in abilities" :key="ability">{{ability.name}}</li>
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
export default {
  name: 'OneProject',
  data () {
    return {
      skills: [
        {name: 'HTML/Jade'},
        {name: 'SCSS/SASS'},
        {name: 'Handlebars'},
        {name: 'JavaScript/ES6'},
        {name: 'VueJS/VUEX'},
        {name: 'ReactJs'},
        {name: 'WordPress'}
      ],
      abilities: [
        {name: 'Frontend Development'},
        {name: 'Interaction Design'},
        {name: 'User Experience'}
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
