<template>
    <button class="d-button "
            :class="[{
                'd-button--disabled': disabled || loading,
                'd-button--loading': loading,
                'd-button--full-width': fullWidth,
            }, computedSize, computedType]"
            :disabled="disabled"
            v-on="$listeners">
        <d-icon :icon="icon" v-if="icon !== undefined && iconPosition === 'left'"/>
        <slot></slot>
        <d-icon :icon="icon" v-if="icon !== undefined && iconPosition === 'right'"/>
        <span class="d-button__loader"></span>
        <span class="d-button__spinner"></span>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./button.css"></style>
