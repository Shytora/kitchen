console.info("[KITCHEN] Item registry loaded");

StartupEvents.registry('item', event => {

	event.create("gamble_coinflip").unstackable();
	event.create("gamble_penguin").unstackable();
	event.create("gamble_dragon").unstackable();
	event.create("gamble_roulette").unstackable();

});