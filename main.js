
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
            return {
                value: e.enchantList[0].name, 
                display: "[" + e.attrList.join("/") + "] " + e.enchantList.map(f => f.name).join("/"),
                isBuff: e.attrList.length > 1 && e.attrList.includes("音")
            }
        });

        tmpEffectList.sort((a, b) => {
            if (a.isBuff && !b.isBuff) {
                return 1;
            }
            else if (!a.isBuff && b.isBuff) {
                return -1;
            }
            return 0;
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
        onChangeEffect(e) {
            const effect = e.target.value;
            if (effect === "all") {
                this.masekiList = this.originalMasekiList;
            }
            else {
                this.masekiList = this.originalMasekiList.filter(e => e.enchantList[0].name === effect);
            }
        },
    }
};

Vue.createApp(App).mount("#app");
