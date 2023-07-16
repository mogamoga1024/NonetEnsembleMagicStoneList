
const HIT = 1;
const HIT_BASE = 2;
const HIT_ENDLESS = 3;

const masekiList = [];

function addMaseki(name, attrList, enchantList, power, effect, range) {
    if (enchantList.length === 1) {
        enchantList.push(enchantList[0]);
    }

    const maseki = {
        name: name,
        attrList: attrList,
        enchantList: enchantList.map(e => {return {name: e[0], effect: e[1]}}),
        power: power,
        effect: effect,
        range: range,
        isAbnormal: attrList.length > 1 && /耐性/.test(enchantList[1][0]),
        isBuff: /従者|試練/.test(enchantList[0][0]),
        isEtc: false
    };

    // 例外的な魔石は個別でフラグを変える
    if (maseki.name === "メテオ") {
        maseki.isEtc = true;
    }

    if (maseki.attrList.length > 1 && !maseki.isAbnormal && !maseki.isBuff && !maseki.isEtc) {
        console.log(`効果群を定義してください: ${maseki.name}`);
    }

    masekiList.push(maseki);
}

addMaseki(
    "ファイア",
    ["火"],
    [
        ["火", "火属性を付与"],
        ["火耐性", "火属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "アクア",
    ["水"],
    [
        ["水", "水属性を付与"],
        ["水耐性", "水属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "アイス",
    ["氷"],
    [
        ["氷", "氷属性を付与"],
        ["氷耐性", "氷属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "エアル",
    ["風"],
    [
        ["風", "風属性を付与"],
        ["風耐性", "風属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ショック",
    ["雷"],
    [
        ["雷", "雷属性を付与"],
        ["雷耐性", "雷属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ブロック",
    ["地"],
    [
        ["地", "地属性を付与"],
        ["地耐性", "地属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ホーリー",
    ["光"],
    [
        ["光", "光属性を付与"],
        ["光耐性", "光属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 1, 0],
        [1, 2, 1],
        [0, 1, 0]
    ]
);

addMaseki(
    "ダークネス",
    ["闇"],
    [
        ["闇", "闇属性を付与"],
        ["闇耐性", "闇属性を軽減"],
    ],
    200,
    "特になし",
    [
        [0, 1, 0],
        [1, 2, 1],
        [0, 1, 0]
    ]
);

addMaseki(
    "ヒールトーン",
    ["音"],
    [
        ["音", "音属性を付与"],
        ["音耐性", "音属性を軽減"],
    ],
    200,
    "回復",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "スチーム",
    ["火", "水"],
    [
        ["疲労軽減", "体力が自動回復する"],
    ],
    200,
    "特になし？",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ファイアスピン",
    ["火", "風"],
    [
        ["火傷", "確率で火傷にする"],
        ["火傷耐性", "火傷を無効化する"],
    ],
    250,
    "敵を火傷にする",
    [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0]
    ]
);

addMaseki(
    "メテオ",
    ["火", "地"],
    [
        ["壁破壊", "壁を破壊できる（数回で武器が壊れる）"],
        ["防御", "防御力を得る"],
    ],
    200,
    "壁を破壊できる",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ホーリーレイ",
    ["火", "光"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ダークフレア",
    ["火", "闇"],
    [
        ["闇の従者", "暗さで攻撃力が増減"],
        ["闇の従者", "暗さで防御力が増減"],
    ],
    270,
    "特になし？",
    [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 2, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0]
    ]
);

addMaseki(
    "アタックトーン",
    ["火", "音"],
    [
        ["火の試練", "撃破で攻撃力上昇"],
        ["火の加護", "瀕死で攻撃力上昇"],
    ],
    0,
    "味方の攻撃力上昇",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "グレイシャル",
    ["水", "氷"],
    [
        ["凍結", "確率で凍結にする"],
        ["凍結耐性", "凍結を無効化する"],
    ],
    100,
    "敵を凍結にする",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "バブル",
    ["水", "風"],
    [
        ["鈍足", "確率で鈍足にする"],
        ["鈍足耐性", "鈍足を無効化する"]
    ],
    100,
    "敵を鈍足にする",
    [
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0]
    ]
);

addMaseki(
    "アシッドレイン",
    ["水", "地"],
    [
        ["腐食", "確率で腐食にする"],
        ["腐食耐性", "腐食を無効化する"],
    ],
    100,
    "敵を腐食にする",
    [
        [3, 3, 3, 3, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 3, 3, 3, 3],
    ]
);

addMaseki(
    "ミラージュ",
    ["水", "光"],
    [
        ["混乱", "確率で混乱にする"],
        ["混乱耐性", "混乱を無効化する"],
    ],
    120,
    "敵を混乱にする",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ポイズン",
    ["水", "闇"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "フロッギートーン",
    ["水", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
    "hogehoge",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "ブリザード",
    ["氷", "風"],
    [
        ["回避低下", "確率で回避低下にする"],
        ["回避低下耐性", "回避低下を無効化する"],
    ],
    150,
    "敵を回避低下にする",
    [
        [3, 3, 3, 3, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 3, 3, 3, 3]
    ]
);

addMaseki(
    "ジャッジメント",
    ["氷", "雷"],
    [
        ["帯電", "攻撃が外れるとチャージ"],
    ],
    250,
    "特になし？",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 2, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "スリップ",
    ["氷", "地"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ミラー",
    ["氷", "光"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "シャドウバインド",
    ["氷", "闇"],
    [
        ["影縫い", "確率で影縫いにする"],
        ["影縫い耐性", "影縫いを無効化する"],
    ],
    200,
    "敵を影縫いにする",
    [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 2, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0]
    ]
);

addMaseki(
    "ガードトーン",
    ["氷", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
    "hogehoge",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "テンペスト",
    ["風", "雷"],
    [
        ["まひ", "確率でまひにする"],
        ["まひ耐性", "まひを無効化する"],
    ],
    100,
    "敵をまひにする",
    [
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1]
    ]
);

addMaseki(
    "サンドストーム",
    ["風", "地"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "イモータルフェザー",
    ["風", "光"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "シーカートーン",
    ["風", "音"],
    [
        ["風の試練", "撃破で罠抜け状態"],
        ["風の加護", "瀕死で罠抜け状態"],
    ],
    0,
    "味方を罠抜け状態にする",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "マグネット",
    ["雷", "地"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "スパーク",
    ["雷", "光"],
    [
        ["閃光", "確率で閃光にする"],
        ["閃光耐性", "閃光を無効化する"],
    ],
    150,
    "敵を閃光にする",
    [
        [3, 3, 3, 3, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 3, 3, 3, 3]
    ]
);

addMaseki(
    "テラー",
    ["雷", "闇"],
    [
        ["恐怖", "確率で恐怖にする"],
        ["恐怖耐性", "恐怖を無効化する"],
    ],
    100,
    "敵を恐怖にする",
    [
        [3, 3, 3, 3, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 1, 1, 1, 3],
        [3, 3, 3, 3, 3]
    ]
);

addMaseki(
    "スピードトーン",
    ["雷", "音"],
    [
        ["雷の試練", "撃破で倍速"],
        ["雷の加護", "瀕死で倍速"],
    ],
    0,
    "味方を倍速にする",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "グロウ",
    ["地", "光"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "カースペイン",
    ["地", "闇"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ソナートーン",
    ["地", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
    "hogehoge",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "イクリプス",
    ["光", "闇"],
    [
        ["吸収", "攻撃時に体力を回復する"]
    ],
    200,
    "敵から体力を吸収する",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "サンライトトーン",
    ["光", "音"],
    [
        ["光の試練", "撃破で明かり"],
        ["光の加護", "瀕死で明かり"],
    ],
    0,
    "フロアが明るくなる",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

addMaseki(
    "ブラインドトーン",
    ["闇", "音"],
    [
        ["闇の試練", "撃破で発見されにくくなる"],
        ["闇の加護", "瀕死で発見されにくくなる"],
    ],
    0,
    "味方が発見されにくくなる",
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
);

