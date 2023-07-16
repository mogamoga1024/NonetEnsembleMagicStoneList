
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: [],
            masekiList: [],
            nameList: [],
            effectList: [],
            attrKeyList: ["hi", "mizu", "koori", "kaze", "kaminari", "ti", "hikari", "yami", "oto"],
            isSelectedAttr: {
                all: true,
                hi: false, mizu: false, koori: false,
                kaze: false, kaminari: false, ti: false, 
                hikari: false, yami: false, oto: false
            },
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

        const tmpNameList = this.masekiList.map(e => {
            return {
                name: e.name,
                display: e.name
            }
        }).sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        const tmpEffectList = this.masekiList.map(e => {
            return {
                name: e.name, 
                display: (function() {
                    let enchant = "";
                    if (e.enchantList[0].name === e.enchantList[1].name) {
                        enchant = e.enchantList[0].name;
                    }
                    else {
                        enchant = e.enchantList.map(f => f.name).join("/");
                    }
                    return "[" + e.attrList.join("/") + "] " + enchant;
                })(),
            }
        });

        this.nameList = [{name: "all", display: "ALL"}].concat(tmpNameList);
        this.effectList = [{name: "all", display: "ALL"}].concat(tmpEffectList);
    },
    methods: {
        onClickAttr(name) {
            if (name === "all") {
                if (this.isSelectedAttr["all"]) {
                    return;
                }
                this.resetIsSelectedAttr();
            }
            else {
                this.isSelectedAttr[name] = !this.isSelectedAttr[name];

                if (this.attrKeyList.every(key => !this.isSelectedAttr[key])) {
                    this.isSelectedAttr["all"] = true;
                }
                else {
                    this.isSelectedAttr["all"] = false;
                }
            }

            // todo
        },
        // onChangeAttr(e) {
        //     const attr = e.target.value;
        //     if (attr === "all") {
        //         this.masekiList = this.originalMasekiList;
        //     }
        //     else {
        //         this.masekiList = this.originalMasekiList.filter(e => e.attrList.includes(attr));
        //     }
        //     this.selectedName = "all";
        //     this.selectedEffect = "all";
        // },
        onChangeName(e) {
            this.findMasekiByName(e);
            this.resetIsSelectedAttr();
            this.selectedEffect = "all";
        },
        onChangeEffect(e) {
            this.findMasekiByName(e);
            this.resetIsSelectedAttr();
            this.selectedName = "all";
        },
        resetIsSelectedAttr() {
            this.isSelectedAttr["all"] = true;
            this.attrKeyList.forEach(key => {
                this.isSelectedAttr[key] = false; 
            });
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
