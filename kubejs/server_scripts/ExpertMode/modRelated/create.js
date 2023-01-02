//priority 0
//packmode: expertMode


console.info('Sifty Sifty...')

onEvent('recipes', e => {

    //Remove
    e.remove({id: 'create:milling/gravel'})
    e.remove({id: 'create:crushing/gravel'})
    e.remove({output: 'thermal:rubber'})

    //Misc Recipes
    e.shaped('4x skymachinatweaks:rubber_die', [
      'SSS',
      'S S',
      'SSS'
    ], {
      S: 'minecraft:stick'
    }).id('skytweaks:rubber_die')

    //Large Crafting
    e.recipes.create.mechanical_crafting('create:belt_connector',[
      'RRR',
      'RRR' 
    ], {
      R: 'thermal:cured_rubber'
    }).id('skytweaks:belt_connector')

    //Filling
    e.recipes.createFilling('thermal:rubber', [
      'skymachinatweaks:rubber_die',
      Fluid.of('thermal:latex', 250)
    ]).id('skytweaks:rubber')

    //Pressing

    //Cutting
    e.recipes.create.cutting(Item.of('minecraft:stick', 4), '#minecraft:planks').id('skytweaks:cutting/all_sticks')
    
    //Milling
    e.recipes.create.milling('apotheosis:gem_dust','apotheosis:gem').id('skytweaks:apothgem/milling')
    e.recipes.createMilling(
        [
          Item.of("minecraft:sand").withChance(0.9),
          Item.of("tinkersurvival:flint_shard").withChance(0.35),
        ],
        "#forge:gravel"
      ).id('skytweaks:gravel/milling');

    //Crushing
    e.recipes.createCrushing([
        Item.of('minecraft:sand').withChance(0.7),
        Item.of('minecraft:flint').withChance(0.2),
        Item.of('expcaves:stone_pebble').withChance(0.01),
        Item.of('expcaves:andesite_pebble').withChance(0.01),
        Item.of('expcaves:diorite_pebble').withChance(0.01),
        Item.of('expcaves:granite_pebble').withChance(0.01),
        Item.of('expcaves:tuff_pebble').withChance(0.01),
        Item.of('expcaves:deepslate_pebble').withChance(0.01),
        Item.of('expcaves:sediment_stone_pebble').withChance(0.01),
        Item.of('expcaves:lavastone_pebble').withChance(0.01),
    ],'minecraft:gravel').id('skytweaks:gravel/crushing')

    //End Of Recipes
    })