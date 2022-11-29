// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Your Shorthands.')


let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let MC = (id, x) => MOD("minecraft", id, x)
let F = (id, x) => MOD("forge", id, x)
let CR = (id, x) => MOD("create", id, x)
let CG = (id, x) => MOD("creategears", id, x)
let CA = (id, x) => MOD("createaddition", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let BG = (id, x) => MOD("buildinggadgets", id, x)
let FB = (id, x) => MOD("framedblocks", id, x)
let CT = (id, x) => MOD('tombstone', id, x)
let CP = (id, x) => MOD("chipped", id, x)
let COM = (id, x) => MOD("compressium",id, x)
let AE = (id, x) => MOD('ae2', id, x)
let EX = (id, x) => MOD('exnihilosequentia', id, x)
let EXAE = (id, x) => MOD('exnihiloae', id, x)
let EXTK = (id, x) => MOD('exnihilotinkers', id, x)
let CS = (id, x) => MOD('createsifter', id, x)
let SK = (id, x) => MOD('skymachinatweaks', id, x)
let TP = (id, x) => MOD('telepastries', id, x)
let ST = (id, x) => MOD('skytweaks', id, x)// I dont know if i need this
let VJ = (id, x) => MOD('projectvibrantjourneys', id, x)


//const e = event