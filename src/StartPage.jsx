export default function StartPage({ setPage, target, setTarget, rightName, leftName, setLeftName, setRightName, }) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>

        <h1>Dice Roll</h1>

        <div style={{display: "block"}}>
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

        <button
          onClick={() => setPage(2)}
          className="botton1"
        >
          start
        </button>
      </div>
    );
}