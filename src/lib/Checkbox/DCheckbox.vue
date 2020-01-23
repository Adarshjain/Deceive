<template>
    <div>
        <label class="d-checkbox__label"
               :class="[
                {
                    'd-checkbox--disabled': disabled,
                    'd-checkbox--error': error !== '' && error !== undefined,
                    'd-checkbox--full-width': fullWidth,
                    'd-checkbox--intermediate': intermediate
                }, sizeClass]"
        >
            <input class="d-checkbox"
                   type="checkbox"
                   :intermediate="intermediate"
                   :name="name"
                   :value="value"
                   :checked="isChecked"
                   :disabled="disabled"
                   v-on="$listeners"
                   @change="onChange"
            >
            <DIcon class="d-checkbox__icon" :icon="checkboxIcon"/>
            <span class="d-checkbox__value" v-if="label">{{label}}</span>
        </label>
        <div class="d-checkbox__error-msg"
             :class="[ { 'd-checkbox--disabled':disabled }, sizeClass ]"
             v-if="error !== '' && error !== undefined"
        >{{error}}
        </div>
    </div>
</template>

<script lang="ts" src="./checkbox.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./checkbox.css" scoped></style>