<template>
    <div>
        <div class="arrow-container">
            <p class="arrow-text">
                scroll
            </p>
            <div class="arrow-svg">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 42 42" enable-background="new 0 0 42 42" xml:space="preserve">
                    <rect x="20" width="2" height="42"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ScrollDownArrow'
}
</script>

<style lang="scss">
    .arrow-container {
        position: absolute;
        top: 12%;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        @include breakpoint(medium) {
            top: 20%;
            left: 1%;
            transform: translateX(0);
        }
        @include breakpoint(large) {
            top: 18%;
        }
        .arrow-text {
            font-size: 12px;
            color: $gray-black;
            line-height: 1.71;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            transform: rotate(90deg);
        }
        .arrow-svg {
            margin: 25px 15px 35px;
            fill: $gray-black;
        }
    }
</style>
