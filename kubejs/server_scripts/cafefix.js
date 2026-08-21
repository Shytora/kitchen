ServerEvents.tags('item', event => {
// syrup tag fixes (these don't work)
event.add('neoforge:fruits/banana', 'tropicraft:green_plantain')
event.add('neoforge:fruits/banana', 'tropicraft:yellow_plantain')

event.add('neoforge:crops/coconut', 'beachparty:coconut_open')
event.add('neoforge:crops/coconut', 'tropicraft:coconut_chunk')
event.add('neoforge:crops/coconut', 'crabbersdelight:coconut_halve')

event.add('neoforge:fruits/raspberry', 'berries_and_cherries:raspberry')

event.add('neoforge:fruits/strawberry', 'berries_and_cherries:strawberry')

event.add('neoforge:fruits/vanillabean', 'kubejs:vanilla_bean')

// milk tea tag fixes

event.add('c:foods/mango', 'fruitsdelight:mango')
event.add('c:foods/kiwi', 'fruitsdelight:kiwi')
event.add('c:foods/strawberry', 'berries_and_cherries:strawberry_chunks')
event.add('c:foods/blueberry', 'berries_and_cherries:blueberry')
event.add('c:foods/blueberry', 'fruitsdelight:blueberry')
event.add('c:foods/pineapple', 'fruitsdelight:pineapple_slice')
event.add('c:foods/pineapple', 'tropicraft:pineapple_cubes')
event.add('c:foods/banana', 'tropicraft:green_plantain')
event.add('c:foods/banana', 'tropicraft:yellow_plantain')
event.add('c:foods/cherry', 'berries_and_cherries:cherry_chunks')
event.add('c:foods/coconut', 'beachparty:coconut_open')
event.add('c:foods/coconut', 'tropicraft:coconut_chunk')
event.add('c:foods/durian', 'fruitsdelight:durian_flesh')
event.add('c:foods/fig', 'fruitsdelight:fig')
event.add('c:foods/grape', 'create_winery:red_grapes')
event.add('c:foods/grape', 'create_winery:white_grapes')
event.add('c:foods/grape', 'cocktailsdelight:red_grapes')
event.add('c:foods/grape', 'cocktailsdelight:white_grapes')
event.add('c:foods/grape', 'berries_and_cherries:grape_chunks')
event.add('c:foods/grape', 'berries_and_cherries:grape_chunks_dark')
event.add('c:foods/grapefruit', 'tropicraft:grapefruit')
event.add('c:foods/grapefruit', 'extradelight:grapefruit')
event.add('c:foods/papaya', 'tropicraft:papaya')
event.add('c:foods/passionfruit', 'tropicraft:passionfruit')
event.add('c:foods/persimmon', 'fruitsdelight:persimmon')
event.add('c:foods/raspberry', 'berries_and_cherries:raspberry_chunks')

// a bonus add to fix espresso martini from cocktails delight

event.add('c:coffee_beans', 'createcafe:coffee_beans')
event.add('c:coffee_beans', 'extradelight:coffeebeans')
event.add('c:coffee_beans', 'froottrees:roasted_coffee_bean')

});
 // make blood tag
ServerEvents.tags('fluid', event => {
event.add('c:blood', 'butchery:blood')
event.add('c:blood', 'neovitae:essentia_vitae_source')
});


// time to hide stuff that doesn't exist

//remove items
RecipeViewerEvents.removeEntries('item', event => {
event.remove("createcafe:yucca_tea_bucket");
event.remove("createcafe:yucca_milk_tea");
event.remove("createcafe:aloe_tea_bucket");
event.remove("createcafe:aloe_milk_tea");
event.remove("createcafe:blackberry_tea_bucket");
event.remove("createcafe:blackberry_milk_tea");
event.remove("createcafe:jackfruit_tea_bucket");
event.remove("createcafe:jackfruit_milk_tea");
event.remove("createcafe:dragonfruit_tea_bucket");
event.remove("createcafe:dragonfruit_milk_tea");
event.remove("createcafe:apricot_tea_bucket");
event.remove("createcafe:apricot_milk_tea");
event.remove("createcafe:avocado_tea_bucket");
event.remove("createcafe:avocado_milk_tea");
event.remove("createcafe:tamarind_tea_bucket");
event.remove("createcafe:tamarind_milk_tea");
event.remove("createcafe:gooseberry_tea_bucket");
event.remove("createcafe:gooseberry_milk_tea");
event.remove("createcafe:guava_tea_bucket");
event.remove("createcafe:guava_milk_tea");
event.remove("createcafe:starfruit_tea_bucket");
event.remove("createcafe:starfruit_milk_tea");
event.remove("createcafe:lavender_tea_bucket");
event.remove("createcafe:lavender_milk_tea");
event.remove("createcafe:pomelo_tea_bucket");
event.remove("createcafe:pomelo_milk_tea");
event.remove("createcafe:mandarin_tea_bucket");
event.remove("createcafe:mandarin_milk_tea");
event.remove("createcafe:citron_tea_bucket");
event.remove("createcafe:citron_milk_tea");
event.remove("createcafe:redlove_tea_bucket");
event.remove("createcafe:redlove_milk_tea");
event.remove("createcafe:barberry_tea_bucket");
event.remove("createcafe:barberry_milk_tea");
});

//remove fluids
RecipeViewerEvents.removeEntries('fluid', event => {
event.remove("createcafe:yucca_tea");
event.remove("createcafe:aloe_tea");
event.remove("createcafe:blackberry_tea");
event.remove("createcafe:jackfruit_tea");
event.remove("createcafe:dragonfruit_tea");
event.remove("createcafe:apricot_tea");
event.remove("createcafe:avocado_tea");
event.remove("createcafe:tamarind_tea");
event.remove("createcafe:gooseberry_tea");
event.remove("createcafe:guava_tea");
event.remove("createcafe:starfruit_tea");
event.remove("createcafe:lavender_tea");
event.remove("createcafe:pomelo_tea");
event.remove("createcafe:mandarin_tea");
event.remove("createcafe:citron_tea");
event.remove("createcafe:redlove_tea");
event.remove("createcafe:barberry_tea");
});




ServerEvents.recipes(event => {
	// syrup fixes
	event.recipes.createMixing
	(
		Fluid.of('createcafe:strawberry_syrup', 1000),
	[
		"berries_and_cherries:strawberry_chunks",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]
	).heated();
	
	event.recipes.createMixing
	(
		Fluid.of('createcafe:vanilla_syrup', 1000),
	[
		"kubejs:vanilla_beans",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]).heated();
	
	event.recipes.createMixing
	(
		Fluid.of('createcafe:raspberry_syrup', 1000),
	[
		"berries_and_cherries:raspberry_chunks",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]
	).heated();
	
	event.recipes.createMixing
	(
		Fluid.of('createcafe:mint_syrup', 1000),
	[
		"extradelight:mint",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]
	).heated();

	event.recipes.createMixing
	(
		Fluid.of('createcafe:coconut_syrup', 1000),
	[
		["crabbersdelight:coconut_halve", "beachparty:coconut_open", "tropicraft:coconut_chunk"],
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]
	).heated();

	event.recipes.createMixing
	(
		Fluid.of('createcafe:banana_syrup', 1000),
	[
		["tropicraft:green_plantain","tropicraft:yellow_plantain"],
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 750)
	]
	).heated();
	// vanilla bean crafting
	event.recipes.createMixing
	(
		[Fluid.of("create_dragons_plus:white_dye", 1000), "kubejs:vanilla_beans"],
	[
		"minecraft:cocoa_beans",
		Fluid.of("create_dragons_plus:white_dye", 1000)
	]
	);
	
	// a brief intermission for other stuff
	
	event.recipes.createFilling
	(
		"createcafe:mana_berries", 
	[
		"minecraft:sweet_berries", 
		Fluid.ingredientOf("#c:experience").withAmount(50)
	]
	);
	
	event.recipes.createFilling
	(
		"froottrees:orange_sapling", 
	[
		["tropicraft:orange_sapling","fruitsdelight:orange_sapling","extradelight:orange_sapling"], 
		Fluid.ingredientOf("#c:blood").withAmount(1000)
	]
	);
	
	event.recipes.createFilling
	(
		"createcafe:blood_orange", 
	[
		["tropicraft:orange","fruitsdelight:orange","extradelight:orange"], 
		Fluid.ingredientOf("#c:blood").withAmount(100)
	]
	);
	
	event.recipes.createCutting
	(
		CreateItem.of("4x tropicraft:pineapple_cubes"),
	[ 
		"tropicraft:pineapple"
	]
	);

// dude froottrees what are we doing? why can't you cook these beans by default wtf
		event.smoking(
			"froottrees:roasted_coffee_bean",  // output
			"froottrees:raw_coffee_bean"      // input
		);
	
	
	// tea time
	//used to require blood magic
	event.recipes.createMixing
	(
		Fluid.of('createcafe:blood_tea', 500),
	[
		["createcafe:blood_orange", "froottrees:orange"],
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 250)
	]
	).heated();
	
	//used to require botania
	event.recipes.createMixing
	(
		Fluid.of('createcafe:mana_tea', 500),
	[
		"createcafe:mana_berries",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 250)
	]
	).heated();
	//i made this one with my own silly little hands
	event.recipes.createMixing
	(
		Fluid.of('createcafe:vanilla_tea', 500),
	[
		"kubejs:vanilla_beans",
		Fluid.of("minecraft:water", 250),
		Fluid.of("createcafe:melted_sugar", 250)
	]
	).heated();

});