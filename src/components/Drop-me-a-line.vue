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
               <div class="drop-me-one">
                   <div class="drop-me-one-contact">
                       <p class="drop-contact-me">Polska, Warszawa</p>
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
  name: 'Drop-me-a-line'
}
</script>

<style lang="scss">
    .drop-me-a-line-wrapper {
        background: $white;
        padding: 60px 0 40px;
    }

    .drop-me-a-line {
        display: flex;
        flex-direction: column;
    }

    .drop-me-one {
        width: 100%;
    }

    .button.primary {
        margin: 0 auto 50px;
    }

    .drop-me-one-contact {
        position: relative;
        font-family: 'Montserrat';
        font-weight: 500;
        letter-spacing: 0.3px;
        font-size: 13px;
        color: $gray;
        padding-bottom: 40px;
        /*overflow: hidden;*/
        /*transform: translateY(100%);*/

        a {
            color: $gray-medium-1;
        }

        .drop-contact-me {
            display: inline-flex;
            overflow-x: hidden;
            padding: 0 7px;

            &:nth-child(1) {
                padding-bottom: 5px;
            }
            &:hover {
                color: $white;
                text-decoration: none;
            }
        }
    }

    .sing {
        font-family: 'Montserrat';
        font-weight: 400;
        letter-spacing: 0.3px;
        font-size: 10px;
        padding-left: 7px;
        color: $gray-medium-1;
    }
</style>
