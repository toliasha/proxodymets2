/* SET PAGES HERE */
import Glagne from '../pages/main.vue';

/* SET ROUTES HERE */
const routes = [
    { path: '/', component: Glagne }
]

/* ...AND DO NOT TOUCH THIS ---------------------------------- */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

Vue.use(VueRouter);
Vue.use(VueI18n);

const pidarasina = 0;

const i18n = new VueI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        en: {},
        ru: {}
    },
    silentTranslationWarn: true
});

Vue.prototype.$locale = {
    change(lang) {
        i18n.locale = lang;
    }
};

const App = {
    router: new VueRouter({
        mode: 'history',
        routes
    }),
    created() {
        let isTouch = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        if (isTouch) {
            document.body.classList.add('touch');
        } else {
            document.body.classList.remove('touch');
        }
    },
    template: `
        <div id="proxodymets">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>`
}

const P = new Vue({
    el: '#app',
    i18n,
    render: r => r(App)
});
