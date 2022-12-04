//priority 0

onEvent('block.right_click', e => {
    //In World Crafting
    inWorldCrafting("tconstruct:sledge_hammer", "minecraft:andesite", "create:andesite_alloy", 75, 1)


    //Item Application Crafting
    itemApplication("minecraft:quartz", "minecraft:stone", "minecraft:andesite")




    function inWorldCrafting(item, hi, output, chance, damage) {
        if (e.hand != MAIN_HAND) {
            if (e.item.id === item && e.block.id === hi) {
                e.player.swingArm(Hand.OFF_HAND)
                e.player.damageHeldItem(Hand.OFF_HAND, damage);
                e.player.give(output);
                 if (Math.random() * 100 > chance) {
                    e.server.runCommandSilent(`/setblock ${e.block.x} ${e.block.y} ${e.block.z} minecraft:air`)
                }
            }
            return;
        }
        if (e.item.id === item && e.block.id === hi) {
            e.player.swingArm(Hand.MAIN_HAND);
            e.player.damageHeldItem(Hand.MAIN_HAND, damage);
            e.player.give(output);
             if (Math.random() * 100 > chance) {
                e.server.runCommandSilent(`/setblock ${e.block.x} ${e.block.y} ${e.block.z} minecraft:air`)
            }
        }
    }

    function itemApplication(item, block, output) {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
              {
                "item": block
              },
              {
                "item": item
              }
            ],
            "results": [
              {
                "item": output
              }
            ]
        })
    }

})