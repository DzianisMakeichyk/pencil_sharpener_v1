<template>
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <vue-typer
          :text='["Arya Stark","Jon Snow","Daenerys Targaryen","Melisandre","Tyrion Lannister"]'
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2000'
          :erase-delay='250'
          erase-style='select-all'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'Index',
  components: {
    VueTyper
  }
}
</script>

<!--scoped-->
<style lang="scss">

</style>
