<template>
<div class="main-box">
    <header class="header">
        <div class="header-section left">
            <a>Контакты</a>
        </div>
        <div class="header-section center"></div>
        <div class="header-section right">
            <a>Галерея</a>
        </div>
    </header>
    <div class="main-box__side left" :style="{width: x + 'px'}">
        <div class="menu menu-rest">
            <div class="menu__title title-rest">
                <p>Ресто<br>ран</p>
            </div>
            <div class="menu__pages pages-rest">
                <a>Две кухни</a>
                <a>Меню</a>
            </div>
        </div>
        <div class="content-wrap wrap-rest" :style="{width: windowWidth + 'px'}">
            <div class="content-rest"></div>
        </div>
    </div>
    <div class="main-box__side right">
        <div class="menu menu-pub">
            <div class="menu__title title-pub">
                <p>Паб</p>
            </div>
            <div class="menu__pages pages-pub">
                <a>Живое пиво</a>
                <a>Меню</a>
            </div>
        </div>
        <div class="content-wrap wrap-pub">
            <div class="content-pub"></div>
        </div>
    </div>
    <div class="splitter">
        <input type="range" :min="min" :max="max" v-model="x">
    </div>
    <footer class="footer">
        <div class="footer__section left">
            <a></a>
            <a></a>
        </div>
        <div class="footer__section right">
            <p>Created by</p>
            <a>TOLYK</a>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    mounted() {
        this.x = this.windowWidth / 2;
    },
    data() {
        return {
            x: 70,
            min: 70,
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

@font-face {
    font-family: 'Museo Sans';
    font-style: normal;
    font-weight: 500;
    src: url('/webfonts/500.otf') format('opentype');
}

@font-face {
    font-family: 'Museo Sans';
    font-style: normal;
    font-weight: bold;
    src: url('/webfonts/700.otf') format('opentype');
}

e("@import url('https://fonts.googleapis.com/css?family=Alegreya:500,500i,700,700i,800,800i&subset=cyrillic');")

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

html {
    height: 100%;
}

body {
    height: 100%;
    overflow: hidden;
    color: white;
    padding: 0; margin: 0;
    font-family: 'Museo Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 0;
    user-select: none;
}

a {
    cursor: pointer;
    opacity: .8;

    &:hover {
        opacity: 1;
    }
}

@rest-color: linear-gradient(to left, #FFA37C, #FF846D);
@pub-color: #433333;

.header {
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    margin: 10px 0 0 0;
    z-index: 100;
    align-items: flex-start;
    justify-content: space-between;

    &-section {
        width: 100px;
        font-size: 17px;
        font-weight: 700;

        &.left {
            margin: 10px 0 0 20px;

            & a {
                padding: 5px 0;
            }
        }

        &.center {
            width: 100px;
            height: 88px;
            background-image: url(/icons/proho-logo.svg);
            background-size: 100%;
            background-repeat: no-repeat;
            position: relative;
            flex-shrink: 0;

                &:after {
                    content: "";
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    box-shadow: 0 20px 40px 0 rgba(0,0,0,0.15);
                    border-radius: 100px;
                    z-index: -1;
                    left: 18px;
                }
        }

        &.right {
            margin: 10px 20px 0 0;
            text-align: right;

            & a {
                padding: 5px 0;
            }
        }
    }
}

.footer {
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    margin: 0 0 20px 0;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 100;

    &__section {
        width: 80px;

        &.left {
            margin: 0 0 0 20px;

            & a:first-child {
                background-image: url(/icons/facebook.svg);
                margin-right: 10px;
            }

            & a {
                display: inline-block;
                width: 30px;
                height: 30px;
                background-image: url(/icons/instagram.svg);
                background-repeat: no-repeat;
            }
        }

        &.right {
            margin: 0 20px 0 0;
            font-size: 13px;
            text-align: right;

            & p {
                opacity: .5;
                margin-bottom: 4px;
            }

            & a {
                letter-spacing: 2px;
                font-weight: 700;
            }
        }
    }
}

#proxodymets {
    height: 100%;
}
// ----------------------

.menu {
    position: sticky;
    z-index: 1;
    top: calc(50% - 120px);
    @media (max-width: 900px) {
        position: relative;
        top: 120px;
        white-space: nowrap;
    }
    &__title {
        line-height: 60px;
        font-family: 'Alegreya', serif;
        font-weight: 800;
        margin-bottom: 30px;
        @media (max-width: 900px) {
            display: inline-block;
        }
    }

    &__pages {
        font-size: 25px;
        font-weight: bold;
        display: inline-block;
        @media (max-width: 900px) {
            white-space: nowrap;
            font-size: 20px;
        }

        a {
            display: block;
            margin: 10px 15px 0 0;
            white-space: nowrap;
            @media (max-width: 900px) {
                display: inline-block;
            }
        }
    }
}

.content-wrap {
    position: absolute;
    width: 100%;
    top: 0;
    box-sizing: border-box;
}

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
            left: 0;
            z-index: 1;

            .menu-rest {
                margin-left: 20px;

                .title-rest {
                    font-size: 80px;
                    @media (max-width: 900px) {
                        font-size: 60px;
                        margin-right: 20px;
                        & br {
                            display: none;
                        }
                    }
                }
            }

            .wrap-rest {
                padding: 150px 100px 100px 250px;
                text-align: left;
                background-image: @rest-color;
                @media (max-width: 900px) {
                    padding: 220px 100px 100px 20px;
                }

                .content-rest {
                    height: 2000px;
                    background-color: brown;
                }
            }
        }

        &.right {
            position: absolute;
            width: 100%;
            text-align: right;
            z-index: 0;

            .menu-pub {
                margin-right: 20px;

                .title-pub {
                    font-size: 110px;
                    @media (max-width: 900px) {
                        font-size: 80px;
                        margin-left: 20px;
                    }
                }

                .pages-pub {
                    @media (max-width: 900px) {
                        position: absolute;
                        top: 21px;
                        right: 140px;
                    }
                }
            }

            .wrap-pub {
                padding: 150px 250px 100px 100px;
                text-align: right;
                background-color: @pub-color;
                @media (max-width: 900px) {
                    padding: 220px 20px 100px 100px;
                }

                .content-pub {
                    height: 1000px;
                    background-color: grey;
                }
            }
        }
    }
}

.thumb() {
    -webkit-appearance: none;
    width: 70px;
    height: 70px;
    background-color: #555;
    background-image: url(/icons/splitter.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 20px 30px -5px rgba(0,0,0,0.2);
    border-radius: 100px;
    cursor: ew-resize;
    border: 0;
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
    top: calc(50% e('-') 35px); left: 35px; right: 35px;
    padding: 0; margin: 0;
    height: 1px;

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
