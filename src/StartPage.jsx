export default function StartPage({
  setPage,
  target,
  setTarget,
  rightName,
  leftName,
  setLeftName,
  setRightName,
  isAIgame,
  IsAIcurrent,
  setIsAIgame,
  setIsAIcurrent,
}) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dice Roll</h1>

      <div style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="text"
          value={leftName}
          onChange={(e) => setLeftName(e.target.value)}
          placeholder="enter name"
          className="input"
        />
        <input
          type="text"
          value={rightName}
          onChange={(e) => setRightName(e.target.value)}
          placeholder="enter name"
          className="input"
        />
      </div>

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="enter number"
        className="input"
        min="10"
        max="100"
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => {
    if (!leftName.trim() || !rightName.trim() || !target || Number(target) < 10 || Number(target) > 100) {
      alert("invalid parameter");
      return;}
    
    setPage(2);
  }} className="botton1">
          Start
        </button>

        <button
          onClick={() => {
            if (!leftName.trim() || !target || Number(target) < 10 || Number(target) > 100) {
            alert("invalid parameter");
            return;}
            setRightName("AI");
            setIsAIgame(true);
            setIsAIcurrent(false);
            setPage(2);
          }}
          className="botton1"
          style={{ marginLeft: "10px" }}
        >
          Play with AI
        </button>
      </div>
      <img className="Dices-image" src="/pics/dices.png" alt="Dices" />

    </div>
  );
}
