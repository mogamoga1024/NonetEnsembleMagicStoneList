
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: masekiList,
            masekiList: masekiList,
            effectList: [],
        }
    },
    created() {
        const tmpEffectList = this.originalMasekiList.map(e => {
            return {value: e.enchantList[0].name, display: e.enchantList.map(f => f.name).join("/")}
        });
        this.effectList = [{value: "all", display: "ALL"}].concat(tmpEffectList);
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
