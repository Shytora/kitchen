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

	event.recipes.createSequencedAssembly(
		["minecraft:diamond"], 
		"kubejs:molten_coal_chunks", [
			event.recipes.createFilling("kubejs:incomplete_processed_coal", ["kubejs:incomplete_processed_coal", Fluid.of("minecraft:water", 500)]),
			event.recipes.createPressing("kubejs:incomplete_processed_coal", "kubejs:incomplete_processed_coal")
		]).transitionalItem("kubejs:incomplete_processed_coal").loops(16);

	event.recipes.createSequencedAssembly(
		["minecraft:coal"],
		"createnuclear:coal_dust", [
			event.recipes.createFilling("kubejs:incomplete_coal", ["kubejs:incomplete_coal", Fluid.of("minecraft:water", 250)]),
			event.recipes.createPressing("kubejs:incomplete_coal", "kubejs:incomplete_coal")
		]).transitionalItem("kubejs:incomplete_coal").loops(4);

});