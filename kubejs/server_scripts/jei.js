RecipeViewerEvents.addInformation('item', event => {

	const MM_ORES = [
		"mythicmetals:adamantite_ore", "mythicmetals:deepslate_adamantite_ore",
		"mythicmetals:aquarium_ore",
		"mythicmetals:banglum_ore", "mythicmetals:nether_banglum_ore",
		"mythicmetals:carmot_ore", "mythicmetals:deepslate_carmot_ore",
		"mythicmetals:kyber_ore", "mythicmetals:calcite_kyber_ore",
		"mythicmetals:manganese_ore",
		"mythicmetals:morkite_ore", "mythicmetals:deepslate_morkite_ore",
		"mythicmetals:midas_gold_ore",
		"mythicmetals:mythril_ore", "mythicmetals:deepslate_mythril_ore",
		"mythicmetals:orichalcum_ore", "mythicmetals:deepslate_orichalcum_ore",
		"mythicmetals:tuff_orichalcum_ore","mythicmetals:smooth_basalt_orichalcum_ore",
		"mythicmetals:osmium_ore",
		"mythicmetals:palladium_ore",
		"mythicmetals:platinum_ore",
		"mythicmetals:prometheum_ore", "mythicmetals:deepslate_prometheum_ore",
		"mythicmetals:quadrillum_ore",
		"mythicmetals:runite_ore", "mythicmetals:deepslate_runite_ore",
		"mythicmetals:silver_ore",
		"mythicmetals:starrite_ore","mythicmetals:calcite_starrite_ore","mythicmetals:end_stone_starrite_ore",
		"mythicmetals:stormyx_ore","mythicmetals:blackstone_stormyx_ore",
		"mythicmetals:tin_ore",
		"mythicmetals:unobtainium_ore", "mythicmetals:deepslate_unobtainium_ore",
	];
	MM_ORES.forEach(e => {
		event.add(e, [
		"Check the quest book's Exploration section for information on how to find this ore!"
	])
	})
	
})

RecipeViewerEvents.removeEntries('item', event => {
	const TO_REMOVE = ["advanced_ae:quantum_helmet", "advanced_ae:quantum_chestplate", 
		"advanced_ae:quantum_leggings", "advanced_ae:quantum_boots",
		"advanced_ae:quantum_upgrade_base",
		"advanced_ae:walk_speed_card", "advanced_ae:sprint_speed_card", 
		"advanced_ae:step_assist_card", "advanced_ae:jump_height_card",
		"advanced_ae:lava_immunity_card", "advanced_ae:flight_card",
		"advanced_ae:water_breathing_card", "advanced_ae:auto_feeding_card",
		"advanced_ae:auto_stock_card", "advanced_ae:magnet_card",
		"advanced_ae:hp_buffer_card", "advanced_ae:evasion_card", 
		"advanced_ae:regeneration_card", "advanced_ae:strength_card",
		"advanced_ae:attack_speed_card", "advanced_ae:luck_card",
		"advanced_ae:reach_card", "advanced_ae:swim_speed_card",
		"advanced_ae:night_vision_card", "advanced_ae:flight_drift_card",
		"advanced_ae:recharging_card", "advanced_ae:portable_workbench_card",
		"advanced_ae:pick_craft_card", "advanced_ae:camo_card",
		"enchanted:enchanted_broomstick", "enchanted:flying_ointment", 
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
	];

	TO_REMOVE.forEach(e => {
		event.remove(e);
	});
})