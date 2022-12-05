//priority 0
console.info('Sifty Sifty...')

onEvent('recipes', e => {

    function tinkersMeltingSingle(input, output, amount, temp, time){
            e.custom({
                type: "tconstruct:melting",
                ingredient: { item: input },
                result: { fluid: output, amount: amount },
                temperature: temp,
                time: time
            })
        }

    tinkersMeltingSingle('minecraft:andesite', 'minecraft:water', 200, 500, 60)
    //End Of Recipes
})