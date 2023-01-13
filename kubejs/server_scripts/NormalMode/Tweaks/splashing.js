// priority: 1
//packmode: normalMode

console.info('Spashing Your Stuff')


onEvent('recipes', e => {

e.remove({
    id: "create:splashing/gravel",
  });
  
    e.recipes
        .createSplashing(
        [
            Item.of("minecraft:flint").withChance(0.8),
            Item.of("create:experience_nugget").withChance(0.02),
            Item.of("minecraft:clay_ball").withChance(0.7),
            Item.of("botania:pebble").withChance(0.03),
        ],
        "skymachinatweaks:dusty_crushed_ore_l0"
        )
    .processingTime(600).id('skymachinatweaks:splashing/dusty_crushed_ore_l0');  
  
    e.recipes
        .createSplashing(
        [
            Item.of("minecraft:flint").withChance(0.8),
            Item.of("create:experience_nugget").withChance(0.02),
            Item.of("create:zinc_nugget").withChance(0.7),
        ],
        "skymachinatweaks:dusty_crushed_ore_l1"
        )
    .processingTime(600).id('skymachinatweaks:splashing/dusty_crushed_ore_l1');

    e.recipes
        .createSplashing(
        [
            Item.of("minecraft:flint").withChance(0.2),
            Item.of("minecraft:coal").withChance(0.4),
            Item.of("create:experience_nugget").withChance(0.03),
            Item.of("create:zinc_nugget").withChance(0.1),
            Item.of("create:copper_nugget").withChance(0.12),
            Item.of("minecraft:iron_nugget").withChance(0.7),
        ],
        "skymachinatweaks:dusty_crushed_ore_l2"
        )
    .processingTime(800).id('skymachinatweaks:splashing/dusty_crushed_ore_l2');

    e.recipes
        .createSplashing(
        [
            Item.of("create:crushed_zinc_ore").withChance(0.2),
            Item.of("create:crushed_iron_ore").withChance(0.2),
            Item.of("minecraft:lapis_lazuli").withChance(0.2),
            Item.of("create:experience_nugget").withChance(0.4),
        ],
        "skymachinatweaks:dusty_crushed_ore_l3"
        )
    .processingTime(800).id('skymachinatweaks:splashing/dusty_crushed_ore_l3');

    e.recipes
        .createSplashing(
        [
            Item.of("create:crushed_tin_ore").withChance(0.2),
            Item.of("create:experience_nugget").withChance(0.4),
        ],
        "skymachinatweaks:dusty_crushed_ore_l4"
        )
    .processingTime(800).id('skymachinatweaks:splashing/dusty_crushed_ore_l4');

    e.recipes
        .createSplashing(
        [

            Item.of("create:crushed_silver_ore").withChance(0.2),
            Item.of("create:experience_nugget").withChance(0.4),
        ],
        "skymachinatweaks:dusty_crushed_ore_l5"
        )
    .processingTime(800).id('skymachinatweaks:splashing/dusty_crushed_ore_l5');

    e.recipes
        .createSplashing(
        [
            Item.of("create:crushed_uranium_ore").withChance(0.2),
            Item.of("create:experience_nugget").withChance(0.4),
        ],
        "skymachinatweaks:dusty_crushed_ore_l6"
        )
    .processingTime(800).id('skymachinatweaks:splashing/dusty_crushed_ore_l6');
    
    
//End Of Recipes
})