<template>
<SButton/>
<SFCButton/>
<TSXbutton/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SButton from "./button";
import SFCButton from "./button/SFCbutton.vue";
import TSXbutton from "./button/TSXbutton";
export default defineComponent({
    name:'App',
    components:{
        SButton,
        SFCButton,
        TSXbutton
    }
})
</script>

<style>

</style>