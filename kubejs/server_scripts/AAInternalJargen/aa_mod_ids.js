// priority: 0

console.info('Loading Your Shorthands.')


let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let MC = (id, x) => MOD("minecraft", id, x)
let F = (id, x) => MOD("forge", id, x)
let CR = (id, x) => MOD("create", id, x)
let CG = (id, x) => MOD("creategears", id, x)
let CA = (id, x) => MOD("createaddition", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FB = (id, x) => MOD("framedblocks", id, x)
let CT = (id, x) => MOD('tombstone', id, x)
let CP = (id, x) => MOD("chipped", id, x)
let COM = (id, x) => MOD("compressium",id, x)
let AE = (id, x) => MOD('ae2', id, x)
let CS = (id, x) => MOD('createsifter', id, x)
let SK = (id, x) => MOD('skymachinatweaks', id, x)
let TP = (id, x) => MOD('telepastries', id, x)
let ST = (id, x) => MOD('skytweaks', id, x)
let VJ = (id, x) => MOD('projectvibrantjourneys', id, x)
let TS = (id, x) => MOD('toms_storage', id, x)
let BM = (id,x ) => MOD('bloodmagic', id, x)
let BT = (id,x) => MOD('botania', id, x)



//const e = event