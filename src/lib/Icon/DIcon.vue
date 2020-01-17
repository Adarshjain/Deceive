<template>
    <i class="material-icons">{{icon}}</i>
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
<style scoped>
    .material-icons{
        font-size: inherit !important;
        color: inherit !important;
    }
</style>