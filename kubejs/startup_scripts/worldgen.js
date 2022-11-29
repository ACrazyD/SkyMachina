//priority 0

console.log("removing ores")
let _minecraft_ores = ['coal','iron','copper','gold','redstone','emerald','lapis','diamond','nether_gold','nether_quartz']
let _cr_ores = ['zinc_ore']
let _mek_ores = ['ore_osmium_middle','ore_osmium_small','ore_osmium_upper','ore_uranium_small','ore_uranium_buried','ore_fluorite_buried','ore_fluorite_normal','ore_lead_normal','ore_tin_large','ore_tin_small','salt']
let _myth_ores = ['wg_elementium_ore','wg_dragonstone_ore']
let _thermal_ores = ['apatite_ore','cinnabar_ore','niter_ore','sulfur_ore','tin_ore','lead_ore','silver_ore','nickel_ore']
let _tc_ores = ['cobalt_ore_small','cobalt_ore_large']
let _ae2_ores = ['ae2:quartz_ore']
let _byg_ores = ['ore_pendorite','ore_emeraldite','ore_anthracite','ore_quartz_blue_netherrack','ore_quartz_brimstone']

onEvent("worldgen.remove", e  => {
    function featureBeGone(mod, features){
        features.forEach(ore => {
            e.removeFeatureById(`underground_ores`, `${mod}:${ore}`)
        })
    }

featureBeGone(`create`, _cr_ores)

featureBeGone(`mekanism`, _mek_ores)

featureBeGone(`mythicbotany`, _myth_ores)

featureBeGone(`thermal`, _thermal_ores)

featureBeGone(`tconstruct`, _tc_ores)

featureBeGone(`ae2`, _ae2_ores)

featureBeGone(`byg`, _byg_ores)




//end of worldgen.remove
})
