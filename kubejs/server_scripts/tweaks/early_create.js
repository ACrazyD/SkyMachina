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
        .outItem('create:cogwheel')
        .outItem('skymachinatweaks:wood_chips')
        .outBlock('air')
        .outDamageItem()
        .recipe).id('skytweaks:hand/cog')

    e.custom(new Lychee()
        .recipeBlockInteracting()
        .inItem('#forge:tools/knives')
        .inBlock('kubejs:large_cog_base')
        .outItem('create:large_cogwheel')
        .outItem('skymachinatweaks:wood_chips')
        .outBlock('air')
        .outDamageItem()
        .recipe).id('skytweaks:hand/large_cog')
    //End of Recipes
})