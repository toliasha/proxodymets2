<template>
<div class="main-box" @mousemove="move" @mouseup="draggable = false">
    <div class="main-box__side left" :style="{width: width + 'px'}">
        left
        <div class="main-box__dragger"
            @mousedown="draggable = true"
        ></div>
    </div>
    <div class="main-box__side right" :style="{width: (windowWidth - width) + 'px'}">
        right
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            draggable: false,
            width: 300,
            windowWidth: window.innerWidth
        }
    },
    methods: {
        move(e) {
            if (this.draggable) {
                let x = e.clientX
                this.width = x <= 100 ? 100 : x;
            }
        }
    }
}
</script>

<i18n>
{
    "en": {
        "say": ""
    },
    "ru": {
        "say": ""
    }
}
</i18n>

<style lang="less">
// THIS STYLES SHOULD BE IN MAIN.LESS FILE
html {
    height: 100%;
}

body {
    height: 100%;
    overflow: hidden;
    color: white;
    padding: 0; margin: 0;
}

#proxodymets {
    height: 100%;
}
// ----------------------

.main-box {
    height: 100%;
    position: relative;

    &__side {
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;

        &.left {
            left: 0;
            background-color: gray;
        }

        &.right {
            right: 0;
            background-color: black;
        }
    }

    &__dragger {
        position: absolute;
        top: calc(50% e('-') 40px); right: -40px;
        width: 80px; height: 80px;
        background-color: yellow;
        border-radius: 1000px;
    }
}

</style>
