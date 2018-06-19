<template>
<div class="main-box" @mousemove="move" @mouseup="draggable = false">
    <header class="header">
        <div class="header__section left"></div>
        <div class="header__section center"></div>
        <div class="header__section right"></div>
    </header>
    <div class="main-box__side left" :style="{width: width + 'px'}">
        <div class="main-box__dragger"
            @mousedown="draggable = true"
        ></div>
        <div class="menu-wrapper rest">
            <div class="menu rest"></div>
        </div>
        <div class="content rest"></div>
    </div>
    <div class="main-box__side right" :style="{width: (windowWidth - width) + 'px'}">
    </div>
    <footer class="footer">
        <div class="footer__section left"></div>
        <div class="footer__section center"></div>
        <div class="footer__section right"></div>
    </footer>
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

.header {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100px;
    // background-color: brown;
    top: 0;
    margin: 10px 0 0 0;
    // padding: 0 20px;
    z-index: 100;
    align-items: flex-start;
    justify-content: space-between;

    &__section {

        &.left {
            width: 220px;
            height: 50px;
            background-color: red;
        }

        &.center {
            width: 103px;
            height: 100px;
            background-image: url(/icons/proho-logo.svg);
            background-size: 100%;
            background-repeat: no-repeat;
        }

        &.right {
            width: 220px;
            height: 50px;
            background-color: blue;
        }
    }
}

.footer {
    position: fixed;
    display: flex;
    width: 100%;
    height: 40px;
    // background-color: brown;
    bottom: 0;
    margin: 0 0 10px 0;
    // padding: 0 20px;
    z-index: 100;
    align-items: flex-end;
    justify-content: space-between;

    &__section {

        &.left {
            width: 80px;
            height: 40px;
            background-color: red;
        }

        &.center {
            width: 100px;
            height: 34px;
            background-color: green;
            border-radius: 100px;
        }

        &.right {
            width: 80px;
            height: 40px;
            background-color: blue;
        }
    }
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
            background-color: brown;
        }
    }

    &__dragger {
        position: absolute;
        top: calc(50% e('-') 40px); right: -40px;
        width: 80px; height: 80px;
        background-color: yellow;
        border-radius: 1000px;
    }

    .menu-wrapper {
        display: inline-block;
        position: fixed;
        top: 30vh;
        // background-color: blue;
        align-items: center;

        .menu {
            width: 200px;
            height: 250px;
            background-color: orange;
        }
    }

    .content {
        width: 100%;
        height: 2000px;
        margin: 150px 150px 100px 250px;
        background-color: violet;
    }
}

</style>
