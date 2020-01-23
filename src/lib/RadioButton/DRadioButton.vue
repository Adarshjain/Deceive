<template>
    <div>
        <label class="d-radio__label"
               :class="[
                {
                    'd-radio--disabled': disabled,
                    'd-radio--error': error !== '' && error !== undefined,
                    'd-radio--full-width': fullWidth
                },
                sizeClass]"
        >
            <input type="radio"
                   class="d-radio"
                   ref="input"
                   @input="input"
                   :name="name"
                   :value="value"
                   :checked="checked == value"
                   :disabled="disabled"
                   v-on="$listeners"
            >
            <DIcon class="d-radio__icon" :icon="radioIcon"/>
            <span class="d-radio__value" v-if="label">{{label}}</span>
        </label>
        <div class="d-radio__error-msg"
             :class="[
                {
                    'd-radio--disabled':disabled,
                },
                sizeClass]"
             v-if="error !== ''"
        >{{error}}
        </div>
    </div>
</template>

<script lang="ts" src="./radio-button.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./radio-button.css" scoped></style>