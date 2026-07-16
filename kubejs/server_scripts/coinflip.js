console.info("[KITCHEN] Coinflip script loaded");

ItemEvents.rightClicked("gamble_coinflip", (event) => {
	server.tell(event.player.username + " flipped a coin")
})