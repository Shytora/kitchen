console.info("[KITCHEN] Item registry loaded");

StartupEvents.registry('item', event => {

	event.create("gamble_coinflip").unstackable();

});