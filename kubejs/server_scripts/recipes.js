ServerEvents.recipes(event => {

	console.info('[KITCHEN] Loading recipes')

	event.recipes.createCrushing([
		"kubejs:crushed_coal_chunks",
		CreateItem.of("createnuclear:coal_dust", 0.1)
	], "minecraft:coal_block");

	event.recipes.createMixing("kubejs:molten_coal_chunks", [
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		Fluid.of("minecraft:lava", 1000)
	]);

	event.recipes.createMixing("kubejs:molten_coal_chunks", [
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks",
		"kubejs:crushed_coal_chunks"
	]).superheated();

	event.recipes.createSequencedAssembly(
		["minecraft:diamond"], 
		"kubejs:molten_coal_chunks", [
			event.recipes.createFilling("kubejs:incomplete_processed_coal", ["kubejs:incomplete_processed_coal", Fluid.of("minecraft:water", 500)]),
			event.recipes.createPressing("kubejs:incomplete_processed_coal", "kubejs:incomplete_processed_coal"),
			event.recipes.createPressing("kubejs:incomplete_processed_coal", "kubejs:incomplete_processed_coal"),
			event.recipes.createPressing("kubejs:incomplete_processed_coal", "kubejs:incomplete_processed_coal"),
			event.recipes.createPressing("kubejs:incomplete_processed_coal", "kubejs:incomplete_processed_coal")
		]).transitionalItem("kubejs:incomplete_processed_coal").loops(4);

	event.recipes.createSequencedAssembly(
		["minecraft:coal"],
		"createnuclear:coal_dust", [
			event.recipes.createFilling("kubejs:incomplete_coal", ["kubejs:incomplete_coal", Fluid.of("minecraft:water", 250)]),
			event.recipes.createPressing("kubejs:incomplete_coal", "kubejs:incomplete_coal")
		]).transitionalItem("kubejs:incomplete_coal").loops(4);

	//Remove Quantum armor and stuff

	event.remove({output: "advanced_ae:quantum_helmet"});
	event.remove({output: "advanced_ae:quantum_chestplate"});
	event.remove({output: "advanced_ae:quantum_leggings"});
	event.remove({output: "advanced_ae:quantum_boots"});
	event.remove({input: "advanced_ae:quantum_upgrade_base"});

	//remove apothic flight pot

	// event.remove({id:"minecraft:item.minecraft.potion.effect_id.apothic_attributes.levitation.to.item.minecraft.potion.effect_id.apothic_attributes.flying"});

	// event.remove({output:"minecraft:potion", input:"minecraft:popped_chorus_fruit"});

});