LootJS.lootTables(event => {

	console.info('[KITCHEN] Loading loot tables')
	//weight, min, max
    const TABLES_TO_ADD = {
    	"minecraft:chests/abandoned_mineshaft": [0.1, 2, 3, "numismatics:sprocket"],
    	"minecraft:chests/ancient_city": [0.7, 2, 5],
    	"minecraft:chests/bastion_bridge": [0.5, 1, 1, "numismatics:crown"], //1 per bridge
    	"minecraft:chests/bastion_other": [0.05, 1, 1, "numismatics:crown"],
    	"minecraft:chests/bastion_treasure": [1, 1, 1, "numismatics:crown"], //1 per treasure
    	"minecraft:chests/buried_treasure": [1, 128, 256, "numismatics:spur"],
    	"minecraft:chests/desert_pyramid": [0.3, 1, 2], //4 per
    	"minecraft:chests/end_city_treasure": [0.4, 1, 2], //every chest
    	"minecraft:chests/igloo_chest": [1, 2, 7, "numismatics:bevel"], //1 per
    	"minecraft:chests/jungle_temple": [0.6, 4, 6, "numismatics:sprocket"], //2 per
    	"minecraft:chests/nether_bridge": [0.4, 1, 1],
    	"minecraft:chests/pillager_outpost": [0.5, 3, 5, "numismatics:sprocket"], //1 per. minecolonies hijacks
    	"minecraft:chests/ruined_portal": [0.4, 1, 1],
    	"minecraft:chests/shipwreck_treasure": [1, 128, 256, "numismatics:spur"], //only if wreck has treasure part
    	"minecraft:chests/simple_dungeon": [1, 1, 6, "numismatics:sprocket"],
    	"minecraft:pots/trial_chambers/corridor": [0.3, 1, 2, "numismatics:sprocket"],

    	"betterdeserttemples:chests/tomb_pharaoh": [1, 1, 3],
    	"betterdeserttemples:chests/storage": [0.3, 1, 10, "numismatics:bevel"],
    	"betterdeserttemples:chests/statue": [0.4, 1, 2],

    	"betterfortresses:chests/keep": [0.1, 1, 6, "numismatics:bevel"],
    	"betterfortresses:chests/storage": [0.2, 4, 8, "numismatics:bevel"],
    	"betterfortresses:chests/quarters": [0.4, 4, 8, "numismatics:bevel"],
    	"betterfortresses:chests/worship": [0.4, 4, 8, "numismatics:bevel"],
    	"betterfortresses:chests/puzzle": [1, 6, 8, "numismatics:bevel"],

    	"betterjungletemples:chests/treasure": [1, 2, 4],

    	"betterstrongholds:chests/treasure": [0.5, 4, 10, "numismatics:bevel"],

    	"betteroceanmonuments:chests/upper_side_chamber": [1, 1, 3],
    	"betterwitchhuts:chests/hut_0": [0.3, 2, 6, "numismatics:bevel"],

    	"medievalend:end_castle": [0.1, 2, 6, "numismatics:sprocket"],
    	"medievalend:end_pyramid_chests": [0.4, 1, 2],
    	"medievalend:ship_chests_superiors": [0.2, 1, 3],
    	"medievalend:ship_chests_under_the_stairs": [0.4, 1, 2],

    	"legendary_monsters:chests/space_station_loot_table_basic": [0.2, 2, 5, "numismatics:sprocket"],
    	"legendary_monsters:chests/space_station_loot_table_luxury": [1, 3, 5],
    	"legendary_monsters:chests/ancient_stronghold_loot_table": [0.2, 1, 5, "numismatics:sprocket"],
    	"legendary_monsters:chests/ancient_stronghold_luxury_loot_table": [0.8, 1, 3],
    	"legendary_monsters:chests/collapsed_kingdom_basic_loot_table": [0.2, 1, 5, "numismatics:sprocket"],
    	"legendary_monsters:chests/collapsed_kingdom_luxury_loot_table": [0.8, 1, 3],
    	"legendary_monsters:chests/cloudy_temple_loot_table": [0.15, 1, 1],

    	"artifacts:chests/campsite_barrel": [0.4, 1, 3, "numismatics:sprocket"],


    };

    event.create("lootjs:money_table").createPool(pool => {
    	pool.addEntry(LootEntry.of("numismatics:cog").setCount([1, 3]))
    })

    for (const table in TABLES_TO_ADD) {

    	let d = TABLES_TO_ADD[table]
    	let [chance, min, max, type] = d;

	    event
	        .getLootTable(table).createPool(pool => {
    			pool.addEntry(LootEntry.of(type ? type : "numismatics:cog").setCount([min, max]).randomChance(chance));
    		})


    }
})