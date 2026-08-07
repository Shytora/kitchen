console.info("[KITCHEN] Item registry loaded");

StartupEvents.registry('item', event => {

	event.create("gamble_coinflip").unstackable();
	event.create("gamble_penguin").unstackable();
	event.create("gamble_dragon").unstackable();
	event.create("gamble_roulette").unstackable();

	event.create("penguin_controller").unstackable()
		.tooltip("Use on a MICROWAVE to continue gambling")
		.tooltip("Sneak + Use on BANK TERMINAL to cash out")
		.tooltip("Use on air to get info")
		.texture("kubejs:item/penguin");

});