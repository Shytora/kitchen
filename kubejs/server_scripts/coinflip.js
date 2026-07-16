console.info("[KITCHEN] Coinflip script loaded");

ItemEvents.rightClicked("kubejs:gamble_coinflip", (event) => {
	event.server.tell(event.player.username + " flipped a coin");
	console.info("[KITCHEN] coin clicked");
});