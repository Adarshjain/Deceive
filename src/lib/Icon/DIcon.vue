<template>
    <i class="material-icons" v-on="$listeners">{{icon}}</i>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'DIcon',
        props: ['icon'],
        components: {}
    })
    export default class DIcon extends Vue {

    }
</script>

<style src="../../assets/styles/index.css"></style>