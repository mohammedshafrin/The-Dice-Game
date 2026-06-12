// ── Game State ──────────────────────────────────────────────
var score1 = 0;
var score2 = 0;
var currentRound = 0;
var maxRounds = 5;
var gameOver = false;

// ── Roll Dice ───────────────────────────────────────────────
function rollDice() {
  if (gameOver) return;

  currentRound++;

  // Update round dots
  var dot = document.getElementById("dot-" + currentRound);
  if (dot) dot.classList.add("dot-active");
  document.getElementById("current-round").textContent = currentRound;

  // Roll
  var n1 = Math.floor(Math.random() * 6) + 1;
  var n2 = Math.floor(Math.random() * 6) + 1;

  // Update images with animation
  var img1 = document.querySelectorAll("img")[0];
  var img2 = document.querySelectorAll("img")[1];

  img1.classList.remove("rolling");
  img2.classList.remove("rolling");
  void img1.offsetWidth;
  void img2.offsetWidth;

  img1.setAttribute("src", "images/dice" + n1 + ".png");
  img2.setAttribute("src", "images/dice" + n2 + ".png");
  img1.classList.add("rolling");
  img2.classList.add("rolling");

  // Evaluate round
  var resultEl = document.getElementById("round-result");
  var hintEl   = document.getElementById("hint-msg");
  var remaining = maxRounds - currentRound;

  // Clear old highlight
  document.getElementById("score-p1").classList.remove("score-highlight");
  document.getElementById("score-p2").classList.remove("score-highlight");

  if (n1 > n2) {
    score1++;
    resultEl.textContent  = "🚩 Player 1 wins this round!";
    resultEl.className    = "round-result-text result-p1";
    document.getElementById("score-p1").classList.add("score-highlight");
    triggerMiniCelebration();
  } else if (n2 > n1) {
    score2++;
    resultEl.textContent  = "Player 2 wins this round! 🚩";
    resultEl.className    = "round-result-text result-p2";
    document.getElementById("score-p2").classList.add("score-highlight");
    triggerMiniCelebration();
  } else {
    resultEl.textContent = "⚖️ This round is a Draw!";
    resultEl.className   = "round-result-text result-draw";
  }

  // Update score display
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;

  // Hint message
  if (currentRound < maxRounds) {
    hintEl.textContent = remaining + " round" + (remaining > 1 ? "s" : "") + " remaining — keep rolling!";
  } else {
    hintEl.textContent = "Game over! See the final result below.";
  }

  // Check if game is over
  if (currentRound >= maxRounds) {
    gameOver = true;
    document.getElementById("roll-btn").disabled = true;
    document.getElementById("roll-btn").style.opacity = "0.5";
    document.getElementById("roll-btn").style.cursor  = "not-allowed";

    setTimeout(showFinalResult, 900);
  }
}

// ── Final Result ─────────────────────────────────────────────
function showFinalResult() {
  var overlay   = document.getElementById("final-overlay");
  var nameEl    = document.getElementById("final-winner-name");
  var scoresEl  = document.getElementById("final-scores");

  scoresEl.textContent = "Player 1: " + score1 + " wins  |  Player 2: " + score2 + " wins";

  if (score1 > score2) {
    nameEl.textContent = "🎉 Player 1 🎉";
    nameEl.className   = "final-winner-name winner-p1";
  } else if (score2 > score1) {
    nameEl.textContent = "🎉 Player 2 🎉";
    nameEl.className   = "final-winner-name winner-p2";
  } else {
    document.querySelector(".final-winner-label").textContent = "🤝 It's a Tie!";
    nameEl.textContent = "Both Players";
    nameEl.className   = "final-winner-name winner-tie";
  }

  overlay.classList.remove("hidden");
  triggerFinalCelebration();
}

// ── Reset ─────────────────────────────────────────────────────
function resetGame() {
  score1 = 0; score2 = 0;
  currentRound = 0;
  gameOver = false;

  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("current-round").textContent = "0";
  document.getElementById("round-result").textContent  = "\u00a0";
  document.getElementById("round-result").className    = "round-result-text";
  document.getElementById("hint-msg").textContent      = "Click the button to roll the dice and start Round 1!";
  document.getElementById("final-overlay").classList.add("hidden");

  var btn = document.getElementById("roll-btn");
  btn.disabled      = false;
  btn.style.opacity = "1";
  btn.style.cursor  = "pointer";

  document.querySelector(".final-winner-label").textContent = "🏆 WINNER 🏆";

  document.getElementById("score-p1").classList.remove("score-highlight");
  document.getElementById("score-p2").classList.remove("score-highlight");

  for (var i = 1; i <= 5; i++) {
    var d = document.getElementById("dot-" + i);
    if (d) d.classList.remove("dot-active");
  }

  // Reset dice to default
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}

// ── Mini celebration (per round win) ─────────────────────────
function triggerMiniCelebration() {
  var celebrationDiv = document.getElementById("celebration");
  celebrationDiv.innerHTML = "";

  var emojis = ["🎉", "🍾", "✨", "🎊", "⭐", "🎈", "💫"];
  for (var i = 0; i < 14; i++) {
    var piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (Math.random() * 1.5 + 1) + "s";
    piece.style.animationDelay    = (Math.random() * 0.5) + "s";
    piece.style.fontSize          = (Math.random() * 18 + 16) + "px";
    celebrationDiv.appendChild(piece);
  }

  celebrationDiv.classList.remove("hidden");
  setTimeout(function () { celebrationDiv.classList.add("hidden"); }, 2000);
}

// ── Big final celebration ─────────────────────────────────────
function triggerFinalCelebration() {
  var celebrationDiv = document.getElementById("celebration");
  celebrationDiv.innerHTML = "";

  var emojis = ["🎉", "🍾", "✨", "🎊", "⭐", "🏆", "🎈", "💫", "🥇"];
  for (var i = 0; i < 40; i++) {
    var piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (Math.random() * 2.5 + 1.5) + "s";
    piece.style.animationDelay    = (Math.random() * 1.2) + "s";
    piece.style.fontSize          = (Math.random() * 28 + 20) + "px";
    celebrationDiv.appendChild(piece);
  }

  celebrationDiv.classList.remove("hidden");
  setTimeout(function () { celebrationDiv.classList.add("hidden"); }, 5000);
}
