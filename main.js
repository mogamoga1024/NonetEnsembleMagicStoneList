
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: [],
            masekiList: [],
            effectList: [],
            selectedAttr: "all",
            selectedEffect: "all",
        }
    },
    created() {
        this.originalMasekiList = masekiList.sort((a, b) => {
            if (a.isBuff && !b.isBuff) {
                return 1;
            }
            else if (!a.isBuff && b.isBuff) {
                return -1;
            }
            return 0;
        });
        this.masekiList = this.originalMasekiList;

        const tmpEffectList = this.masekiList.map(e => {
            return {
                value: e.enchantList[0].name, 
                display: "[" + e.attrList.join("/") + "] " + e.enchantList.map(f => f.name).join("/"),
            }
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
            this.selectedEffect = "all";
        },
        onChangeEffect(e) {
            const effect = e.target.value;
            if (effect === "all") {
                this.masekiList = this.originalMasekiList;
            }
            else {
                this.masekiList = this.originalMasekiList.filter(e => e.enchantList[0].name === effect);
            }
            this.selectedAttr = "all";
        },
    }
};

Vue.createApp(App).mount("#app");
