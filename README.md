# Memory Adventure

A fun and interactive memory game to challenge your brain!

## Project Structure
```
memory-adventure/
│
├── assets/                      # Folder for all static assets (images, audio, icons, etc.)
│   ├── audio/                   # Audio files for background music and sound effects
│   │   ├── background-music.mp3 # Background music for the game
│   │   └── click-sound.wav      # Sound effect for button clicks
│   ├── icons/                   # Icons for UI elements (e.g., sound toggle button)
│   │   ├── sound-on.png         # Icon for when sound is enabled
│   │   ├── sound-off.png        # Icon for when sound is muted
│   │   └── page-icon.png        # Icon for homepage
│   ├── images/                  # Images for cards, backgrounds, and floating GIFs
│   │   ├── mario.webp           # Floating GIF for visual effect
│   │   ├── naruto.webp          # Floating GIF for visual effect
│   │   ├── JS.png               # Floating GIF for visual effect
│   │   └── space-background.gif # Background image for home
│
├── css/                         # Folder for all CSS stylesheets
│   ├── main.css                 # Main stylesheet for shared styles
│   ├── difficulty/              # Folder for difficulty-specific styles
│   │   ├── easy.css             # Styles for the "Easy" difficulty level
│   │   ├── medium.css           # Styles for the "Medium" difficulty level
│   │   └── hard.css             # Styles for the "Hard" difficulty level
│
├── js/                          # Folder for all JavaScript files
│   ├── modules/                 # Modularized JavaScript files for game logic, sound management, etc.
│   │   ├── gameLogic.js         # Handles card matching, scoring, and game mechanics
│   │   └── utils.js             # Manages background music and sound effects
│   ├── start.js                 # Main JavaScript file that initializes the game and connects modules
│   └── storage.js               # Additional JavaScript files for specific features
│
├── index.html                   # Main landing page of the game
├── easy.html                    # Page for the "Easy" difficulty level
├── medium.html                  # Page for the "Medium" difficulty level
├── hard.html                    # Page for the "Hard" difficulty level
└── README.md                    # Documentation file explaining how to set up and run the project

```

## How to Run
1. Clone this repository:
   ```bash
   git clone <git@github.com:Jamal-Aldeen/Memory-Adventure.git>
   ```
2. Open `index.html` in your browser to start the game.

## Features
- Engaging memory gameplay.
- Tracks your progress using `localStorage`.
- Easy-to-follow tutorial.

## Technologies Used
- HTML
- CSS
- JavaScript

---
