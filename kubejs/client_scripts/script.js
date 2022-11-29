// priority: 0

console.info('Making REI Betterer')

onEvent('rei.hide.items', e => {
	//e.hide('example:ingredient')
    e.hide('createsifter:custom_mesh')

//End of Hide
})

onEvent('rei.information', e => {
	//e.add('example:ingredient', 'Title', ['Line 1', 'Line 2'])
    e.add('apotheosis:gem', '', ['Can be Crushed For','Gem Dust'])

//End Of Info Tagging
})

onEvent("rei.group", (event) => {

	event.groupItems("kubejs:rei_groups/swords", "Swords", [
        "minecraft:wooden_sword",
        "minecraft:stone_sword",
        "minecraft:iron_sword",
        "minecraft:diamond_sword",
        "minecraft:golden_sword",
        "minecraft:netherite_sword",
    ]);

    event.groupItemsByTag("supplementaries:rei_groups/hanging_signs", "Hanging Signs", "supplementaries:hanging_signs");
    event.groupItemsByTag("supplementaries:rei_groups/sign_posts", "Sign Posts", "supplementaries:sign_posts");
	event.groupItemsByTag("simpleplanes:rei_groups/plane", "Planes", "simpleplanes:plane")

    const useNbt = ["potion",
     "enchanted_book",
     "splash_potion",
     "tipped_arrow", 
     "lingering_potion", 
     "simpleplanes:plane",
     "simpleplanes:large_plane", 
     "simpleplanes:helicopter", 
     "apotheosis:potion_charm", 
     "mekanism:creative_fluid_tank", 
     "mekanism:creative_chemical_tank", 
     "tconstruct:pick_head", 
     "tconstruct:hammer_head", 
     "tconstruct:small_axe_head", 
     "tconstruct:broad_axe_head", 
     "tconstruct:small_blade", 
     "tconstruct:broad_blade", 
     "tconstruct:round_plate", 
     "tconstruct:large_plate", 
     "tconstruct:tool_binding", 
     "tconstruct:tough_handle", 
     "tconstruct:tool_handle", 
     "tconstruct:pickaxe", 
     "tconstruct:sledge_hammer", 
     "tconstruct:vein_hammer", 
     "tconstruct:mattock", 
     "tconstruct:pickadze", 
     "tconstruct:excavator", 
     "tconstruct:hand_axe", 
     "tconstruct:broad_axe", 
     "tconstruct:kama", 
     "tconstruct:scythe", 
     "tconstruct:dagger", 
     "tconstruct:sword", 
     "tconstruct:cleaver", 
     "tconstruct:repair_kit", 
     "quark:seed_pouch"];
    useNbt.forEach((id) => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getName(), item);
    });

    event.groupItems("kubejs:rei_groups/spawn_eggs", "Spawn Eggs", [
        /spawn_egg/,
        /^ars_nouveau:.*_se$/,
        "supplementaries:red_merchant_spawn_egg",
    ]);

    Ingredient.of(/^compressium:.+_1$/).stacks
    .forEach(stack => {
      const description = stack.name.string
        .slice(0)
        .replace(/ \(1x\)$/, '')

      const stackId = ResourceLocation(stack.id)
      const block = stackId.path
        .toString()
        .slice(0)
        .replace(/_\d+$/, '')

      const groupId = `${stackId.namespace}:rei_groups/${block}`
      const entries = Ingredient.of(new RegExp(`^${stackId.namespace}:${block}_\\d+$`))

      event.groupItems(groupId, description, entries)
    })


    let ae2Cables = ["glass", "covered", "smart", "covered_dense", "smart_dense"];
    ae2Cables.forEach((type) => {
        event.groupItemsByTag(
        `ae2:rei_groups/${type}_cables`,
        `${toMultiTitleCase(type)} Cables`,
        `ae2:${type}_cable`
        );
    });

    event.groupItemsByTag(
        `ae2:rei_groups/memory_cards`,
        `Memory Cards`,
        `ae2:memory_cards`
    );

    event.groupItemsByTag(
        `tconstruct:rei_groups/single_use`,
        `Single use casts`,
        `tconstruct:casts/single_use`
    );

    event.groupItemsByTag(
        `tconstruct:rei_groups/multi_use`,
        `Multi use casts`,
        `tconstruct:casts/multi_use`
    );

    event.groupItems(
        "industrialforegoing:rei_groups/tank_bh",
        "Black Hole Tanks",
        /indus.*hole_tank/
    );

    event.groupItems(
        "functionalstorage:rei_groups/drawers",
        "Functional Storage's Drawers",
        "#functionalstorage:drawer"
    );

    let chippedBlocks = [
        "amethyst_block",
        "ancient_debris",
        "andesite",
        "barrel",
        "basalt",
        "blackstone",
        "blue_ice",
        "bone_block",
        "bookshelf",
        "bricks",
        "brown_mushroom_block",
        "calcite",
        "carved_pumpkin",
        "clay",
        "coal_block",
        "cobblestone",
        "crying_obsidian",
        "dark_prismarine",
        "deepslate",
        "diamond_block",
        "diorite",
        "dirt",
        "dried_kelp_block",
        "dripstone_block",
        "emerald_block",
        "end_stone",
        "gilded_blackstone",
        "glowstone",
        "gold_block",
        "granite",
        "gravel",
        "hay_block",
        "ice",
        "iron_bars",
        "iron_block",
        "jack_o_lantern",
        "ladder",
        "lapis_block",
        "lodestone",
        "magma_block",
        "melon",
        "moss_block",
        "mossy_cobblestone",
        "mushroom_stem",
        "nether_bricks",
        "nether_wart_block",
        "netherrack",
        "obsidian",
        "packed_ice",
        "prismarine",
        "pumpkin",
        "purpur_block",
        "quartz_block",
        "raw_copper_block",
        "raw_gold_block",
        "raw_iron_block",
        "red_mushroom_block",
        "red_nether_bricks",
        "red_sandstone",
        "redstone_block",
        "redstone_lamp",
        "sand",
        "sandstone",
        "sea_lantern",
        "shroomlight",
        "smooth_stone",
        "snow_block",
        "soul_sand",
        "sponge",
        "stone",
        "tuff",
        "warped_wart_block",
        "waxed_copper_block",
        "waxed_oxidized_copper",
        "waxed_exposed_copper",
        "waxed_weathered_copper",
        "glass",
        "glass_pane",
        "white_stained_glass",
        "white_stained_glass_pane",
        "orange_stained_glass",
        "orange_stained_glass_pane",
        "magenta_stained_glass",
        "magenta_stained_glass_pane",
        "light_blue_stained_glass",
        "light_blue_stained_glass_pane",
        "yellow_stained_glass",
        "yellow_stained_glass_pane",
        "lime_stained_glass",
        "lime_stained_glass_pane",
        "pink_stained_glass",
        "pink_stained_glass_pane",
        "gray_stained_glass",
        "gray_stained_glass_pane",
        "light_gray_stained_glass",
        "light_gray_stained_glass_pane",
        "cyan_stained_glass",
        "cyan_stained_glass_pane",
        "purple_stained_glass",
        "purple_stained_glass_pane",
        "blue_stained_glass",
        "blue_stained_glass_pane",
        "brown_stained_glass",
        "brown_stained_glass_pane",
        "green_stained_glass",
        "green_stained_glass_pane",
        "red_stained_glass",
        "red_stained_glass_pane",
        "black_stained_glass",
        "black_stained_glass_pane",
        "acacia_planks",
        "birch_planks",
        "crimson_planks",
        "dark_oak_planks",
        "jungle_planks",
        "oak_planks",
        "spruce_planks",
        "warped_planks",
        "acacia_log",
        "birch_log",
        "crimson_stem",
        "dark_oak_log",
        "jungle_log",
        "oak_log",
        "spruce_log",
        "warped_stem",
        "stripped_acacia_log",
        "stripped_birch_log",
        "stripped_crimson_stem",
        "stripped_dark_oak_log",
        "stripped_jungle_log",
        "stripped_oak_log",
        "stripped_spruce_log",
        "stripped_warped_stem",
        "acacia_leaves",
        "birch_leaves",
        "dark_oak_leaves",
        "jungle_leaves",
        "oak_leaves",
        "spruce_leaves",
        "white_terracotta",
        "orange_terracotta",
        "magenta_terracotta",
        "light_blue_terracotta",
        "yellow_terracotta",
        "lime_terracotta",
        "pink_terracotta",
        "gray_terracotta",
        "light_gray_terracotta",
        "cyan_terracotta",
        "purple_terracotta",
        "blue_terracotta",
        "brown_terracotta",
        "green_terracotta",
        "red_terracotta",
        "black_terracotta",
        "white_glazed_terracotta",
        "orange_glazed_terracotta",
        "magenta_glazed_terracotta",
        "light_blue_glazed_terracotta",
        "yellow_glazed_terracotta",
        "lime_glazed_terracotta",
        "pink_glazed_terracotta",
        "gray_glazed_terracotta",
        "light_gray_glazed_terracotta",
        "cyan_glazed_terracotta",
        "purple_glazed_terracotta",
        "blue_glazed_terracotta",
        "brown_glazed_terracotta",
        "green_glazed_terracotta",
        "red_glazed_terracotta",
        "black_glazed_terracotta",
        "white_concrete",
        "black_concrete",
        "blue_concrete",
        "brown_concrete",
        "cyan_concrete",
        "gray_concrete",
        "green_concrete",
        "light_blue_concrete",
        "light_gray_concrete",
        "lime_concrete",
        "magenta_concrete",
        "orange_concrete",
        "pink_concrete",
        "purple_concrete",
        "red_concrete",
        "yellow_concrete",
        "white_wool",
        "white_carpet",
        "orange_wool",
        "orange_carpet",
        "magenta_wool",
        "magenta_carpet",
        "light_blue_wool",
        "light_blue_carpet",
        "yellow_wool",
        "yellow_carpet",
        "lime_wool",
        "lime_carpet",
        "pink_wool",
        "pink_carpet",
        "gray_wool",
        "gray_carpet",
        "light_gray_wool",
        "light_gray_carpet",
        "cyan_wool",
        "cyan_carpet",
        "purple_wool",
        "purple_carpet",
        "blue_carpet",
        "brown_wool",
        "brown_carpet",
        "green_wool",
        "green_carpet",
        "red_wool",
        "red_carpet",
        "black_wool",
        "black_carpet",
        "acacia_door",
        "dark_oak_door",
        "birch_door",
        "jungle_door",
        "oak_door",
        "spruce_door",
        "crimson_door",
        "warped_door",
        "acacia_trapdoor",
        "dark_oak_trapdoor",
        "birch_trapdoor",
        "jungle_trapdoor",
        "oak_trapdoor",
        "spruce_trapdoor",
        "crimson_trapdoor",
        "warped_trapdoor",
        "brown_mushroom",
        "cobweb",
        "crimson_fungus",
        "pointed_dripstone",
        "lily_pad",
        "nether_sprouts",
        "red_mushroom",
        "vine",
        "warped_fungus",
        "torch",
        "lantern",
        "soul_lantern",
        "special_lantern",
        "special_soul_lantern",
        "mossy_stone_bricks",
        "netherite_block",
        "blue_wool",
        "crimson_roots",
        "warped_roots",
        "redstone_torch",
      ];
    
      chippedBlocks.forEach((type) => {
        var rsRegex = new RegExp(`chipped:${type}(?!.*(blower)).*`);
        event.groupItems(
          `chipped:rei_groups/${type}`,
          `${toMultiTitleCase(type)}`,
          rsRegex
        );
      });

    let modFluidsToHide = [
        "tconstruct",
        "thermal",
        "industrialforegoing",
        "minecraft",
        "create",
        "mekanism",
        "immersiveengineering",
        "createaddition",
        "cofh_core",
        "mekanismgenerators",
        "mob_grinding_utils",
        "bloodmagic",
        "experienceobelisk",
    ];

    event.groupFluids(
        "kubejs:rei_groups/fluids",
        "Fluids",
    Ku.Fluids.getFluidsByNamespaces(modFluidsToHide).toArray()
    );

    const mekGas = [
        "mekanism:hydrogen",
        "mekanism:oxygen",
        "mekanism:water_vapor",
        "mekanism:chlorine",
        "mekanism:sulfur_dioxide",
        "mekanism:sulfur_trioxide",
        "mekanism:sulfuric_acid",
        "mekanism:hydrogen_chloride",
        "mekanism:hydrofluoric_acid",
        "mekanism:uranium_oxide",
        "mekanism:uranium_hexafluoride",
        "mekanism:ethene",
        "mekanism:sodium",
        "mekanism:steam",
        "mekanism:superheated_sodium",
        "mekanism:brine",
        "mekanism:lithium",
        "mekanism:osmium",
        "mekanism:fissile_fuel",
        "mekanism:nuclear_waste",
        "mekanism:spent_nuclear_waste",
        "mekanism:plutonium",
        "mekanism:polonium",
        "mekanism:antimatter",
        "mekanismgenerators:deuterium",
        "mekanismgenerators:tritium",
        "mekanismgenerators:fusion_fuel",
      ];
      event.groupEntries(
        `mekanism:rei_groups/gas`,
        "Gas!",
        "mekanism:jei_plugin_gasstack",
        mekGas
      );
    
      const mekInfuse = [
        "mekanism:carbon",
        "mekanism:redstone",
        "mekanism:diamond",
        "mekanism:refined_obsidian",
        "mekanism:gold",
        "mekanism:tin",
        "mekanism:fungi",
        "mekanism:bio",
      ];
      event.groupEntries(
        `mekanism:rei_groups/infuse`,
        "Infuses!",
        "mekanism:jei_plugin_infusionstack",
        mekInfuse
      );
    
      const mekpigment = [
        "mekanism:black",
        "mekanism:blue",
        "mekanism:green",
        "mekanism:cyan",
        "mekanism:dark_red",
        "mekanism:purple",
        "mekanism:orange",
        "mekanism:light_gray",
        "mekanism:gray",
        "mekanism:light_blue",
        "mekanism:lime",
        "mekanism:aqua",
        "mekanism:red",
        "mekanism:magenta",
        "mekanism:yellow",
        "mekanism:white",
        "mekanism:brown",
        "mekanism:pink",
      ];
      event.groupEntries(
        `mekanism:rei_groups/pigment`,
        "Pigments!",
        "mekanism:jei_plugin_pigmentstack",
        mekpigment
      );
    
      const mekslurry = [
        "mekanism:dirty_iron",
        "mekanism:clean_iron",
        "mekanism:dirty_gold",
        "mekanism:clean_gold",
        "mekanism:dirty_osmium",
        "mekanism:clean_osmium",
        "mekanism:dirty_copper",
        "mekanism:clean_copper",
        "mekanism:dirty_tin",
        "mekanism:clean_tin",
        "mekanism:dirty_lead",
        "mekanism:clean_lead",
        "mekanism:dirty_uranium",
        "mekanism:clean_uranium",
      ];
      event.groupEntries(
        `mekanism:rei_groups/slurry`,
        "Slurrys!",
        "mekanism:jei_plugin_slurrystack",
        mekslurry
      );
    
      const asd = [
        "tconstruct:expanded",
        "tconstruct:embellishment",
        "tconstruct:golden",
        "tconstruct:shulking",
        "tconstruct:step_up",
        "tconstruct:wetting",
        "tconstruct:haste_armor",
        "tconstruct:gilded",
        "tconstruct:reach",
        "tconstruct:unbreakable",
        "tconstruct:aqua_affinity",
        "tconstruct:autosmelt",
        "tconstruct:bucketing",
        "tconstruct:dual_wielding",
        "tconstruct:exchanging",
        "tconstruct:glowing",
        "tconstruct:luck",
        "tconstruct:melting",
        "tconstruct:silky",
        "tconstruct:spilling",
        "tconstruct:firestarter",
        "tconstruct:pathing",
        "tconstruct:stripping",
        "tconstruct:tilling",
        "tconstruct:double_jump",
        "tconstruct:bouncy",
        "tconstruct:pockets",
        "tconstruct:protection",
        "tconstruct:shield_strap",
        "tconstruct:slurping",
        "tconstruct:strength",
        "tconstruct:tool_belt",
        "tconstruct:unarmed",
        "tconstruct:wings",
        "tconstruct:zoom",
        "tconstruct:flamewake",
        "tconstruct:frost_walker",
        "tconstruct:path_maker",
        "tconstruct:plowing",
        "tconstruct:snowdrift",
        "tconstruct:blast_protection",
        "tconstruct:magic_protection",
        "tconstruct:projectile_protection",
        "tconstruct:melee_protection",
        "tconstruct:fire_protection",
        "tconstruct:knockback_resistance",
        "tconstruct:revitalizing",
        "tconstruct:dragonborn",
        "tconstruct:turtle_shell",
        "tconstruct:creative_slot",
        "tconstruct:dyed",
        "tconstruct:nearsighted",
        "tconstruct:farsighted",
        "tconstruct:overslime",
        "tconstruct:shiny",
        "tconstruct:worldbound",
        "tconstruct:writable",
        "tconstruct:recapitated",
        "tconstruct:harmonious",
        "tconstruct:resurrected",
        "tconstruct:draconic",
        "tconstruct:red_extra_upgrade",
        "tconstruct:green_extra_upgrade",
        "tconstruct:blue_extra_upgrade",
        "tconstruct:extra_ability",
        "tconstruct:diamond",
        "tconstruct:emerald",
        "tconstruct:experienced",
        "tconstruct:fireprimer",
        "tconstruct:magnetic",
        "tconstruct:netherite",
        "tconstruct:offhanded",
        "tconstruct:overforced",
        "tconstruct:reinforced",
        "tconstruct:soulbound",
        "tconstruct:tank",
        "tconstruct:the_one_probe",
        "tconstruct:blasting",
        "tconstruct:fortune",
        "tconstruct:haste",
        "tconstruct:hydraulic",
        "tconstruct:lightspeed",
        "tconstruct:antiaquatic",
        "tconstruct:bane_of_sssss",
        "tconstruct:cooling",
        "tconstruct:fiery",
        "tconstruct:killager",
        "tconstruct:knockback",
        "tconstruct:looting",
        "tconstruct:padded",
        "tconstruct:piercing",
        "tconstruct:severing",
        "tconstruct:sharpness",
        "tconstruct:smite",
        "tconstruct:sweeping_edge",
        "tconstruct:swiftstrike",
        "tconstruct:armor_power",
        "tconstruct:feather_falling",
        "tconstruct:knockback_armor",
        "tconstruct:leaping",
        "tconstruct:lightspeed_armor",
        "tconstruct:item_frame",
        "tconstruct:pocket_chain",
        "tconstruct:respiration",
        "tconstruct:ricochet",
        "tconstruct:soulspeed",
        "tconstruct:speedy",
        "tconstruct:springy",
        "tconstruct:sticky",
        "tconstruct:thorns",
        "tconstruct:cultivated",
        "tconstruct:dense",
        "tconstruct:ductile",
        "tconstruct:enderporting",
        "tconstruct:enhanced",
        "tconstruct:lightweight",
        "tconstruct:overcast",
        "tconstruct:overgrowth",
        "tconstruct:overlord",
        "tconstruct:overworked",
        "tconstruct:solar_powered",
        "tconstruct:stoneshield",
        "tconstruct:stringy",
        "tconstruct:sturdy",
        "tconstruct:tanned",
        "tconstruct:tasty",
        "tconstruct:airborne",
        "tconstruct:dwarven",
        "tconstruct:jagged",
        "tconstruct:lustrous",
        "tconstruct:momentum",
        "tconstruct:sharpweight",
        "tconstruct:temperate",
        "tconstruct:conducting",
        "tconstruct:crumbling",
        "tconstruct:decay",
        "tconstruct:heavy",
        "tconstruct:insatiable",
        "tconstruct:invariant",
        "tconstruct:lacerating",
        "tconstruct:maintained",
        "tconstruct:maintained_2",
        "tconstruct:necrotic",
        "tconstruct:raging",
        "tconstruct:scorching",
        "tconstruct:searing",
        "tconstruct:stonebound",
        "tconstruct:boon_of_sssss",
        "tconstruct:breathtaking",
        "tconstruct:chrysophilite",
        "tconstruct:enderdodging",
        "tconstruct:firebreath",
        "tconstruct:frosttouch",
        "tconstruct:gold_guard",
        "tconstruct:mithridatism",
        "tconstruct:plague",
        "tconstruct:revenge",
        "tconstruct:self_destructive",
        "tconstruct:strong_bones",
        "tconstruct:wildfire",
        "tconstruct:withered",
        "tconstruct:creeper_disguise",
        "tconstruct:enderman_disguise",
        "tconstruct:skeleton_disguise",
        "tconstruct:stray_disguise",
        "tconstruct:wither_skeleton_disguise",
        "tconstruct:spider_disguise",
        "tconstruct:cave_spider_disguise",
        "tconstruct:zombie_disguise",
        "tconstruct:husk_disguise",
        "tconstruct:drowned_disguise",
        "tconstruct:blaze_disguise",
        "tconstruct:piglin_disguise",
        "tconstruct:piglin_brute_disguise",
        "tconstruct:zombified_piglin_disguise",
        "tconstruct:wood",
        "tconstruct:flint",
        "tconstruct:bone",
        "tconstruct:necrotic_bone",
        "tconstruct:string",
        "tconstruct:leather",
        "tconstruct:vine",
        "tconstruct:iron",
        "tconstruct:copper",
        "tconstruct:seared_stone",
        "tconstruct:bloodbone",
        "tconstruct:scorched_stone",
        "tconstruct:chain",
        "tconstruct:skyslime_vine",
        "tconstruct:slimewood",
        "tconstruct:slimesteel",
        "tconstruct:amethyst_bronze",
        "tconstruct:nahuatl",
        "tconstruct:rose_gold",
        "tconstruct:pig_iron",
        "tconstruct:cobalt",
        "tconstruct:darkthread",
        "tconstruct:queens_slime",
        "tconstruct:hepatizon",
        "tconstruct:manyullyn",
        "tconstruct:blazing_bone",
        "tconstruct:ancient_hide",
        "tconstruct:enderslime_vine",
        "tconstruct:osmium",
        "tconstruct:tungsten",
        "tconstruct:platinum",
        "tconstruct:silver",
        "tconstruct:lead",
        "tconstruct:whitestone",
        "tconstruct:steel",
        "tconstruct:bronze",
        "tconstruct:constantan",
        "tconstruct:invar",
        "tconstruct:necronium",
        "tconstruct:electrum",
        "tconstruct:plated_slimewood",
        "tconstruct:obsidian",
        "tconstruct:debris",
        "tconstruct:netherite",
        "tconstruct:aluminum",
        "tconstruct:nickel",
        "tconstruct:tin",
        "tconstruct:zinc",
        "tconstruct:brass",
        "tconstruct:uranium",
        "tconstruct:gold",
        "tconstruct:gunpowder",
        "tconstruct:rotten_flesh",
        "tconstruct:spider",
        "tconstruct:venom",
        "tconstruct:ender_pearl",
        "tconstruct:earthslime",
        "tconstruct:skyslime",
        "tconstruct:blood",
        "tconstruct:ichor",
        "tconstruct:enderslime",
        "tconstruct:clay",
        "tconstruct:honey",
        "tconstruct:phantom",
        "tconstruct:chorus",
        "tconstruct:rabbi",
        "tconstruct:wood",
        "tconstruct:stone",
        "tconstruct:iron",
        "tconstruct:diamond",
        "tconstruct:netherite",
    ];

      event.groupEntries(
        `tconstruct:rei_groups/infuse`,
        "Slurrys!",
        "tconstruct:jei_plugin_modifierentry",
        asd
      );

//End Of Grouping
});


function toMultiTitleCase(str) {
    var i,
        frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
}

onEvent('rei.remove.categories', event => {
	console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
	
	//event.remove works too, but yeeting is so much more fun 😉
	event.yeet('create:automatic_shapeless')
	event.yeet('minecraft:plugins/waxing')
	event.yeet('minecraft:plugins/wax_scraping')
	event.yeet('minecraft:plugins/pathing')
  event.yeet("minecraft:plugins/tag");
})

onEvent('item.tooltip', tooltip => {
    
    tooltip.add('thermal:latex_bucket', ["Not equivalent to Industrial Foregoing's Latex"])
    tooltip.add('minecraft:skeleton_skull', Text.of('This used to be ').append(Client.player.name).append("'s head"))
    tooltip.add('apotheosis:gem', ["This can be Crushed for Gem Dust"])
    
    tooltip.addAdvanced('minecraft:player_head', (item, advanced, text) => {
      let playername = item.nbt?.SkullOwner?.Name
      if (playername) {
        text.add(Text.red(`The head of ${playername}`))
      }
    })
  })
