//priority 0

onEvent('recipes', e => {

    e.shaped('kubejs:small_cog_base', [
        ' s ',
        'sas',
        ' s '
    ], {
        s: MC('#wooden_stairs'),
        a: SK('andesite_alloy_rod')
    })

    e.shaped('kubejs:large_cog_base', [
        'sss',
        'sas',
        'sss'
    ], {
        s: MC('#wooden_stairs'),
        a: SK('andesite_alloy_rod')
    })

    e.custom(new Lychee()
        .recipeBlockInteracting()
        .inItem('#forge:tools/knives')
        .inBlock('kubejs:small_cog_base')
        .outItem(Item.of('create:cogwheel').withChance(0.95))
        .outItem(Item.of('create:cogwheel').withChance(0.5))
        .outItem('skymachinatweaks:wood_chips')
        .outBlock('air')
        .outDamageItem()
        .recipe).id('skytweaks:hand/cog')

    e.custom(new Lychee()
        .recipeBlockInteracting()
        .inItem('#forge:tools/knives')
        .inBlock('kubejs:large_cog_base')
        .outItem(Item.of('create:large_cogwheel').withChance(0.95))
        .outItem(Item.of('create:large_cogwheel').withChance(0.5))
        .outItem(Item.of('skymachinatweaks:wood_chips').withChance(0.8))
        .outBlock('air')
        .outDamageItem()
        .recipe).id('skytweaks:hand/large_cog')
    //End of Recipes
})