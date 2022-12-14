console.info('Toms Storage Recipes Found.')

onEvent('recipes', e => {

    //Internal Items
    e.shaped('2x kubejs:crude_import_matrix', [
        'H',
        'C'
    ], {
        H: MC(hopper),
        C: KJ(ciruit_basic)
    }).id('skytweaks:crude_import_matrix')

    e.shaped('2x kubejs:crude_export_matrix', [
        'H',
        'C'
    ], {
        H: KJ(ciruit_basic),
        C: MC(hopper)
    }).id('skytweaks:crude_export_matrix')

    e.shaped('crude_storage_matrix', [
        'c c',
        'ibx',
        'c c'
    ], {
        c: KJ(ciruit_basic),
        i: KJ(crude_import_matrix),
        b: MC(crafting_table),
        x: KJ(crude_export_matrix)
    })

    //Toms Items
    e.shaped(TS(ts.inventory_connector), [
        ' c ',
        'cmc',
        ' c '
    ], {
        c: TS(ts.inventory_cable_connector),
        m: KJ(crude_storage_matrix)
    })

    e.shaped(TS(ts.storage_terminal), [
        ' i ',
        'chv',
        ' x '
    ], {
        i: KJ(crude_import_matrix),
        c: TS(ts.inventory_cable),
        h: MC(chest),
        v: TS(ts.inventory_cable_connector),
        x: KJ(crude_export_matrix)
    })



    //End Of Recipes
})