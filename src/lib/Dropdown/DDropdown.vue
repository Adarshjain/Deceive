<template>
    <div style="position: relative;display: inline-flex;">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <d-button type="milky" @click="isVisible = !isVisible" icon="arrow_drop_down" icon-position="right">Sample button</d-button>
        <transition name="popup-in">
            <d-popup :pos="{top: 36,right:0}" v-if="isVisible" anchor="bottom_right">
                <div class="shadow-md rounded-6 p-2 bg-white">
                    <d-list
                            style="white-space: nowrap;"
                            v-for='opt in ["Vilgaxskhbdfg", "Four Arms", "Brainstorm", "Grey Matter", "Dragizazor X 10"]'
                            :key="opt"
                            :label="opt"
                            desc="kfhbhkbgdfk"
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