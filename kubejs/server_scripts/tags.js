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
	e.add('tinkersurvival:always_breakable', 'supplementaries:stick')
	
	e.add('tinkersurvival:fiber_plants', VJ('beach_grass'))
	e.add('tinkersurvival:fiber_plants', VJ('short_grass'))
	//end of block.tags
})