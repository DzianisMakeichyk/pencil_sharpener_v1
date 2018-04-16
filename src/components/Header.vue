<template>
    <div>
        <header v-on:resize="getWindowWidth()">
            <b-container fluid>
                <b-row class="no-gutters" align-h="between" align-v="center">
                    <b-col mg="5" v-if="this.$store.state.windowWidth >= 768">
                        {{this.$store.state.windowWidth}}
                    </b-col>
                    <b-col mg="2">
                        <a href="/" class="logo-wrapper">
                            <img src="~@/assets/images/svg/logo.svg" alt="Logo" class="logo" />
                        </a>
                    </b-col>
                    <b-col mg="5">
                        <Menu/>
                    </b-col>
                </b-row>
            </b-container>
        </header>
        <!-- Left-->
        <div class="sub-menu left">
            left
        </div>
        <!-- Right-->
        <div class="sub-menu right">
            right
        </div>
    </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Header',

  components: {
    Menu
  }
}
</script>

<style lang="scss">
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 67px;
        padding: 20px 0;
        background: $white;
        z-index: 100;
    }

    .logo-wrapper {
        display: block;
        width: 100%;
        max-width: 25px;
        margin: 0 auto 0 0;

        @include breakpoint(medium) {
            margin: 0 auto;
        }
    }

    .sub-menu {
        position: fixed;
        height: 100%;
        width: 15px;
        background: $yellow;

        &.left {
            left: 0;
         }

        &.right {
            right: 0;
         }
    }
</style>
