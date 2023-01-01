//priority 0
console.info('Eating Your Portals?')

onEvent('recipes', e => {

    //Bases
    e.shaped('2x skymachinatweaks:overworld_cake_base', [
        'TTT',
        'MMM',
        'BBB'
      ], {
        T: MC('#flowers'),
        M: MC('grass_block'),
        B: CA('cake_base')
      }).id('skymachinatweaks:overworld_cake_base')

    e.shaped('2x skymachinatweaks:nether_cake_base', [
        'TTT',
        'MMM',
        'BBB'
      ], {
        T: MC('netherrack'),
        M: MC('soul_sand'),
        B: CA('cake_base')
      }).id('skymachinatweaks:nether_cake_base')

    e.shaped('2x skymachinatweaks:void_cake_base', [
        'TTT',
        'MMM',
        'BBB'
      ], {
        T: MC('end_stone'),
        M: MC('obsidian'),
        B: CA('cake_base')
      }).id('skymachinatweaks:end_cake_base')

    e.recipes.createMixing(Fluid.of('skymachinatweaks:liquid_overworld',500), [
        'minecraft:gunpowder',
        'minecraft:grass_block',
        Fluid.of('milk',250),
      ]).id('skymachinatweaks:overworld_fluid')

    e.recipes.createMixing(Fluid.of('skymachinatweaks:liquid_nether',500), [
        '#forge:netherrack',
        'minecraft:blaze_powder',
        Fluid.of('lava',250),
      ]).heated().id('skymachinatweaks:nether_fluid')

    e.recipes.createMixing(Fluid.of('skymachinatweaks:liquid_void',500), [
        'minecraft:ender_pearl',
        'minecraft:end_stone',
        Fluid.of('tconstruct:molten_ender',250),
      ]).superheated().id('skymachinatweaks:void_fluid')

/*      e.recipes.createSequencedAssembly([(TP('overworld_cake'))], 
      ST('overworld_cake_base'), 
      [
        e.recipes.createFilling(KJ('incomplete_overworld_cake'), [KJ('incomplete_overworld_cake'), Fluid.of(ST('liquid_overworld'),250)]),
        e.recipes.createPressing(KJ('incomplete_overworld_cake'), KJ('incomplete_overworld_cake'))
      ]).transitionalItem(KJ('incomplete_overworld_cake'))
      .loops(1)
      .id('skymachinatweaks:overworld_cake') */


    /*
      function letThemEatCake(dim, fluid){
      e.recipes.createSequencedAssembly([(TP(`${dim}_cake`))], 
        SK(`${dim}_cake_base`), 
        [
          e.recipes.createFilling(SK(`incomplete_${dim}_cake`), [SK(`incomplete_${dim}_cake`), Fluid.of(SK(`liquid_${fluid}`),250)]),
          e.recipes.createPressing(SK(`incomplete_${dim}_cake`), SK(`incomplete_${dim}_cake`))
        ]).transitionalItem(SK(`incomplete_${dim}_cake`))
        .loops(1)
        .id(`skymachinatweaks:${dim}_cake`)
    */

        function letThemEatCake(dim, result){
          e.recipes.createSequencedAssembly([(TP(`${result}_cake`))], 
            SK(`${dim}_cake_base`), 
            [
              e.recipes.createFilling(SK(`${dim}_cake_base`), [SK(`${dim}_cake_base`), Fluid.of(SK(`liquid_${dim}`),250)]),
              e.recipes.createPressing(SK(`${dim}_cake_base`), SK(`${dim}_cake_base`))
            ]).transitionalItem(SK(`${dim}_cake_base`))
            .loops(1)
            .id(`skymachinatweaks:${dim}_cake`)
  }
    
  letThemEatCake('overworld', 'overworld')
  letThemEatCake('nether','nether')
  letThemEatCake('void', 'end')
    //End Of Recipes
    })