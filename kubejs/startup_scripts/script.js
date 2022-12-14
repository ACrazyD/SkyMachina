// priority: 0

console.info('Making Dreams, well... Making Items, Fluids, and Blocks real! (Til they are added to SkyMachinaTweaks)')

onEvent('item.registry', e => {
	
	//Replacement For RSTM Which will be removed Soon...
	//Circuitry
	e.create('circuit_basic').displayName('Basic Circuitry')
	e.create('circuit_basic_incomplete','create:sequenced_assembly').displayName('Incomplete Basic Circuitry')
	e.create('circuit_enhanced').displayName('Enhanced Circuitry')
	e.create('circuit_enhanced_incomplete','create:sequenced_assembly').displayName('Incomplete Basic Enhanced')
	e.create('circuit_advanced').displayName('Advanced Circuitry')
	e.create('circuit_advanced_incomplete','create:sequenced_assembly').displayName('Incomplete Basic Advanced')
	e.create('circuit_industrial').displayName('Industrial Grade Circuitry')
	e.create('circuit_industrial_incomplete','create:sequenced_assembly').displayName('Incomplete Industrial Grade Circuitry')
	e.create('circuit_overclocked').displayName('Overclocked Circuitry')
	e.create('circuit_overclocked_incomplete','create:sequenced_assembly').displayName('Incomplete Overclocked Circuitry')
	e.create('circuit_reliable').displayName('Reliable Circuitry')
	e.create('circuit_reliable_incomplete','create:sequenced_assembly').displayName('Incomplete Reliable Circuitry')
	e.create('circuit_avionics').displayName('Avionics circuitry')
	e.create('circuit_avionics_incomplete','create:sequenced_assembly').displayName('Incomplete Avionics Circuitry')
	e.create('circuit_capacitive').displayName('Capacitive Circuitry')
	e.create('circuit_capacitive_incomplete','create:sequenced_assembly').displayName('Incomplete Capacitive Circuitry')
	//Foils
	e.create('foil_copper').displayName('Copper Foil')
	e.create('foil_copper_incomplete','create:sequenced_assembly').displayName('Incomplete Copper Foil')
	e.create('foil_iron').displayName('Iron Foil')
	e.create('foil_iron_incomplete','create:sequenced_assembly').displayName('Incomplete Iron Foil')
	e.create('foil_steel').displayName('Steel Foil')
	e.create('foil_steel_incomplete','create:sequenced_assembly').displayName('Incomplete Steel Foil')
	e.create('foil_aluminum').displayName('Aluminium Foil')
	e.create('foil_aluminum_incomplete','create:sequenced_assembly').displayName('Incomplete Aluminium Foil')
	//Coils
	e.create('coil_empty').displayName('Empty Coil')
	e.create('coil_copper').displayName('Copper Coil')
	e.create('coil_gold').displayName('Gold Coil')
	e.create('coil_aluminum').displayName('Aluminium Coil')
	//Misc Parts
	e.create('insulator').displayName('Insulator')
	e.create('reinforced_glass_panel').displayName('Reinforced Glass Panel')
	e.create('motor_kinetic').displayName('Kinetic Motor')
	e.create('motor_electrostatic').displayName('Electrostatic Motor')
	e.create('motor_brushless').displayName('Brushless Motor')
	e.create('motor_compact_turbine').displayName('Compact Turbine')
	e.create('motor_compact_steam_turbine').displayName('Compact Steam Turbine')

	//Misc Other Items
	e.create('scrap_metal').displayName('Scrap Metal')
    e.create('scrap_crystal').displayName('Scrap Crystal')
	e.create('crude_storage_interface').displayName('Crude Storage Interface')
	e.create('crude_storage_matrix').displayName('Crude Storage Matrix')
	e.create('crude_import_matrix').displayName('Crude Import Matrix')
	e.create('crude_export_matrix').displayName('Crude Export Matrix')




})

/*
e.create('circuit_').displayName('')
e.create('circuit__incomplete','create:sequenced_assembly').displayName('Incomplete ')
e.create('').displayName('')
e.create('foil_').displayName('')
		e.create('foil__incomplete','create:sequenced_assembly').displayName('Incomplete ')
*/


onEvent('block.registry', e => {
	
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


