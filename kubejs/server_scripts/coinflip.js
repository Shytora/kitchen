console.info("[KITCHEN] Coinflip script loaded");



const coinflip = (server, player) => {
	const bet = player.offHandItem;

	if (!global.VALID_CURRENCY.includes(bet.id)) {
		player.tell(Text.red("You must have valid coins in your offhand."));
		return false;
	}

	player.offHandItem = "minecraft:air";

	server.tell(player.username + " flipped a coin...");

	server.scheduleInTicks(20*3, () => {
		const random = Math.random();
		if (random > 0.5) {
			server.tell("and won!");
			const win = bet;
			win.count = bet.count * 2;
			player.give(Item.of(win));
		} else {
			server.tell("and lost.");
		}
	})

	return true;

};


ItemEvents.rightClicked("kubejs:gamble_coinflip", (event) => {
	// event.server.tell(event.player.username + " flipped a coin");
	console.info("[KITCHEN] coin clicked");

	const success = coinflip(event.server, event.player);
	if (success) {
		event.item.count--;
	}
});