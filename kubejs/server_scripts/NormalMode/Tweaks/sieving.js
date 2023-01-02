//priority 0
//packmode: normalMode

console.info('Sifty Sifty...')

onEvent("recipes", e => {
	const crushing = e.recipes.createCrushing;

//sifter recipe removals
	function rmsifting(block, mesh){
		e.remove({id: CS(`sifting/${block}_${mesh}_mesh`)})
	}

	rmsifting('sand','string')
	rmsifting('sand','andesite')
	rmsifting('sand','zinc')
	rmsifting('sand','brass')
	rmsifting('gravel','string')
	rmsifting('gravel','andesite')
	rmsifting('gravel','zinc')
	rmsifting('gravel','brass')

//sifter recipe additions
    function sifting(input, mesh, outputs) {
		e.recipes.createsifterSifting(
			outputs,
			[input, mesh]
		).id(`skytweaks:sifting/${mesh.split(":")[1]}/${input.split(":")[1]}`)
	}

    sifting('skymachinatweaks:flower_pile', 'skymachinatweaks:mana_mesh', 
    	[Item.of('botania:white_petal').withChance(0.1),
			Item.of('botania:magenta_petal').withChance(0.1), 
			Item.of('botania:orange_petal').withChance(0.1),
			Item.of('botania:light_blue_petal').withChance(0.1),
			Item.of('botania:yellow_petal').withChance(0.1),
			Item.of('botania:lime_petal').withChance(0.1),
			Item.of('botania:pink_petal').withChance(0.1),
			Item.of('botania:gray_petal').withChance(0.1),
			Item.of('botania:light_gray_petal').withChance(0.1),
			Item.of('botania:cyan_petal').withChance(0.1),
			Item.of('botania:purple_petal').withChance(0.1),
			Item.of('botania:blue_petal').withChance(0.1),
			Item.of('botania:brown_petal').withChance(0.1),
			Item.of('botania:green_petal').withChance(0.1),
			Item.of('botania:red_petal').withChance(0.1),
			Item.of('botania:black_petal').withChance(0.1)])

		//Sand - String
		sifting('minecraft:sand', 'createsifter:string_mesh',
			[Item.of('create:zinc_nugget').withChance(0.01),
			Item.of('minecraft:redstone').withChance(0.05),
			Item.of('minecraft:bone_meal').withChance(0.4)
		
		])
		sifting('minecraft:red_sand', 'createsifter:string_mesh',
			[Item.of('create:zinc_nugget').withChance(0.01),
			Item.of('minecraft:redstone').withChance(0.05),
			Item.of('minecraft:bone_meal').withChance(0.4)
		
		])

		//Sand Andsite
		sifting('minecraft:sand', 'createsifter:andesite_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone').withChance(0.1),
			Item.of('minecraft:bone_meal').withChance(0.4)
		])
		sifting('minecraft:red_sand', 'createsifter:andesite_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone').withChance(0.1),
			Item.of('minecraft:bone_meal').withChance(0.4)
		])

		//Sand Zinc
		sifting('minecraft:sand', 'createsifter:zinc_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone').withChance(0.15),
			Item.of('minecraft:bone_meal').withChance(0.4)
		])
		sifting('minecraft:red_sand', 'createsifter:zinc_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone').withChance(0.15),
			Item.of('minecraft:bone_meal').withChance(0.4)
		])

		//Sand Brass
		sifting('minecraft:sand', 'createsifter:brass_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone',2).withChance(0.25),
			Item.of('minecraft:bone_meal').withChance(0.4),
			Item.of('minecraft:glowstone').withChance(0.1),
			Item.of('minecraft:blaze_powder').withChance(0.05),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.05)
		])
		sifting('minecraft:red_sand', 'createsifter:brass_mesh',
			[Item.of('create:experience_nugget').withChance(0.10),
			Item.of('minecraft:redstone',2).withChance(0.25),
			Item.of('minecraft:bone_meal').withChance(0.4),
			Item.of('minecraft:glowstone').withChance(0.1),
			Item.of('minecraft:blaze_powder').withChance(0.05),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.05)
		])

		//Sand Lead
		sifting('minecraft:sand', 'skymachinatweaks:lead_mesh',
			[Item.of('create:experience_nugget').withChance(0.15),
			Item.of('minecraft:redstone',2).withChance(0.3),
			Item.of('minecraft:bone_meal').withChance(0.5),
			Item.of('minecraft:glowstone').withChance(0.3),
			Item.of('minecraft:blaze_powder').withChance(0.1),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.1)
		])
		sifting('minecraft:red_sand', 'skymachinatweaks:lead_mesh',
			[Item.of('create:experience_nugget').withChance(0.15),
			Item.of('minecraft:redstone',2).withChance(0.3),
			Item.of('minecraft:bone_meal').withChance(0.5),
			Item.of('minecraft:glowstone').withChance(0.3),
			Item.of('minecraft:blaze_powder').withChance(0.1),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.1)
		])

		//Sand Steel
		sifting('minecraft:sand', 'skymachinatweaks:steel_mesh',
			[Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:redstone',2).withChance(0.5),
			Item.of('minecraft:bone_meal').withChance(0.3),
			Item.of('minecraft:glowstone').withChance(0.4),
			Item.of('minecraft:blaze_powder').withChance(0.2),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.15)
		])
		sifting('minecraft:red_sand', 'skymachinatweaks:steel_mesh',
			[Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:redstone',2).withChance(0.5),
			Item.of('minecraft:bone_meal').withChance(0.3),
			Item.of('minecraft:glowstone').withChance(0.4),
			Item.of('minecraft:blaze_powder').withChance(0.2),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.15)
		])

		//Gravel String
		sifting('minecraft:gravel', 'createsifter:string_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l1').withChance(0.5),
			Item.of('minecraft:flint',).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3)
		])

		//Gravel Andesite
		sifting('minecraft:gravel', 'createsifter:andesite_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l2').withChance(0.6),
			Item.of('skymachinatweaks:dusty_crushed_ore_l1',2).withChance(0.3),
			Item.of('minecraft:flint',2).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3)
		])

		//Gravel Zinc
		sifting('minecraft:gravel', 'createsifter:zinc_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l3').withChance(0.6),
			Item.of('skymachinatweaks:dusty_crushed_ore_l2',2).withChance(0.3),
			Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:flint',2).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3)
		])

		//Gravel Brass
		sifting('minecraft:gravel', 'createsifter:brass_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l4').withChance(0.6),
			Item.of('skymachinatweaks:dusty_crushed_ore_l3',2).withChance(0.3),
			Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:flint',2).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3)
		])

		//Gravel Lead
		sifting('minecraft:gravel', 'skymachinatweaks:lead_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l5').withChance(0.6),
			Item.of('skymachinatweaks:dusty_crushed_ore_l4',2).withChance(0.3),
			Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:flint',2).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3)
		])

		//Gravel Steel
		sifting('minecraft:gravel', 'skymachinatweaks:steel_mesh',
			[Item.of('skymachinatweaks:dusty_crushed_ore_l6').withChance(0.6),
			Item.of('skymachinatweaks:dusty_crushed_ore_l5',2).withChance(0.3),
			Item.of("skymachinatweaks:dusty_crushed_ore_l0").withChance(0.3),
			Item.of('create:experience_nugget').withChance(0.2),
			Item.of('minecraft:flint',2).withChance(0.3),
		])

		//Geoed Cracking
		crushing(
			[
			  Item.of("skymachinatweaks:shattered_amethyst").withChance(0.1),
			  Item.of("minecraft:lapis_lazuli").withChance(0.3),
			  Item.of("minecraft:redstone").withChance(0.3),
			  Item.of("minecraft:prismarine_crystals").withChance(0.2),
			  Item.of("minecraft:prismarine_shard").withChance(0.2),
			  Item.of("thermal:cinnabar").withChance(0.7),
			  Item.of("thermal:niter").withChance(0.4),
			  Item.of("thermal:sulfur").withChance(0.6),
			  Item.of("botania:pebble").withChance(0.8),
			],
			"botania:pebble"
		  ).processingTime(1200).id('skytweaks:crushing/geoed_cracking');
		

})