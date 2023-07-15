
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: [],
            masekiList: [],
            searchMasekiList: [],
            selectedAttr: "all",
            selectedName: "all",
            selectedEffect: "all",
        }
    },
    created() {
        masekiList.sort((a, b) => {
            if (a.isBuff && !b.isBuff) {
                return 1;
            }
            else if (!a.isBuff && b.isBuff) {
                return -1;
            }
            return 0;
        });
        this.originalMasekiList = [...masekiList];
        this.masekiList = this.originalMasekiList;

        const tmpMasekiList = this.masekiList.map(e => {
            return {
                name: e.name, 
                displayName: "[" + e.attrList.join("/") + "] " + e.name,
                displayEffect: (function() {
                    let enchant = "";
                    if (e.enchantList.length > 1 && e.enchantList[0].name === e.enchantList[1].name) {
                        enchant = e.enchantList[0].name;
                    }
                    else {
                        enchant = e.enchantList.map(f => f.name).join("/");
                    }
                    return "[" + e.attrList.join("/") + "] " + enchant;
                })(),
            }
        });

        this.searchMasekiList = [{name: "all", displayName: "ALL", displayEffect: "ALL"}].concat(tmpMasekiList);
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
            this.selectedName = "all";
            this.selectedEffect = "all";
        },
        onChangeName(e) {
            this.findMasekiByName(e);
            this.selectedAttr = "all";
            this.selectedEffect = "all";
        },
        onChangeEffect(e) {
            this.findMasekiByName(e);
            this.selectedAttr = "all";
            this.selectedName = "all";
        },
        findMasekiByName(e) {
            const name = e.target.value;
            if (name === "all") {
                this.masekiList = this.originalMasekiList;
            }
            else {
                this.masekiList = this.originalMasekiList.filter(e => e.name === name);
            }
        },
    }
};

Vue.createApp(App).mount("#app");
