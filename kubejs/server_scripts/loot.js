LootJS.lootTables(event => {
	//weight, min, max
    const TABLES_TO_ADD = {
    	"minecraft:chests/ancient_city": [3, 1, 4],
    	"minecraft:chests/bastion_bridge": [1, 1, 1],

    };

    for (const table in TABLES_TO_ADD) {

    	let d = TABLES_TO_ADD[table]
    	let [weight, min, max] = d;

    	event
	        .getLootTable(table)
	        .firstPool()
	        .addEntry(LootEntry.of("numismatics:cog").withWeight(weight).setCount([min, max]))
    }
})