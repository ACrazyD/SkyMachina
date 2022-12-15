// priority: 0

console.info('Making Dreams, well... Making Items, Fluids, and Blocks real! (Til they are added to SkyMachinaTweaks)')

onEvent('item.registry', e => {

})

onEvent('block.registry', e => {
	e.create('small_cog_base').displayName('Small Cog Base')
	e.create('large_cog_base').displayName('Large Cog Base')
})

onEvent('fluid.registry', e => {
	
	//Liquid Andesite
	e.create('liquid_andesite')
	    .displayName('Liquid Andesite')
		.bucketColor(0x999999)
		.thickTexture(0x999999)
	
	e.create('molten_andesite_alloy')
		.displayName('Molten Andesite Alloy')
		.bucketColor(0x999999)
		.thickTexture(0x999999)

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


