//priority 0
console.info('Summoning Cthulhu or Something')

//Gateway ID Key
const gateways = {
    blaze: 'blaze_gate',
    creeper: 'creeper_gate'
};

//Gate RecipeID Decoder
function gatewayRecipeId(type) {
    return `kubejs:summoning/gateways/${type}`;
}

function getTypeFromId(id) {
    const idString = id.toString();
    return idString.toString().substring(idString.lastIndexOf('/') + 1);
}

//Gate Ritual Recipes
onEvent('recipes', event => {
    //event.recipes.summoningrituals.altar('gold_ingot').itemOutput('blaze_rod').id(gatewayRecipeId('blaze'));
    event.recipes.summoningrituals.altar('iron_ingot').itemOutput('gunpowder').id(gatewayRecipeId('creeper'));
    event.recipes.summoningrituals
		.altar('skymachinatweaks:empty_gate_pearl') //catalyst
        .itemOutput(Item.of('skymachinatweaks:empty_gate_pearl', "{display:{Name:'{\"text\":\"Blaze Gateway Teir 1\"}'}}"))
		.input('minecraft:blaze_rod')
		.input('create:blaze_cake')
		.input('tconstruct:blazing_blood_bucket')
		.dayTime('night')
        .weather('clear')
        .blockBelow('minecraft:netherrack')
		.recipeTime(320)
        .id(gatewayRecipeId('blaze'));
});

//Gate Summon Controller
onEvent('summoningrituals.complete', event => {
    if (!event.player) return;

    const gatewayCommand =
        `execute in ${event.level.dimension} run ` +
        `open_gateway ${event.pos.x} ${event.pos.y + 1} ${event.pos.z} ` +
        `gateways:${gateways[getTypeFromId(event.recipe.id)]}`;

    event.player.server.runCommandSilent(gatewayCommand);
});

/*
onEvent('recipes', event => {

    event.recipes.summoningrituals
		.altar('skytweaks:empty_gate_pearl') //catalyst
        .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"gateways:data_blaze_gate"}'))
		.input('minecraft:blaze_rod')
		.input('create:blaze_cake')
		.input('tconstruct:blazing_blood_bucket')
		.dayTime('night')
        .weather('clear')
		.recipeTime(320)

//End Of Recipes
})


onEvent('summoningrituals.start', event => {
    event.level.spawnLightning(event.pos.x, event.pos.y, event.pos.z, true);
});
  
onEvent('summoningrituals.complete', event => {
    event.player.addXPLevels(5);
});
*/