//priority 0
//packmode: expertMode

console.info('Misc. Jargen')

onEvent('recipes', e => {

  e.shapeless('skymachinatweaks:empty_gate_pearl', Item.of('skymachinatweaks:empty_gate_pearl').ignoreNBT());

    /*
    e.shaped('morebuckets:rubber_bucket', [
        'S S',
        ' s '
      ], {
        S: 'thermal:cured_rubber'
      }).id('skytweaks:rubber_bucket')
    */

  e.shaped('minecraft:amethyst_shard',[
    'SSS',
    'SSS',
    'SSS'
  ],{
    S: SK('shattered_amethyst')
  }).id('skymachinatweaks:amethyst_shard')
      
  
    

    //End Of Recipes
})