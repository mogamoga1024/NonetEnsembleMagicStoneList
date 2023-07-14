
function maseki(name, attrList, enchantList, power, effect, range) {
    return {
        name: name,
        attrList: attrList,
        enchantList: enchantList.map(e => {return {name: e[0], effect: e[1]}}),
        power: power,
        effect: effect,
        range: range
    }
}

// TODO 内容はすべて仮置きなので注意

const fire = maseki(
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

const aqua = maseki(
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

const ice = maseki(
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

const airl = maseki(
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

const shock = maseki(
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

const block = maseki(
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

const darkness = maseki(
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

const holy = maseki(
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

const healTone = maseki(
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

const steam = maseki(
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

const fireSpin = maseki(
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

const meteor = maseki(
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

const darkFlare = maseki(
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

const holyRay = maseki(
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

const attackTone = maseki(
    "アッタクトーン",
    ["火", "音"],
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

const glacial = maseki(
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

const bubble = maseki(
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


