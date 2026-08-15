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

	event.recipes.createSplashing(
		[CreateItem.of("9x mythicmetals:silver_nugget"), CreateItem.of("create:experience_nugget", 0.5)], "create:crushed_raw_silver");
	//Remove Quantum armor and stuff

	event.remove({output: "advanced_ae:quantum_helmet"});
	event.remove({output: "advanced_ae:quantum_chestplate"});
	event.remove({output: "advanced_ae:quantum_leggings"});
	event.remove({output: "advanced_ae:quantum_boots"});
	event.remove({input: "advanced_ae:quantum_upgrade_base"});

	//remove apothic flight pot

	// event.remove({id:"minecraft:item.minecraft.potion.effect_id.apothic_attributes.levitation.to.item.minecraft.potion.effect_id.apothic_attributes.flying"});

	// event.remove({output:"minecraft:potion", input:"minecraft:popped_chorus_fruit"});

	event.remove({output: "enchanted:enchanted_broomstick"});
	event.remove({output: "enchanted:flying_ointment"});

	const PNEUMATIC_REMOVE = [
		"pneumaticcraft:pneumatic_boots",
		"pneumaticcraft:pneumatic_chestplate",
		"pneumaticcraft:pneumatic_helmet",
		"pneumaticcraft:pneumatic_leggings",
		"pneumaticcraft:air_conditioning_upgrade",
		"pneumaticcraft:coordinate_tracker_upgrade",
		"pneumaticcraft:elytra_upgrade",
		"pneumaticcraft:ender_visor_upgrade",
		"pneumaticcraft:flippers_upgrade",
		"pneumaticcraft:gilded_upgrade",
		"pneumaticcraft:search_upgrade",
		"pneumaticcraft:jet_boots_upgrade_3",
		"pneumaticcraft:jet_boots_upgrade_2",
		"pneumaticcraft:jet_boots_upgrade_4",
		"pneumaticcraft:jet_boots_upgrade_1",
		"pneumaticcraft:jet_boots_upgrade_5",
		"pneumaticcraft:jumping_upgrade_3",
		"pneumaticcraft:jumping_upgrade_2",
		"pneumaticcraft:jumping_upgrade_4",
		"pneumaticcraft:jumping_upgrade_1",
		"pneumaticcraft:night_vision_upgrade",
		"pneumaticcraft:radiation_shielding_upgrade",
		"pneumaticcraft:scuba_upgrade",
		"pneumaticcraft:stomp_upgrade"
	]

	PNEUMATIC_REMOVE.forEach((e) => {
		event.remove({output: e})
	});

});