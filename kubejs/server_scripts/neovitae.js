ServerEvents.recipes(event => {
	// remove recipes
	event.remove({output: "neovitae:reagent_air"});
	event.remove({output: "neovitae:sigil_air"});
	event.remove({output: "neovitae:teleposer_focus"});
	event.remove({output: "neovitae:enhanced_teleposer_focus"});
	event.remove({output: "neovitae:reinforced_teleposer_focus"});
	event.remove({output: "neovitae:teleposer"});

});

RecipeViewerEvents.removeEntriesCompletely('item', event => {
	// remove entries from jei
	event.remove("neovitae:reagent_air");
	event.remove("neovitae:sigil_air");
	event.remove("neovitae:teleposer_focus");
	event.remove("neovitae:enhanced_teleposer_focus");
	event.remove("neovitae:reinforced_teleposer_focus");
	event.remove("neovitae:teleposer");
	
});

