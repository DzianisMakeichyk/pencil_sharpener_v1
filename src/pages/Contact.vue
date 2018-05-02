<template>
    <section class="container">
        <div class="content-container with-top">
            <div class="bg-gray relative">
                <div class="reveal-me"></div>
                <div class="sub-header-wrapper top-position">
                    <h2 class="sub-header">
                        Kontakt
                    </h2>
                </div>
                <div class="contact-container">
                    <div class="contact-box-wrapper">
                        <div class="contact-box">
                            <p class="contact-title">
                                Masz pytania?
                            </p>
                            <p class="drop-me-one-contact">
                                <a href="tel:+48797657075" class="drop-contact-me">
                                    <span class="select-text">
                                        +48 797657075
                                    </span>
                                </a>
                                <br/>
                                <a href="mailto:dzianis@pencilsharpener.pl" class="drop-contact-me">
                                    <span class="select-text">
                                        dzianis@pencilsharpener.pl
                                    </span>
                                </a>
                            </p>
                        </div>
                        <div class="contact-box">
                            <p class="contact-title">
                                Adres
                            </p>
                            <div class="drop-me-one-contact">
                                <p class="drop-contact-me">
                                    Ul.Kolejowa 47c
                                </p>
                                <br/>
                                <p class="drop-contact-me">
                                    01-210 Warszawa, Polska
                                </p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="drop-me-one-contact">
                                <p class="drop-contact-me">
                                    NIP: 527-27-73-256
                                </p>
                                <br/>
                                <p class="drop-contact-me">
                                    REGON: 364765775
                                </p>
                            </div>
                        </div>
                    </div>
                    <DropMeALine/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DropMeALine from '../components/Drop-me-a-line'

export default {
  name: 'Contact',
  components: {
    DropMeALine
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped>
    .sub-header-wrapper {
        top: -6%;

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

    .contact-box-wrapper {
        padding: 45px 0 25px;

        .contact-box {
            padding: 30px 25px;

            @include breakpoint(medium) {
                padding: 50px 25px;
            }

            @include breakpoint(medium-lg) {
                padding: 65px 25px;
            }

            @include breakpoint(large) {
                padding: 80px 25px;
            }
        }

        .contact-title {
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 13px;
            line-height: 1.71;
            letter-spacing: .8px;
            text-transform: uppercase;
            text-align: left;
            color: #a7a7a7;
            padding-bottom: 10px;
        }

        .drop-contact-me {
            padding: 0 0 1px 0;
            color: #4e4e4e;
        }
    }
</style>
