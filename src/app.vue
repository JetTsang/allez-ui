<template>
<SButton/>
<SFCbutton/>
<TSXbutton color="purple">Unocss按钮</TSXbutton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SButton from "./button";
import SFCbutton from "./button/SFCbutton.vue";
import TSXbutton from "./button/TSXbutton";
export default defineComponent({
    name:'App',
    components:{
        SButton,
        SFCbutton,
        TSXbutton
    }
})
</script>

<style>

</style>