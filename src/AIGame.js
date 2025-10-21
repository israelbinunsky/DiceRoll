export async function AIGame(DiceRoll, Hold) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const rolls = Math.floor(Math.random() * 8) + 1;
  let sum = 0;

  for (let i = 0; i < rolls; i++) {
    sum = DiceRoll();
    await sleep(500);
  }

  Hold(sum); // עכשיו sum הוא מספר
}
