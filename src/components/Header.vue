<template>
    <div>
        <header v-on:resize="getWindowWidth()">
            <b-container fluid>
                <b-row class="no-gutters" align-h="between" align-v="center">
                    <b-col mg="5" v-if="this.$store.state.windowWidth >= 767">
                        <h1 class="header-name">
                            <router-link
                                :to="{name: 'Index'}"
                            >
                                dzianis makeichyk
                            </router-link>
                        </h1>
                    </b-col>
                    <b-col mg="2">
                        <router-link
                          :to="{name: 'Index'}"
                          class="logo-wrapper"
                        >
                            <img src="~@/assets/images/svg/logo.svg" alt="Logo" class="logo" />
                        </router-link>
                    </b-col>
                    <b-col mg="5">
                        <Menu/>
                    </b-col>
                </b-row>
            </b-container>
        </header>
        <!-- Left-->
        <div class="sub-menu left">
            <div class="social-menu">
                <!-- In -->
                <div class="one-social-icon">
                    <a href="https://www.linkedin.com/in/dzianis-makeichyk-81664a127/" target="_blank">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 430.117 430.117" style="enable-background:new 0 0 430.117 430.117;"
                             xml:space="preserve">
                            <g>
                                <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
                                    c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
                                    v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
                                    C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
                                    c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
                                     M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <!-- Fb -->
                <div class="one-social-icon">
                    <a href="https://www.facebook.com/dzianismakeichyk" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"  viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                            <g>
                                <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <!-- Vk -->
                <div class="one-social-icon">
                    <a href="https://vk.com/road66" target="_blank">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 304.36 304.36" style="enable-background:new 0 0 304.36 304.36;" xml:space="preserve">
                            <g id="XMLID_1_">
                                <path id="XMLID_807_" style="fill-rule:evenodd;clip-rule:evenodd;" d="M261.945,175.576c10.096,9.857,20.752,19.131,29.807,29.982
                                    c4,4.822,7.787,9.798,10.684,15.394c4.105,7.955,0.387,16.709-6.746,17.184l-44.34-0.02c-11.436,0.949-20.559-3.655-28.23-11.474
                                    c-6.139-6.253-11.824-12.908-17.727-19.372c-2.42-2.642-4.953-5.128-7.979-7.093c-6.053-3.929-11.307-2.726-14.766,3.587
                                    c-3.523,6.421-4.322,13.531-4.668,20.687c-0.475,10.441-3.631,13.186-14.119,13.664c-22.414,1.057-43.686-2.334-63.447-13.641
                                    c-17.422-9.968-30.932-24.04-42.691-39.971C34.828,153.482,17.295,119.395,1.537,84.353C-2.01,76.458,0.584,72.22,9.295,72.07
                                    c14.465-0.281,28.928-0.261,43.41-0.02c5.879,0.086,9.771,3.458,12.041,9.012c7.826,19.243,17.402,37.551,29.422,54.521
                                    c3.201,4.518,6.465,9.036,11.113,12.216c5.142,3.521,9.057,2.354,11.476-3.374c1.535-3.632,2.207-7.544,2.553-11.434
                                    c1.146-13.383,1.297-26.743-0.713-40.079c-1.234-8.323-5.922-13.711-14.227-15.286c-4.238-0.803-3.607-2.38-1.555-4.799
                                    c3.564-4.172,6.916-6.769,13.598-6.769h50.111c7.889,1.557,9.641,5.101,10.721,13.039l0.043,55.663
                                    c-0.086,3.073,1.535,12.192,7.07,14.226c4.43,1.448,7.35-2.096,10.008-4.905c11.998-12.734,20.561-27.783,28.211-43.366
                                    c3.395-6.852,6.314-13.968,9.143-21.078c2.096-5.276,5.385-7.872,11.328-7.757l48.229,0.043c1.43,0,2.877,0.021,4.262,0.258
                                    c8.127,1.385,10.354,4.881,7.844,12.817c-3.955,12.451-11.65,22.827-19.174,33.251c-8.043,11.129-16.645,21.877-24.621,33.072
                                    C252.26,161.544,252.842,166.697,261.945,175.576L261.945,175.576z M261.945,175.576"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <!-- Git -->
                <div class="one-social-icon">
                    <a href="https://github.com/DzianisMakeichyk" target="_blank">
                        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.549 438.549" style="enable-background:new 0 0 438.549 438.549;" xml:space="preserve">
                            <g>
                                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                                    c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                                    c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                                    c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                                    c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                                    c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                                    c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                                    c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                                    c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                                    c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                                    c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                                    c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                                    c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                                    c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                                    c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                                    c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                                    c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                                    c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                                    c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                                    C438.536,184.851,428.728,148.168,409.132,114.573z"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <!-- Right-->
        <div class="sub-menu right">
            <h4 class="sub-title-right">
                creative developer
            </h4>
        </div>
        <!-- Bottom-->
        <div class="sub-menu bottom"></div>
        <cookie-law>
            <div slot="message">
                Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje.<a href="https://pl.wikipedia.org/wiki/HTTP_cookienotes" target="_blank"> Dowiedz się więcej jak je wyłączyć.</a>
            </div>
        </cookie-law>
    </div>
</template>

<script>
import Menu from './Menu'
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'Header',

  components: {
    Menu,
    CookieLaw
  }
}
</script>

<style lang="scss">
    .Cookie.Cookie--base {
        background: $white;
        padding: 10px 25px;
        .Cookie__content {
            font-size: 9px;
            color: $gray-medium;
            font-family: 'Montserrat', sans-serif;
        }
        .Cookie__button {
            position: relative;
            display: inline-block;
            align-items: center;
            transition: all 0.3s;
            cursor: pointer;
            overflow: hidden;
            z-index: 100;
            outline: hidden;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 1px;
            font-family: 'Montserrat', sans-serif;
            color: $white;
            background: $darkviolet;
            border: 1px solid $darkviolet;
            margin: 0 auto;
            padding: 15px 35px;
            color: $white;
            text-align: center;
            white-space: nowrap;

            &::before,
            &::after {
                content: '';
                position: absolute;
                z-index: -1;
            }

            &::after {
                height: 100%;
                right: -55%;
                top: 0;
                width: 0;
                transform: skew(0deg);
                transition: all 0.3s;
                transition-duration: 0.6s;
                transform-origin: top left;
                background-color: $white;
            }

            &:hover {
                color: $darkviolet;
                background-color: $white;

                &::after {
                    width: 165%;
                    height: 100%;
                }
            }
        }
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 67px;
      padding: 20px 0;
      background: $white;
      z-index: 450;
      color: $gray-medium;
    }

    .logo-wrapper {
      display: block;
      width: 100%;
      max-width: 25px;
      /*margin: 0 auto 0 0;*/
      margin: 0 auto 0 0;

      @include breakpoint(medium) {
        margin: 0 auto;
      }
    }

    .sub-menu {
      position: fixed;
      background: $white;
      z-index: 250;

      &.left,
      &.right {
        height: 100%;
        width: 25px;

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
    }

    .header-name {
      text-transform: uppercase;
      white-space: nowrap;
      font-family: 'GT-Haptik-Thin';
      font-size: 13px;
      margin: 0 auto 0 0;
      letter-spacing: 1px;
        a {
            color: #898989;
        }
    }

    .social-menu,
    .sub-title-right {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        z-index: 200;
    }

    .social-menu {
        display: flex;
        flex-direction: column;
        left: 7px;

        @include breakpoint(medium) {
            left: 9px;
        }

        @include breakpoint(large) {
            left: 20px;
        }

        @include breakpoint(extralarge) {
            left: 30px;
        }

        .one-social-icon {
            margin-bottom: 8px;

            &:hover {
                svg {
                    fill: $darkviolet;
                }
            }
        }

        svg {
            width: 12px;
            fill: $gray;
            transition: .3s ease;

            @include breakpoint(large) {
                width: 16px;
            }
        }
    }

    .sub-title-right {
        right: -47px;
        color: $gray;
        font-size: 10px;
        font-family: 'GT-Haptik-Thin';
        text-transform: uppercase;
        transform: rotate(90deg);
        letter-spacing: 1px;

        @include breakpoint(medium) {
            right: -44px;
        }

        @include breakpoint(large) {
            right: -36px;
            font-size: 11px;
        }

        @include breakpoint(extralarge) {
            right: -29px;
        }
    }
</style>
