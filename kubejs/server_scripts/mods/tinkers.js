//priority 0
console.info('Sifty Sifty...')

onEvent('recipes', e => {

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
    tinkersAlloy2in('forge:liquid_andesite', 50, 'forge:molten_zinc', 50, 'kubejs:molten_andesite_alloy', 100)







    //End Of Recipes
})