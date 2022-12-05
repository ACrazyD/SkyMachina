// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', e => {
	e.create('skytweaks:empty_gate_pearl').displayName('Empty Gate Pearl')
	e.create('skytweaks:omni_mesh').displayName('Omni Mesh').model('createsifter:string_mesh').color(0, 0x15bf37)
})

onEvent('block.registry', e => {
	
})

onEvent('fluid.registry', e => {
	
	//Liquid Andesite
	e.create('liquid_andesite')
	    .displayName('Liquid Andesite')
		.bucketColor(0x999999)
		.thickTexture(0x999999)
		.id('skytweaks:fluid/liquid_andesite')
			.noBucket()
			.noBlock()
	
	

	// These first examples are 1.16.5 and 1.18.2 syntax
	// Basic "thick" (looks like lava) fluid with red tint
	/*
	e.create('thick_fluid')
	  .thickTexture(0xFF0000)
	  .bucketColor(0xFF0000)
	  .displayName('Thick Fluid')
				 
	// Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
	e.create('thick_fluid')
	  .thinTexture(0xFF0000)
	  .bucketColor(0x00FFFF)
	  .displayName('Thin Fluid')
		.noBucket() // both these methods are 1.18.2+ only
		.noBlock() 
	
	// Fluid with custom textures
	e.create('strawberry_cream')
		.displayName('Strawberry Cream')
	  .stillTexture('kubejs:block/strawberry_still')
	  .flowingTexture('kubejs:block/strawberry_flow')
	  .bucketColor(0xFF33FF)
	})
	*/
})


