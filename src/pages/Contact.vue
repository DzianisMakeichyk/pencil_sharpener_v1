<template>
    <section class="container">
        <div class="full-height">
            <div class="content-container with-top">
                <div class="full-height-content relative">
                    <div class="sub-header-wrapper top-position animation">
                        <h2 class="sub-header">
                            {{ $t("menu.contact") }}
                        </h2>
                    </div>
                    <div class="contact-box-wrapper bg-gray animation">
                        <div class="contact-box">
                            <div class="box-reveal"></div>
                            <p class="contact-title">
                                {{ $t("contact.any-question") }}
                            </p>
                            <div class="drop-me-one-contact">
                                <div class="box-reveal"></div>
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
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="box-reveal"></div>
                            <p class="contact-title">
                                {{ $t("contact.adres") }}
                            </p>
                        <div class="drop-me-one-contact">
                            <div class="box-reveal"></div>
                            <p class="drop-contact-me">
                                Ul.Kolejowa 47c
                            </p>
                            <br/>
                            <p class="drop-contact-me">
                                {{ $t("contact.index") }}
                            </p>
                        </div>
                    </div>
                        <div class="contact-box">
                            <div class="box-reveal"></div>
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
                </div>
                <div class="full-height-footer">
                    <DropMeALine section="second"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DropMeALine from '../components/Drop-me-a-line'

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Kontakt | Dzianis Makeichyk'
  },
  components: {
    DropMeALine
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped>
    .sub-header-wrapper {
        &.top-position {
            top: -6%;

            @include breakpoint(medium) {
                top: -12%;
            }

            @include breakpoint(medium-lg) {
                top: -15%;
            }
        }
    }

    .full-height-content {
        @include breakpoint(medium) {
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .contact-box-wrapper {
        display: flex;
        flex-direction: column;
        padding: 45px 0 25px;

        @include breakpoint(medium) {
            flex-wrap: wrap;
            flex-direction: row;
            align-items: flex-end;
        }

        @include breakpoint(medium-lg) {
            padding: 45px 0;
        }

        @include breakpoint(large) {
            padding-left: 25%;
        }

        .contact-box {
            position: relative;
            padding: 30px 25px;

            @media only screen and (min-width: 380px) {
                max-width: 250px;
                margin: 0 auto;
            }

            @include breakpoint(medium) {
                max-width: 100%;
                padding: 30px;
            }

            @include breakpoint(medium-lg) {
                padding: 60px 30px;
                margin: 0 0 0 auto;
            }

            @include breakpoint(large) {
                padding: 65px 25px;
            }

            @include breakpoint(extralarge) {
                padding: 80px 25px;
            }
            &:nth-child(1) {
                @include breakpoint(medium) {
                    width: 100%;
                    flex: 1 1 100%;
                }
                @include breakpoint(medium-lg) {
                    width: 50%;
                    flex: 1 1 50%;
                    padding-left: 25%;
                }
            }
            &:nth-child(2) {
                @include breakpoint(medium) {
                    width: 50%;
                    flex: 1 1 50%;
                }
                @include breakpoint(medium-lg) {
                    width: 25%;
                    flex: 1 1 25%;
                }
            }
            &:nth-child(3) {
                @include breakpoint(medium) {
                    width: 50%;
                    flex: 1 1 50%;
                }
                @include breakpoint(medium-lg) {
                    width: 25%;
                    flex: 1 1 25%;
                }
            }
        }

        .contact-title {
            padding-bottom: 10px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 13px;
            line-height: 1.71;
            letter-spacing: .8px;
            text-transform: uppercase;
            color: #a7a7a7;
            text-align: center;

            @include breakpoint(medium) {
                text-align: left;
            }
        }

        .drop-contact-me {
            padding: 0 0 1px 0;
            color: #4e4e4e;
        }
    }

    .bg-gray {
        @include breakpoint(medium) {
            /*height: 250px;*/
        }
    }
</style>
