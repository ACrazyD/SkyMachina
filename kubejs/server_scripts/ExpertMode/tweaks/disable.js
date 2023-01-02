//priority 0
//packmode: expertMode

settings.logAddedRecipes = false
settings.logRemovedRecipes = false

console.info('REMOVE THE EVERYTHING!!!')

onEvent('recipes', e => {
    //Nukes Mods Pending Reworks.

    //AE2
    e.remove({mod: 'ae2'})
    e.remove({mod: 'ae2things'})
    e.remove({mod: 'lazierae2'})
    e.remove({mod: 'appmek'})
    //Create + Addons
    e.remove({mod: 'create'})
    e.remove({mod: 'extendedflywheels'})
    e.remove({mod: 'create_things_and_misc'})
    e.remove({mod: 'createsifter'})
    e.remove({mod: 'createaddition'})
    e.remove({mod: 'compressedcreativity'})
    //Other
    e.remove({mod: 'ironjetpacks'})
    e.remove({mod: 'thermal'})
    e.remove({mod: 'infinitesource'})
    e.remove({mod: 'occultism'})
    e.remove({mod: 'bloodmagic'})
    e.remove({mod: 'botania'})
    e.remove({mod: 'torchmaster'})
    e.remove({mod: 'pneumaticcraft'})
    e.remove({mod: 'telepastries'})
    e.remove({mod: 'tiab'})
    e.remove({mod: 'toms_storage'})
    e.remove({mod: 'gateways'})
    e.remove({mod: 'morebuckets'})
    e.remove({mod: 'chancecubes'})
    e.remove({mod: 'paraglider'})
    e.remove({mod: 'industrialforegoing'})
    //End Of Recipes
    })