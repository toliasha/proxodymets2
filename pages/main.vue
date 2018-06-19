<template>
<div class="main-box">
    <div class="main-box__side left" :style="{width: x + 'px'}">
        <div class="content" :style="{width: windowWidth - 300 + 'px'}">
            asdfasdfb ыл вафлывг пафлыовпалфыпвалгфынпвгланпфыловрап офынвп аофлырвап лофы
        </div>
    </div>
    <div class="main-box__side right">
        <div class="content">
            <br>asdfasdf фыдловафлдывафлоырвп алофырвпа лдфыо валфоыадфоы валофрывл аофлыво а
        </div>
    </div>
    <div class="splitter">
        <input type="range" :min="min" :max="max" v-model="x">
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.x = this.windowWidth / 2;
    },
    data() {
        return {
            x: 100,
            min: 100,
            windowWidth: window.innerWidth
        }
    },
    methods: {

    },
    computed: {
        max() {
            return this.windowWidth - this.min;
        }
    },
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
    width: 100%;
    position: relative;

    &__side {
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100%;

        &.left {
            position: absolute;
            top: 0;
            width: 50%;
            left: 0;
            background-color: gray;
            z-index: 1;
        }

        &.right {
            right: 0;
            background-color: black;
            text-align: right;
            z-index: 0;

            .content {
                text-align: right;
            }
        }

        .content {
            padding: 0 3vw;
            box-sizing: border-box;
            text-align: left;
        }
    }
}

.thumb() {
    -webkit-appearance: none;
    height: 70px;
    width: 70px;
    border-radius: 1000px;
    background-color: yellow;
    cursor: pointer;
    border: 0;
    box-shadow: 0 50px 50px -30px fadeout(black, 50%);
}

.track() {
    -webkit-appearance: none;
    background: fadeout(yellow, 100%);
    height: 1px;
    padding: 0; margin: 0;
}

.splitter {
    position: absolute;
    z-index: 100;
    top: calc(50% e('-') 35px); left: 65px; right: 65px;
    padding: 0; margin: 0;
    height: 1px;
    font-size: 0;

    input[type=range] {
        -webkit-appearance: none;
        background: none;
        margin: 0;
        width: 100%;

        &::-webkit-slider-thumb { .thumb; }
        &::-ms-thumb { .thumb; }
        &::-moz-range-thumb { .thumb; }

        &::-webkit-slider-runnable-track { .track; }
        &::-ms-track { .track; }
        &::-moz-range-track { .track; }

        &:focus {
            outline: 0;
        }
    }
}

</style>
