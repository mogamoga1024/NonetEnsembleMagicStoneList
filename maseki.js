
const masekiList = [];

function addMaseki(name, attrList, enchantList, power, effect, range) {
    masekiList.push({
        name: name,
        attrList: attrList,
        enchantList: enchantList.map(e => {return {name: e[0], effect: e[1]}}),
        power: power,
        effect: effect,
        range: range
    });
}

// TODO 内容はすべて仮置きなので注意

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
        [0, 0, 1, 0, 0],
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
        [0, 0, 1, 0, 0],
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
        [0, 0, 1, 0, 0],
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
        [0, 0, 1, 0, 0],
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
        [0, 0, 1, 0, 0],
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
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
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
        [1, 1, 1],
        [0, 1, 0]
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
        [1, 1, 1],
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
    0,
    "回復",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "スチーム",
    ["火", "水"],
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
    "ファイアスピン",
    ["火", "風"],
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
    "メテオ",
    ["火", "地"],
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
    "アッタクトーン",
    ["火", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "グレイシャル",
    ["水", "氷"],
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
    "バブル",
    ["水", "風"],
    [
        ["鈍足", "確率で鈍足にする"],
        ["鈍足耐性", "鈍足を無効化する"]
    ],
    100,
    "敵を鈍足にする",
    [
        [2, 0, 2, 0, 2],
        [0, 1, 1, 1, 0],
        [2, 1, 1, 1, 2],
        [0, 1, 1, 1, 0],
        [2, 0, 2, 0, 2]
    ]
);

addMaseki(
    "アシッドレイン",
    ["水", "地"],
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
    "ミラージュ",
    ["水", "光"],
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
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ブリザード",
    ["氷", "風"],
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
    "ジャッジメント",
    ["氷", "雷"],
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
    "シャドウバインド",
    ["氷", "闇"],
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
    "ガードトーン",
    ["氷", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "テンペスト",
    ["風", "雷"],
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
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "テラー",
    ["雷", "闇"],
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
    "スピードトーン",
    ["雷", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "ソナートーン",
    ["地", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "イクリプス",
    ["闇", "光"],
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
    "ブラインドトーン",
    ["闇", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
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
    "サンライトトーン",
    ["光", "音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    0,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ]
);

