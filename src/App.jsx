import { useState, useEffect } from "react";
import "./index.css";
import StartPage from "./StartPage";
import GamePage from "./GamePage";

function App() {
  const [page, setPage] = useState(1);  
  const [target, setTarget] = useState(80);

  const [leftName, setLeftName] = useState("Player 1");
  const [rightName, setRightName] = useState("Player 2");
  const images = [
    { src: "/pics/dice-1.png", value: 1 },
    { src: "/pics/dice-2.png", value: 2 },
    { src: "/pics/dice-3.png", value: 3 },
    { src: "/pics/dice-4.png", value: 4 },
    { src: "/pics/dice-5.png", value: 5 },
    { src: "/pics/dice-6.png", value: 6 },
  ];

  const [isAIgame, setIsAIgame] = useState(false)

  const [currentImage1, setCurrentImage1] = useState(images[0]);
  const [currentImage2, setCurrentImage2] = useState(images[0]);

  const [LeftCorrentNumber, setLeftCorrent] = useState(0);
  const [RightCorrentNumber, setRightCorrent] = useState(0);

  const [LeftTotal, setLeftTotal] = useState(0);
  const [RightTotal, setRightTotal] = useState(0);

 const [leftVictories, setLeftVictories] = useState(0);
const [rightVictories, setRightVictories] = useState(0);

useEffect(() => {
  const savedLeft = localStorage.getItem("leftVictories");
  if (savedLeft) setLeftVictories(parseInt(savedLeft));
}, []);
useEffect(() => {
  localStorage.setItem("leftVictories", leftVictories);
}, [leftVictories]);
useEffect(() => {
  const savedRight = localStorage.getItem("rightVictories");
  if (savedRight) setRightVictories(parseInt(savedRight));
}, []);
useEffect(() => {
  localStorage.setItem("rightVictories", rightVictories);
}, [rightVictories]);


  const [CurrentPlayer, setPlayer] = useState("left");

  const [LeftColor, setLeftColor] = useState("rgba(255, 255, 255, 0.5)");
  const [RightColor, setRightColor] = useState("white");

  const [Winner, setWinner] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  function openPopup() {
  setShowPopup(true);
}
function closePopup() {
  setShowPopup(false);
}


  function resetTotal(){
    setRightTotal(0)
    setLeftTotal(0)
  }


  function winning(){
  openPopup();
  setLeftCorrent(0);
  setRightCorrent(0);
  resetTotal();
}


  function DiceRoll(Player) {
    const randomIndex1 = Math.floor(Math.random() * images.length);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    setCurrentImage1(images[randomIndex1]);
    setCurrentImage2(images[randomIndex2]);
    if (images[randomIndex1].value + images[randomIndex2].value === 12) {
      resetCurrent()
    }
    else {
      if (Player === "left") { 
        setLeftCorrent(prevSum => prevSum + images[randomIndex1].value + images[randomIndex2].value);
      }
      else {
          setRightCorrent(prevSum => prevSum + images[randomIndex1].value + images[randomIndex2].value);
      }
    }
  }

  function ChangePlayer() {
    if (CurrentPlayer === "left") {
      setPlayer("right")
      setLeftColor("white")
      setRightColor("rgba(255, 255, 255, 0.5)")
    }
    else {
      setPlayer("left")
      setLeftColor("rgba(255, 255, 255, 0.5)")
      setRightColor("white")
      
    }
  }


function setTotal(Player) {
  if (Player === "left") {
    setLeftTotal(prevTotal => {
      const newTotal = prevTotal + LeftCorrentNumber;
      if (newTotal === Number(target)) {
        setWinner(leftName);
        winning();
        setLeftVictories(leftVictories + 1);
      } else if (newTotal > Number(target)) {
        setWinner(rightName);
        winning();
        setRightVictories(rightVictories + 1);
      }
      return newTotal;
    });} 
  else {
    setRightTotal(prevTotal => {
      const newTotal = prevTotal + RightCorrentNumber;

      if (newTotal === Number(target)) {
        setWinner(rightName);
        winning();
        setRightVictories(rightVictories + 1);
      } else if (newTotal > Number(target)) {
        setWinner(leftName);
        winning();
        setLeftVictories(leftVictories + 1);
      }
      return newTotal;
    });
  }
}

async function Hold() {
  if (CurrentPlayer === "left") {
    setTotal("left");
    ChangePlayer();
    if (isAIgame) {
    await playAIGame();
  }}
  else {
    setTotal("right");
    ChangePlayer();}
}

async function playAIGame() {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const rolls = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < rolls; i++) {
    DiceRoll("right");
    await sleep(500);
  }
    setTotal("right");
    ChangePlayer();
  }

  if (page === 1) {
  return (
    <StartPage 
      target={target} 
      setTarget={setTarget} 
      setPage={setPage} 
      rightName={rightName}
      leftName={leftName}
      setLeftName={setLeftName}
      setRightName={setRightName}
      isAIgame={isAIgame}
      setIsAIgame={setIsAIgame}
    />
  );
} else if (page === 2) {
  return (
    <GamePage
      images={images}
      currentImage1={currentImage1}
      currentImage2={currentImage2}
      LeftCorrentNumber={LeftCorrentNumber}
      RightCorrentNumber={RightCorrentNumber}
      LeftTotal={LeftTotal}
      RightTotal={RightTotal}
      CurrentPlayer={CurrentPlayer}
      LeftColor={LeftColor}
      RightColor={RightColor}
      Winner={Winner}
      showPopup={showPopup}
      DiceRoll={DiceRoll}
      Hold={Hold}
      closePopup={closePopup}
      setPage={setPage}
      target={target}
      rightName={rightName}
      leftName={leftName}
      setLeftName={setLeftName}
      setRightName={setRightName}
      leftVictories={leftVictories}
      rightVictories={rightVictories}
    />
  );
}
}

export default App;