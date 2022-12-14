console.info('Toms Storage Recipes Found.')

onEvent('recipes', e => {
    //Remove Stuff
    e.remove({mod: 'toms_storage'})
    e.remove({output: 'toms_storage:ts.open_crate'})
    e.remove({output: 'toms_storage:ts.inventory_proxy' })

    //Internal Items
    e.shaped('2x kubejs:crude_import_matrix', [
        'H',
        'C'
    ], {
        H: MC('hopper'),
        C: KJ('circuit_basic')
    }).id('skytweaks:crude_import_matrix')

    e.shaped('2x kubejs:crude_export_matrix', [
        'H',
        'C'
    ], {
        H: KJ('circuit_basic'),
        C: MC('hopper')
    }).id('skytweaks:crude_export_matrix')

    e.shaped(KJ('crude_storage_matrix'), [
        'c c',
        'ibx',
        'c c'
    ], {
        c: KJ('circuit_basic'),
        i: KJ('crude_import_matrix'),
        b: MC('crafting_table'),
        x: KJ('crude_export_matrix')
    })

    //Toms Items
    e.shaped(TS('ts.inventory_connector'), [
        ' c ',
        'cmc',
        ' c '
    ], {
        c: TS('ts.inventory_cable_connector'),
        m: KJ('crude_storage_matrix')
    })

    e.shaped(TS('ts.storage_terminal'), [
        ' i ',
        'chv',
        ' x '
    ], {
        i: KJ('crude_import_matrix'),
        c: TS('ts.inventory_cable'),
        h: MC('chest'),
        v: TS('ts.inventory_cable_connector'),
        x: KJ('crude_export_matrix')
    })

    e.shaped(TS('ts.trim'), [
        'c'
    ], {
        c: TS('ts.inventory_cable_connector')
    })

    e.shaped(TS('ts.inventory_cable'), [
        'a a',
        'hbh',
        'a a'
    ], {
        b: CR('belt_connector'),
        h: MC('hopper'),
        a: CR('andesite_alloy'),
    })

    e.shaped(TS('ts.inventory_cable_connector'),[
        'cip'
    ], {
        c: TS('ts.inventory_cable'),
        i: KJ('crude_storage_matrix'),
        p: MC('#wooden_pressure_plates')
    })

    e.shapeless(TS('ts.inventory_cable_connector_filtered'), [
        TS('ts.inventory_cable_connector'), CR('filter')
    ])

    e.shapeless(TS('ts.inventory_cable_connector_filtered'), [
        TS('ts.inventory_cable_connector'), BM('itemrouterfilterexact')
    ])

    e.shapeless(TS('ts.inventory_cable_framed'), [
        FB('framed_cube'), TS('ts.inventory_cable')
    ])

    e.shapeless(TS('ts.inventory_cable_connector_framed'), [
        TS('ts.inventory_cable_connector_framed'), FB('framed_cube')
    ])

    e.shaped(TS('ts.crafting_terminal'),[
        ' c ',
        'itx',
        ' b '
    ],{
        c: MC('crafting_table'),
        i: KJ('crude_import_matrix'),
        t: TS('ts.storage_terminal'),
        x: KJ('crude_export_matrix'),
        b: KJ('circuit_basic')
    })

    e.shaped(TS('ts.inventory_hopper_basic'),[
        'icx'
    ],{
        i: KJ('crude_import_matrix'),
        c: MC('crafting_table'),
        x: KJ('crude_export_matrix')
    })

    e.shaped(TS('ts.level_emitter'),[
        't ',
        'cs'
    ],{
        t: MC('redstone_torch'),
        c: TS('ts.inventory_cable'),
        s: KJ('crude_storage_interface')
    })

    e.shaped(KJ('crude_storage_interface'), [
        'c c',
        'ibx',
        'c c'
    ],{
        c: KJ('circuit_basic'),
        i: KJ('crude_import_matrix'),
        b: MC('crafting_table'),
        x: KJ('crude_export_matrix')
    })

    e.shaped(KJ('crude_storage_matrix'),[
        'bcb',
        'cic',
        'bcb'
    ],{
        b: KJ('circuit_basic'),
        c: F('#chests'),
        i: KJ('crude_storage_interface')
    })

    e.shaped(TS('ts.wireless_terminal'), [
        ' p ',
        'cib',
        ' p '
    ], {
        p: BT('mana_pearl'),
        c: MC('chest'),
        i: KJ('crude_storage_interface'),
        b: MC('crafting_table')
    })

    e.shaped(TS('ts.adv_wireless_terminal'), [
        'epo',
        'pwp',
        'ope'
    ], {
        e: KJ('circuit_enhanced'),
        p: BT('mana_pearl'),
        o: KJ('circuit_overclocked'),
        w: TS('ts.wireless_terminal')
    })


    //End Of Recipes
})