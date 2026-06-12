🎲 Dicee Game
A beautifully styled, interactive web-based dice rolling game where two players compete across multiple rounds. Built with semantic HTML5, CSS3 transitions/animations, and vanilla JavaScript.
Developed originally as part of the App Brewery curriculum and enhanced with structured multi-round state management.
---
🚀 Features
Multi-Round State Management: The game is hardcoded to track an engaging 5-round match.
Visual Round Tracker: A step-by-step dot matrix indicator that updates dynamically as the game progresses.
Interactive Scoreboard: Tracks points for Player 1 and Player 2, dynamically highlighting the card of the round's winner.
Dynamic Animations: Real-time 3D-like dice rolling spin animations built natively with CSS keyframes.
Immersive Celebrations: Animated confetti emojis cascade down the screen on a per-round win, featuring a massive explosion for the final tournament winner.
End-Game Modal: A beautiful modal overlay showcasing the final scores and overall champion with an instant "Play Again" reset function.
---
🛠️ Tech Stack
Frontend: HTML5 (Semantic Structure)
Styling: CSS3 (Custom Variables, Flexbox, Fixed Overlays, Dynamic Transitions, Custom `@keyframes` Animations)
Typography: Google Fonts (Lobster & Indie Flower)
Logic: Vanilla JavaScript (ES6 State Machine, DOM manipulation, Asynchronous Timeouts)
---
📂 File Structure
```text
├── index.html       # Application layout, DOM structure \& structural overlays
├── styles.css       # Complete UI theme, custom typography, animations \& positioning
├── index.js         # Game state logic, animation triggers, and celebration mechanics
└── images/          # Image asset directory
    ├── dice1.png    # Dice face 1
    ├── dice2.png    # Dice face 2
    ├── dice3.png    # Dice face 3
    ├── dice4.png    # Dice face 4
    ├── dice5.png    # Dice face 5
    └── dice6.png    # Dice face 6
