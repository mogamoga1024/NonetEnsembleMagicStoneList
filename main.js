
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            originalMasekiList: [],
            masekiList: [],
            nameList: [],
            effectList: [],
            attrList: [
                {key: "hi", name: "火"},
                {key: "mizu", name: "水"},
                {key: "koori", name: "氷"},
                {key: "kaze", name: "風"},
                {key: "kaminari", name: "雷"},
                {key: "ti", name: "地"},
                {key: "hikari", name: "光"},
                {key: "yami", name: "闇"},
                {key: "oto", name: "音"},
            ],
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
        onClickAttr(key) {
            if (key === "all") {
                if (this.isSelectedAttr["all"]) {
                    return;
                }
                this.resetIsSelectedAttr();
            }
            else {
                this.isSelectedAttr[key] = !this.isSelectedAttr[key];

                if (this.attrList.every(attr => !this.isSelectedAttr[attr.key])) {
                    this.isSelectedAttr["all"] = true;
                }
                else {
                    this.isSelectedAttr["all"] = false;
                }
            }

            if (this.isSelectedAttr["all"]) {
                this.masekiList = this.originalMasekiList;
            }
            else {
                let selectedAttrList = [];
                this.attrList.forEach(attr => {
                    if (this.isSelectedAttr[attr.key]) {
                        selectedAttrList.push(attr.name);
                    }
                });

                if (selectedAttrList.length === 1) {
                    this.masekiList = this.originalMasekiList.filter(maseki => {
                        return maseki.attrList.some(attr => selectedAttrList.includes(attr))
                    });
                }
                else {
                    this.masekiList = this.originalMasekiList.filter(maseki => {
                        return maseki.attrList.every(attr => selectedAttrList.includes(attr))
                    });
                }
                
            }
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
            this.attrList.forEach(attr => {
                this.isSelectedAttr[attr.key] = false; 
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
