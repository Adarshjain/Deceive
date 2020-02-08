<template>
    <div style="position: relative">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <d-button @click="isVisible = !isVisible">Sample button</d-button>
        <transition name="popup-in">
            <d-popup :pos="{top: 36, left: 0}" v-if="isVisible" anchor="bottom_left">
                <div class="shadow-md rounded-6 p-2 bg-white">
                    <d-list
                            v-for='opt in ["Vilgax", "Four Arms", "Brainstorm", "Grey Matter", "Dragizazor X 10"]'
                            :key="opt"
                            :label="opt"
                            icon="delete"
                    />
                </div>
            </d-popup>
        </transition>
    </div>
</template>

<script lang="ts" src="./dropdown.ts"></script>
<style src="../../assets/styles/index.css"></style>
<style src="../common/style/animate.css"></style>
<style src="./dropdown.css" scoped></style>