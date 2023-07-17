
const App = {
    data() {
        return {
            HIT: HIT, HIT_BASE: HIT_BASE, HIT_ENDLESS: HIT_ENDLESS,
            attrCondMasekiList: [],
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
            selectedEffectGroup: "all",
            selectedEffect: "all",
            selectedSort: "default"
        }
    },
    created() {
        masekiList.sort((a, b) => {
            const isSirenA = /試練/.test(a.enchantList[0].name);
            const isSirenB = /試練/.test(b.enchantList[0].name);
            if (isSirenA && !isSirenB) {
                return 1;
            }
            else if (!isSirenA && isSirenB) {
                return -1;
            }
            return 0;
        });
        for (let i = 0; i < masekiList.length; i++) {
            masekiList[i].id = i + 1;
        }

        this.masekiList = this.attrCondMasekiList = [...masekiList];

        this.nameList = this.createNameList();
        this.effectList = this.createEffectList();
    },
    methods: {
        onClickAttr(key) {
            if (key === "all") {
                // ALLが選択されている状態でALLを押して未選択にさせない。
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
                this.masekiList = [...masekiList];
            }
            else {
                let selectedAttrList = [];
                this.attrList.forEach(attr => {
                    if (this.isSelectedAttr[attr.key]) {
                        selectedAttrList.push(attr.name);
                    }
                });

                if (selectedAttrList.length === 1) {
                    this.masekiList = masekiList.filter(maseki => {
                        return maseki.attrList.some(attr => selectedAttrList.includes(attr))
                    });
                }
                else {
                    this.masekiList = masekiList.filter(maseki => {
                        return maseki.attrList.every(attr => selectedAttrList.includes(attr))
                    });
                }
            }

            this.attrCondMasekiList = this.masekiList;
            this.findMasekiListByEffectGroup(this.selectedEffectGroup);
            this.sortMasekiList(this.selectedSort);
            this.nameList = this.createNameList();
            this.effectList = this.createEffectList();
            this.selectedName = this.selectedEffect = "all";
        },
        onChangeName(e) {
            this.findMasekiByName(e.target.value);
            this.selectedEffect = "all";
        },
        onChangeEffectGroup(e) {
            this.findMasekiListByEffectGroup(e.target.value);
            this.nameList = this.createNameList();
            this.effectList = this.createEffectList();
        },
        onChangeEffect(e) {
            this.findMasekiByName(e.target.value);
            this.selectedName = "all";
        },
        onChangeSort(e) {
            this.sortMasekiList(e.target.value);
        },
        createNameList() {
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
            return [{name: "all", display: "ALL"}].concat(tmpNameList);
        },
        createEffectList() {
            const defaultSortMasekiList = [...this.masekiList].sort((a, b) => a.id - b.id);
            const tmpEffectList = defaultSortMasekiList.map(e => {
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
            return [{name: "all", display: "ALL"}].concat(tmpEffectList);
        },
        resetIsSelectedAttr() {
            this.isSelectedAttr["all"] = true;
            this.attrList.forEach(attr => {
                this.isSelectedAttr[attr.key] = false; 
            });
        },
        findMasekiByName(name) {
            if (name === "all") {
                this.masekiList = this.attrCondMasekiList;
            }
            else {
                this.masekiList = this.attrCondMasekiList.filter(e => e.name === name);
            }
        },
        findMasekiListByEffectGroup(effectGroup) {
            switch (effectGroup) {
                case "all":
                    this.masekiList = this.attrCondMasekiList;
                    break;
                case "single":
                    this.masekiList = this.attrCondMasekiList.filter(maseki => maseki.attrList.length === 1);
                    break;
                case "multi":
                    this.masekiList = this.attrCondMasekiList.filter(maseki => maseki.attrList.length > 1);
                    break;
                case "abnormal":
                    this.masekiList = this.attrCondMasekiList.filter(maseki => maseki.isAbnormal);
                    break;
                case "buff":
                    this.masekiList = this.attrCondMasekiList.filter(maseki => maseki.isBuff);
                    break;
                case "etc":
                    this.masekiList = this.attrCondMasekiList.filter(maseki => maseki.isEtc);
                    break;
            }
        },
        findAttrKeyByAttrName(name) {
            for (const attr of this.attrList) {
                if (attr.name === name) {
                    return attr.key;
                }
            }
        },
        sortMasekiList(sort) {
            switch (sort) {
                case "default":
                    this.masekiList.sort((a, b) => a.id - b.id);
                    break;
                case "power":
                    this.masekiList.sort((a, b) => b.power - a.power);
                    break;
                case "range":
                    this.masekiList.sort((a, b) => b.rangeSize - a.rangeSize);
                    break;
            }
        }
    }
};

Vue.createApp(App).mount("#app");
