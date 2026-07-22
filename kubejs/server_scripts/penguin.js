console.info("[KITCHEN] Penguin script loaded");


ItemEvents.rightClicked("kubejs:gamble_penguin", (event) => {
	// event.server.tell(event.player.username + " flipped a coin");
	console.info("[KITCHEN] penguin clicked");

	const pdata = event.player.persistentData;
	if (!pdata.game) {//first time player
		pdata.game = {};
	}
	if (!pdata.game.penguin) {//no game currently in progress
		const bet = event.player.offHandItem;
		if (!global.VALID_CURRENCY.includes(bet.id)) {
			event.player.tell(Text.red("You must have valid coins in your offhand."));
			return;
		}
		event.player.offHandItem = "minecraft:air";
		pdata.game.penguin = {"bet": bet, "stage": 0};
		event.player.give("kubejs:penguin_controller");
		event.item.count--;
		event.player.tell("Use your penguin on a Microwave to increase its value, but try not to kill it. Use on a bank terminal to cash out.")
	} else {
		//TODO make a way to reset hanging game progress if necessary? idk.
		event.player.tell(Text.red("You already have a game in progress."));
	}
});

const MICROWAVE = ["minecraft:magma_block"];
const CASHOUT = ["numismatics:bank_terminal"];

const stages = [1.5, 1.5, 2, 2, 2];

ItemEvents.rightClicked("kubejs:penguin_controller", (event) => {
	// event.server.tell(event.player.username + " flipped a coin");
	const pdata = event.player.persistentData;
	if (!pdata.game || !pdata.game.penguin) {
		event.player.tell(Text.red("You don't have a game in progress."));
	} else {

		if (event.target.block == "minecraft:magma_block") {
			event.player.tell("Microwave")
		} else if (event.target.block == "numismatics:bank_terminal") {
			event.player.tell("Cashout")
		}
		//then tell the player their current game data
		event.player.tell(pdata.game.penguin); //TODO pretty this
	}
});

BlockEvents.rightClicked("minecraft:magma_block", (event) => {
	if (event.item == "kubejs:penguin_controller") {
		event.cancel()
	}
})

BlockEvents.rightClicked("numismatics:bank_terminal", (event) => {
	if (event.item == "kubejs:penguin_controller") {
		event.player.tell("Sneak while using on the terminal to cash out.")
		event.cancel()
	}
})
