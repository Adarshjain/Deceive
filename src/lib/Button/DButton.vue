<template>
    <button class="d-button "
            :class="[{
                'd-button--disabled': disabled || loading,
                'd-button--loading': loading,
                'd-button--full-width': fullWidth,
                'd-button--has-icon': hasIcon,
                'd-button--icon-only': iconOnly
            }, computedSize, computedType]"
            :disabled="disabled"
            v-on="$listeners">
        <d-icon :class="iconClass"
                class="d-icon--left"
                :icon="icon"
                v-if="hasIcon && iconPosition === 'left'"
        />
        <slot v-if="!iconOnly">{{label}}</slot>
        <d-icon :class="iconClass"
                class="d-icon--right"
                :icon="icon"
                v-if="hasIcon && iconPosition === 'right'"
        />
        <span class="d-button__loader"></span>
        <span class="d-button__spinner"></span>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./button.css"></style>
