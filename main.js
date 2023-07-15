
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: masekiList,
            masekiList: masekiList
        }
    },
    methods: {
        onChangeAttr(e) {
            const attr = e.target.value;
            if (attr === "all") {
                this.masekiList = this.originalMasekiList;
            }
            else {
                this.masekiList = this.originalMasekiList.filter(e => e.attrList.includes(attr));
            }
        },
    }
};

Vue.createApp(App).mount("#app");
