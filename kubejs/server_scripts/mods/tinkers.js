//priority 0
console.info('Smelty Smelty.')

////CASTING TABLE////
global.casingTable = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
    event.custom({
      type: 'tconstruct:casting_table',
      cast: {
        tag: cast
      },
      cast_consumed: consumed,
      fluid: {
        tag: inputFluid,
        amount: amount
      },
      result: outputItem,
      cooling_time: cooling
  }).id(ID)}

  ////CASTING BASIN////
global.casingBasin = (event, outputItem, inputFluid, amount, cooling, ID) => {
  event.custom({
    type: 'tconstruct:casting_basin',
    fluid: {
      tag: inputFluid,
      amount: amount
    },
    result: outputItem,
    cooling_time: cooling
}).id(ID)}

////CASTING BASIN WITH CAST////
global.casingBasinCast = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
event.custom({
  type: 'tconstruct:casting_basin',
  cast: {
    tag: cast
  },
  cast_consumed: consumed,
  fluid: {
    tag: inputFluid,
    amount: amount
  },
  result: outputItem,
  cooling_time: cooling
}).id(ID)}

//////// ORE MELTING /////////
global.tinkersOreMelting = (event, outputFluid, amount, byproductFluid, byproductAmount, inputItem, temperature, time, ID) => {
    event.custom({
        type: 'tconstruct:ore_melting',
        rate: 'metal',
        ingredient: {
            tag: inputItem
        },
        result: {
          fluid: outputFluid, 
          amount: amount //180
        },
        temperature: temperature, //700
        time: time, //142
        byproducts: [
          {
            fluid: byproductFluid,
            amount: byproductAmount
          }
        ]
      
}).id(ID)}

//////// ORE MELTING /////////
global.tinkersMelting = (event, outputFluid, amount, byproductFluid, byproductAmount, inputItem, temperature, time, ID) => {
    event.custom({
        type: 'tconstruct:melting',
        ingredient: {
            item: inputItem
        },
        result: {
          fluid: outputFluid, 
          amount: amount //180
        },
        temperature: temperature, //700
        time: time, //142
        byproducts: [
          {
            fluid: byproductFluid,
            amount: byproductAmount
          }
        ]

}).id(ID)}
//////// ALLOYING /////////
global.tinkersAlloying = (event, outputFluid, amount, inputFluids, temperature, ID) => {
    event.custom({
    type: 'tconstruct:alloy',
    inputs: inputFluids,
    result: {
      fluid: outputFluid,
      amount: amount
    },
    temperature: temperature
}).id(ID)}




onEvent('recipes', e => {
    const { casting_table, casting_basin } = e.recipes.tconstruct;

    function tinkersMeltingSingle(input, output, amount, temp, time) {
        e.custom({
            type: "tconstruct:melting",
            ingredient: { item: input },
            result: { fluid: output, amount: amount },
            temperature: temp,
            time: time
        })
    }

    function tinkersAlloy2in(input1, in1Amount, input2, in2Amount, output, outputAmount) {
        e.custom({
            type: 'tconstruct:alloy',
            temperature: 1500,
            inputs: [
                { tag: input1, amount: in1Amount },
                { tag: input2, amount: in2Amount }
            ],
            result: { fluid: output, amount: outputAmount }
        })
    }


    //End of Functions

    //Tinkers Melting
    tinkersMeltingSingle('minecraft:andesite', 'kubejs:liquid_andesite', 115, 500, 60)

    //Tinkers Alloy
    /*
    global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `skytweaks:smeltery/alloys/molten_${item.material}`)
        'tinkers_input': [{tag: 'forge:molten_copper',amount: 180},{tag: 'forge:molten_zinc',amount: 90}],
    */

    tinkersAlloy2in('forge:liquid_andesite', 50, 'forge:molten_zinc', 50, 'kubejs:molten_andesite_alloy', 100)

    //Tinkers Casting
    casting_table('create:andesite_alloy', 'kubejs:molten_andesite_alloy', 90).cast().coolingTime(180)






    //End Of Recipes
})