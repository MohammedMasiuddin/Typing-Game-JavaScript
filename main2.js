console.log("hello");

let arr = [
  "witherers",
  "withering",
  "witheringly",
  "witherings",
  "witherite",
  "witherites",
  "witherod",
  "witherods",
  "withers",
  "withershins",
  "withes",
  "withhault",
  "withheld",
  "withhold",
  "withholden",
  "withholder",
  "withholders",
  "withholding",
  "withholdment",
  "withholdments",
  "withholds",
  "withier",
  "withies",
  "withiest",
  "within",
  "withindoors",
  "withing",
  "withins",
  "without",
  "withoutdoors",
  "withouten",
  "withouts",
  "withs",
  "withstand",
  "withstander",
  "withstanders",
  "withstanding",
  "withstands",
  "withstood",
  "withwind",
  "withwinds",
  "withy",
  "withywind",
  "withywinds",
  "witing",
  "witless",
  "witlessly",
  "witlessness",
  "witlessnesses",
  "witling",
  "witlings",
  "witloof",
  "witloofs",
  "witness",
  "witnessable",
  "witnessed",
  "witnesser",
  "witnessers",
  "witnesses",
  "witnessing",
  "witney",
  "witneys",
  "wits",
  "witted",
  "witter",
  "wittered",
  "wittering",
  "witters",
  "witticism",
  "witticisms",
  "wittier",
  "wittiest",
  "wittily",
  "wittiness",
  "wittinesses",
  "witting",
  "wittingly",
  "wittings",
  "wittol",
  "wittolly",
  "wittols",
  "witty",
  "witwall",
  "witwalls",
  "witwanton",
  "witwantoned",
  "witwantoning",
  "witwantons",
  "wive",
  "wived",
  "wivehood",
  "wivehoods",
  "wiver",
  "wivern",
  "wiverns",
  "wivers",
  "wives",
  "wiving",
  "wiz",
  "wizard",
  "wizardly",
  "wizardries",
  "wizardry",
  "wizards",
  "wizen",
  "wizened",
  "wizening",
  "wizens",
  "wizes",
  "wizier",
  "wiziers",
];

let wordDiv = document.getElementById("worddiv");
let textinput = document.getElementById("textinput");
let score = document.getElementById("score");
let lifes = document.getElementById("lifes");
let restart = document.getElementById("restart");
let timeloop;


function GameStart() {

    console.log(timeloop);
    if (timeloop) {
        clearInterval(timeloop)
    }

  let scoreValue = 0;
  let lifeValue = 3;

  function setScore(sc = 1) {
    scoreValue += sc;
    score.innerText = scoreValue;
  }

  function setlifes(ls = 1) {
    lifeValue -= ls;
    lifes.innerText = lifeValue;
  }

  document.onkeydown = function () {
    textinput.focus();
  };

  let randWord = function () {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  let yspeed = 10;
  let ytranslatePos = 0;

  let rWord = "";

  function setWord() {
    rWord = randWord();
    wordDiv.innerText = rWord;
  }

  setWord();

  textinput.focus();

  timeloop = setInterval(() => {
    if (lifeValue < 1) {
      wordDiv.innerText = "Game Over";
      wordDiv.style.transform = `translateY(${window.innerHeight / 2 - 50}px)`;
      clearInterval(timeloop);
      return;
    }

    ytranslatePos += yspeed;
    wordDiv.style.transform = `translateY(${ytranslatePos}px)`;

    if (textinput.value == rWord) {
      setScore();
      textinput.value = "";
      setWord();
      ytranslatePos = 0;
    }

    if (ytranslatePos + 40 > window.innerHeight) {
      setlifes();
      ytranslatePos = 0;
      textinput.value = "";
      setWord();
    }

  }, 100);
}

// GameStart();

restart.onclick = function () {
  GameStart();
};

fetch('index.json').then((res)=>{
    console.log(res.body);
})
