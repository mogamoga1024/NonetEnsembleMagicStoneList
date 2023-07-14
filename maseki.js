
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
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "アクア",
    ["水"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "アイス",
    ["氷"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "エアル",
    ["風"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ショック",
    ["雷"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ブロック",
    ["地"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ダークネス",
    ["闇"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ホーリー",
    ["光"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
);

addMaseki(
    "ヒールトーン",
    ["音"],
    [
        ["hoge", "hogehoge"],
        ["hoge", "hogehoge"],
    ],
    42,
    "hogehoge",
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
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







