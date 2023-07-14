
function maseki(name, attrList, enchantList, power, effect, range) {
    return {
        name: name,
        attrList: attrList,
        enchantList: enchantList,
        power: power,
        effect: effect,
        range: range
    }
}

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
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1]
    ]
);


