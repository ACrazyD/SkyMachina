//priority 0

onEvent('recipes', e => {

    e.shaped('kubejs:small_cog_base', [
        ' s ',
        'sas',
        ' s '
    ], {
        s: '#minecraft:wooden_stairs',
        a: 'kubejs:andesite_alloy_rod'
    })

    e.shaped('kubejs:large_cog_base', [
        'sss',
        'sas',
        'sss'
    ], {
        s: '#minecraft:wooden_stairs',
        a: 'kubejs:andesite_alloy_rod'
    })
    function cogwheels(cogwheel, block) {
        e.custom({
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": '#forge:tools/knives'
            },
            "block_in": block,
            "post": [
                {
                    "type": "drop_item",
                    "item": cogwheel,
                    "contextual": {
                        "type": "chance",
                        "chance": 1
                    }
                },
                {
                    "type": "drop_item",
                    "item": "kubejs:wood_chips",
                    "contextual": {
                        "type": "chance",
                        "chance": 0.2
                    }
                },
                {
                    "type": "place",
                    "block": "*"
                },
                {
                    "type": "damage_item"
                }
            ]
        })
    }
    cogwheels("create:large_cogwheel", "kubejs:large_cogwheel_base")
    cogwheels("create:cogwheel", "kubejs:small_cogwheel_base")
    //End of Recipes
})