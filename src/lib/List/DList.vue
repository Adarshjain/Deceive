<template>
    <div class="d-list" :class="listStateClass">
        <DIcon v-if="icon !== undefined && icon !== ''"
               class="d-list__icon"
               :class="iconColorClass"
               :icon="icon"
        />
        <slot name="avatar"/>
        <div class="d-list__content">
            <span class="d-list__title">{{label}}</span>
            <span class="d-list__desc" v-if="!!desc">{{desc}}</span>
        </div>
        <slot name="avatar-right"/>
    </div>
</template>

<script lang="ts" src="./list.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="./list.css" scoped></style>