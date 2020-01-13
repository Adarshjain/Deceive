<template>
    <button class="d-button "
            :class="[{
                'd-button--disabled': disabled || loading,
                'd-button--loading': loading,
                'd-button--full-width': fullWidth,
            }, computedSize, computedType]"
            :disabled="disabled"
            v-bind="$listeners">
        <slot></slot>
        <span class="d-button__loader"></span>
        <span class="d-button__spinner"></span>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./button.css"></style>
