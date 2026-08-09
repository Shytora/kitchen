LootJS.lootTables(event => {

	console.info('[KITCHEN] Loading loot tables')
	//weight, min, max
    const TABLES_TO_ADD = {
    	"minecraft:chests/ancient_city": [0.5, 1, 4],
    	"minecraft:chests/bastion_bridge": [0.25, 1, 1, "numismatics:crown"], //1 per bridge
    	"minecraft:chests/bastion_other": [0.05, 1, 1, "numismatics:crown"],
    	"minecraft:chests/bastion_treasure": [0.75, 1, 1, "numismatics:crown"], //1 per treasure
    	"minecraft:chests/buried_treasure": [1, 64, 128, "numismatics:spur"],
    	"minecraft:chests/desert_pyramid": [0.3, 1, 2], //4 per
    	"minecraft:chests/end_city_treasure": [0.2, 1, 3], //every chest
    	"minecraft:chests/igloo_chest": [1, 2, 7, "numismatics:bevel"], //1 per
    	"minecraft:chests/jungle_temple": [0.6, 4, 6, "numismatics:sprocket"], //2 per
    	"minecraft:chests/nether_bridge": [0.4, 1, 1],
    	"minecraft:chests/pillager_outpost": [1, 2, 4], //1 per
    	"minecraft:chests/ruined_portal": [0.2, 1, 1],
    	"minecraft:chests/shipwreck_treasure": [1, 1, 2], //only if wreck has treasure part
    	"minecraft:chests/simple_dungeon": [1, 1, 6, "numismatics:sprocket"],
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