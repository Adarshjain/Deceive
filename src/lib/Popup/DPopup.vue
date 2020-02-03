<template>
    <div class="d-popup"
         :class="anchorClass"
         ref="popup">
        <div ref="popupContainer" class="d-popup__container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" src="./popup.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="../common/style/animate.css"></style>
<style src="./popup.css" scoped></style>