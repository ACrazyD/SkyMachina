// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Tagging Your Everything...')

onEvent('item.tags', e => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('block.tags', e => {
	
	//TinkersSurvival Fibers Fixing
	e.add('tinkersurvival:fiber_plants', VJ('beach_grass'))
	e.add('tinkersurvival:fiber_plants', VJ('short_grass'))

	//Tagging for Breakable Via Fist
	e.add('tinkersurvival:always_breakable', 'chancecubes:chance_cube')
	e.add('tinkersurvival:always_breakable', 'supplementaries:stick')
	
	//end of block.tags
})

onEvent('fluid.tags', e => {

	e.add('forge:liquid_andesite', 'kubejs:liquid_andesite')
	e.add('forge:molten_zinc', 'tconstruct:molten_zinc')
	e.add('forge:molten_andesite_alloy', 'kubejs:molten_andesite_alloy')


	//End of fluid.tags
})