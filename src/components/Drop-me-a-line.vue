<template>
    <div>
       <div class="drop-me-a-line-wrapper">
           <div class="drop-me-a-line">
               <div class="drop-me-one">
                   <a href="mailto:dzianis@pencilsharpener.pl" class="button-wrapper">
                       <span class="button primary">
                           Drop me a line
                       </span>
                   </a>
               </div>
               <div class="drop-me-one" v-if="this.$props.section === 'first'">
                   <div class="drop-me-one-contact">
                       <p class="drop-contact-me">
                           {{ $t("message.drop-me-a-line.city") }}
                       </p>
                       <br/>
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

               <div class="drop-me-one" v-if="this.$props.section === 'second'">
                   <div class="drop-me-one-contact">
                       <p class="drop-contact-me" v-html="$t('message.drop-me-a-line.description')"></p>
                   </div>
               </div>
               <div class="drop-me-one">
                   <p class="sing">
                     ©pencilsharpener
                   </p>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Drop-me-a-line',
  props: ['section']
}
</script>

<style lang="scss">
    .drop-me-a-line-wrapper {
        background: $white;
        padding: 60px 0 40px;

        @include breakpoint(medium) {
          padding: 60px 0 70px;
        }
        @include breakpoint(medium-lg) {
          /*padding: 80px 0 90px;*/
        }
        @include breakpoint(large) {
          /*padding: 100px 0 110px;*/
            padding: 80px 0 15px;
        }
    }

    .portfolio-page {
        .drop-me-a-line-wrapper {
            @include breakpoint(large) {
                padding: 100px 0 90px;
            }
        }
    }

    .drop-me-a-line {
        display: flex;
        flex-direction: column;

        @include breakpoint(medium) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }

        @include breakpoint(medium-lg) {
            width: 100%;
            /*max-width: 90%;*/
            margin: 0 auto;
        }

        .drop-me-one {
          &:nth-child(1) {
            @include breakpoint(medium) {
              order: 2;
            }
          }
          &:nth-child(2) {
            @include breakpoint(medium) {
              order: 1;
            }
          }
          &:nth-child(3) {
            @include breakpoint(medium) {
              order: 3;
            }
          }
        }
      }

    .drop-me-one {
        width: 100%;
    }

    .drop-contact-me {
        display: inline-flex;
        overflow-x: hidden;
        padding: 0 7px;

        &:nth-child(1) {
            padding-bottom: 5px;
        }
    }

    .button.primary {
        margin: 0 auto 50px;

        @include breakpoint(medium) {
            margin: 0 auto;
        }
    }

    .sing {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: 0.3px;
        font-size: 10px;
        padding-left: 7px;
        color: $gray-medium-1;
        text-align: center;

        @include breakpoint(medium) {
          text-align: right;
          font-size: 12px;
        }
    }
</style>
