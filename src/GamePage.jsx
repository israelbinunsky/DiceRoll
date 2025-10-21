export default function GamePage({
  LeftCorrentNumber, RightCorrentNumber,
  LeftTotal, RightTotal,
  LeftColor, RightColor,
  currentImage1, currentImage2,
  target,
  DiceRoll, Hold,
  CurrentPlayer,
  showPopup, Winner, closePopup,
  setPage, rightName, leftName, setLeftName, setRightName,
  leftVictories, rightVictories
}) {
    return (
        <>
    
    <div className="horizontal-page-2">
      <div className="left">
          <div className="info-box"
          style={{ backgroundColor: RightColor }}>
              <h2>{leftName} <br /> {LeftCorrentNumber} </h2>
          </div>
          <h1>{LeftTotal}</h1>
          <h2 style={{color: "white"}}>Total Victories: <br /> {leftVictories}</h2>
      </div>

      <div className = "center-page-2">

      <img
        src={currentImage1.src}
        alt="image1"
      />
      <img
        src={currentImage2.src}
        alt="image2"
      />

      <h2 style={{color: "white"}}>target: <br /> {target}</h2>

      <button
        onClick={DiceRoll}
        className="botton1"
      >
        Dice Roll
      </button>

      <button
        onClick={Hold}
        className="botton1"
      >
        Hold
      </button>

      <button
        onClick={() => setPage(1)}
        className="botton1"
      >
        New Game
      </button>
    </div>


      <div className="right">
          <div className="info-box"
          style={{ backgroundColor: LeftColor }}>
              <h2>{rightName} <br /> {RightCorrentNumber} </h2>
          </div>
          <h1>{RightTotal}</h1>
          <h2 style={{color: "white"}}>Total Victories: <br /> {rightVictories}</h2>
      </div>
    </div>

    {showPopup && (
      <div className="popup-overlay">
        <div className="popup">
          <h1 className="h1-popup">{Winner}</h1>
          <h2>is the Winner!</h2>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    )}

    </>
    )
}