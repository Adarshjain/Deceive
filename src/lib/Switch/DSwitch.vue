<template>
    <div>
        <label class="d-switch__label"
               :class="[
                {
                    'd-switch--disabled':disabled,
                    'd-switch--error':error !== '',
                    'd-switch--full-width':fullWidth,
                    'd-switch--intermediate':intermediate
                },
                sizeClass]"
        >
            <input v-bind="$listeners"
                   class="d-switch"
                   type="checkbox"
                   :checked="checked"
                   :name="name"
                   :disabled="disabled"
                   :intermediate="intermediate"
                   @change="onChange"
            >
            <span class="d-switch__value" v-if="label">{{label}}</span>
        </label>
        <div class="d-switch__error-msg"
             :class="[
                {
                    'd-switch--disabled':disabled,
                },
                sizeClass]"
             v-if="error !== ''"
        >{{error}}
        </div>
    </div>
</template>

<script lang="ts" src="./switch.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./switch.css" scoped></style>