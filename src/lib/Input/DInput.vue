<template>
    <label class="d-input">
        <span class="d-input__label" v-if="$present(label)">{{label}}</span>
        <span class="d-input__wrapper">
            <d-icon :class="iconClass"
                    class="d-icon--left"
                    :icon="icon"
                    v-if="$present(icon) && iconPosition === 'left'"
            />
            <input v-on="$listeners"
                   :disabled="disabled"
                   :type="type"
                   :maxlength="maxLength"
                   :autofocus="autofocus"
                   :autocomplete="autocomplete"
                   :name="name"
                   v-model="internalValue"
                   :placeholder="placeholder"
                   :class="[
                   'd-input__el'
               ]"
                   @input="onInput"
            >
            <d-icon :class="iconClass"
                    class="d-icon--right"
                    :icon="icon"
                    v-if="$present(icon) && iconPosition === 'right'"
            />
        </span>
        <span class="d-input__description" v-if="$present(description)">{{description}}</span>
        <span class="d-input__invalid-message" v-if="$present(invalidMessage)">{{invalidMessage}}</span>
    </label>
</template>

<script lang="ts" src="./input.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./input.css" scoped></style>