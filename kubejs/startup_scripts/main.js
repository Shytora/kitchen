// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

Platform.mods.kubejs.name = "Kitchen";

//valid currency to gamble with (brass dollar and up)
global.VALID_CURRENCY = [
	"numismatics:cog",
	"numismatics:crown",
	"numismatics:sun"
];

// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


//from Society globalserver.js
global.calculateCoinValue = (coin) => {
  let value = 0;
  switch (String(coin.id).path) {
    case "spur":
      value = 1;
      break;
    case "bevel":
      value = 8;
      break;
    case "sprocket":
      value = 16;
      break;
    case "cog":
      value = 64;
      break;
    case "crown":
      value = 512;
      break;
    case "sun":
      value = 4096;
      break;
    case "neptunium_coin":
      value = 32768;
      break;
    case "ancient_coin":
      value = 262144;
      break;
    case "prismatic_coin":
      value = 16777216;
      break;
    default:
      console.log(`Invalid coin`);
  }
  return value * coin.count;
};

global.formatPrice = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

global.updateStats = (pdata, amt, stat) => {
    console.info("[KITCHEN] amt" + amt);
    if (!pdata.getInt("win")) {
        pdata.putInt("win", 0)
    }
    if (!pdata.getInt("loss")) {
        pdata.putInt("loss", 0)
    }
    if (!pdata.getInt("largestWin")) {
        pdata.putInt("largestWin", 0)
    }
    if (stat === "win") {
        pdata.putInt("win", pdata.getInt("win") + amt);
    } else if (stat === "loss") {
        pdata.putInt("loss", pdata.getInt("loss") + amt);
    } else if (stat === "largestWin") {
        pdata.putInt("largestWin", Math.max(pdata.getInt("largestWin"), amt));
    } else {
        console.error("[KITCHEN] stat update failed: what is " + stat);
    }
}