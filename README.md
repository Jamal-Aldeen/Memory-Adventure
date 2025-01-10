# Memory Adventure

A fun and interactive memory game to challenge your brain!

## Project Structure
```
memory-adventure/
│
├── assets/                      # Static assets (images, audio, icons, etc.)
│   ├── global/                  # Shared assets across all levels
│   │   ├── default/             # Default assets (e.g., placeholders)
│   │   │   └── place-holder.png # Default placeholder image
│   │   ├── icons/               # Global icons (e.g., sound icons, page icons)
│   │   │   ├── sound-on.png     # Sound on icon
│   │   │   ├── sound-off.png    # Sound off icon
│   │   │   └── page-icon.png    # Favicon for the website
│   │   ├── images/              # Global images (e.g., floating GIFs, backgrounds)
│   │   │   ├── space-background.gif # Global background image
│   │   │   ├── mario.webp       # Floating GIF 1
│   │   │   ├── naruto.webp      # Floating GIF 2
│   │   │   └── JS.png           # Floating GIF 3
│   │   └── audio/               # Global audio files (e.g., background music, sound effects)
│   │       ├── background-music.mp3 # Global background music
│   │       ├── click-sound.wav  # Click sound effect
│   │       ├── match-sound.wav  # Sound for matching cards
│   │       └── win-sound.wav    # Sound for winning the game
│   │
│   ├── easy/                    # Easy level assets
│   │   ├── icons/               # Icons specific to the easy level
│   │   │   └── level-icon.png   # Icon for the easy level
│   │   ├── images/              # Images specific to the easy level
│   │   │   ├── card1.png        # Card image 1 for easy level
│   │   │   ├── card2.png        # Card image 2 for easy level
│   │   │   └── background.gif   # Background image for easy level
│   │   └── audio/               # Audio files specific to the easy level
│   │       └── level-music.mp3  # Background music for easy level
│   │
│   ├── medium/                  # Medium level assets
│   │   ├── icons/               # Icons specific to the medium level
│   │   │   └── level-icon.png   # Icon for the medium level
│   │   ├── images/              # Images specific to the medium level
│   │   │   ├── card1.png        # Card image 1 for medium level
│   │   │   ├── card2.png        # Card image 2 for medium level
│   │   │   └── background.gif   # Background image for medium level
│   │   └── audio/               # Audio files specific to the medium level
│   │       └── level-music.mp3  # Background music for medium level
│   │
│   └── hard/                    # Hard level assets
│       ├── icons/               # Icons specific to the hard level
│       │   └── level-icon.png   # Icon for the hard level
│       ├── images/              # Images specific to the hard level
│       │   ├── card1.png        # Card image 1 for hard level
│       │   ├── card2.png        # Card image 2 for hard level
│       │   └── background.gif   # Background image for hard level
│       └── audio/               # Audio files specific to the hard level
│           └── level-music.mp3  # Background music for hard level
│
├── css/                         # CSS stylesheets
│   ├── main.css                 # Shared styles (e.g., fonts, buttons, pop-ups)
│   ├── easy.css                 # Styles for the "Easy" difficulty level
│   ├── medium.css               # Styles for the "Medium" difficulty level
│   └── hard.css                 # Styles for the "Hard" difficulty level
│
├── js/                          # JavaScript files
│   ├── modules/                 # Modularized JavaScript files for game logic, sound management, etc.
│   │   ├── gameLogic.js         # Handles card matching, scoring, and game mechanics
│   │   ├── utils.js             # Manages background music and sound effects
│   │   ├── sound.js             # Sound-related utilities
│   │   ├── hint.js              # Hint functionality
│   │   └── storage.js           # Manages high scores and local storage
│   ├── start.js                 # Main JavaScript file for the landing page
│
├── index.html                   # Main landing page
├── easy.html                    # Easy level page
├── medium.html                  # Medium level page
├── hard.html                    # Hard level page
└── README.md                    # Project documentation (setup, features, etc.)
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
