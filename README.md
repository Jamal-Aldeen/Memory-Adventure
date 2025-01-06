# Memory Adventure

A fun and interactive memory game to challenge your brain!

## Project Structure
```
memory-adventure/
│
├── assets/                      # Folder for all static assets (images, audio, icons, etc.)
│   ├── global/                  # Folder for assets shared across all levels
│   │   ├── audio/               # Global audio files
│   │   │   ├── background-music.mp3 # Background music for the game
│   │   │   └── click-sound.wav  # Sound effect for button clicks
│   │   ├── icons/               # Global icons
│   │   │   ├── sound-on.png     # Icon for when sound is enabled
│   │   │   ├── sound-off.png    # Icon for when sound is muted
│   │   │   └── page-icon.png    # Icon for homepage
│   │   ├── images/              # Global images
│   │   │   ├── mario.webp       # Floating GIF for visual effect
│   │   │   ├── naruto.webp      # Floating GIF for visual effect
│   │   │   ├── JS.png           # Floating GIF for visual effect
│   │   │   └── space-background.gif # Background image for home
│   │
│   ├── easy/                    # Folder for easy level assets
│   │   ├── audio/               # Audio files for easy level
│   │   │   └── level-music.mp3  # Background music for easy level
│   │   ├── icons/               # Icons for easy level
│   │   │   └── level-icon.png   # Icon for easy level
│   │   ├── images/              # Images for easy level
│   │   │   ├── card1.png        # Example card image for easy level
│   │   │   ├── card2.png        # Example card image for easy level
│   │   │   └── background.gif   # Background image for easy level
│   │
│   ├── medium/                  # Folder for medium level assets
│   │   ├── audio/               # Audio files for medium level
│   │   │   └── level-music.mp3  # Background music for medium level
│   │   ├── icons/               # Icons for medium level
│   │   │   └── level-icon.png   # Icon for medium level
│   │   ├── images/              # Images for medium level
│   │   │   ├── card1.png        # Example card image for medium level
│   │   │   ├── card2.png        # Example card image for medium level
│   │   │   └── background.gif   # Background image for medium level
│   │
│   ├── hard/                    # Folder for hard level assets
│   │   ├── audio/               # Audio files for hard level
│   │   │   └── level-music.mp3  # Background music for hard level
│   │   ├── icons/               # Icons for hard level
│   │   │   └── level-icon.png   # Icon for hard level
│   │   ├── images/              # Images for hard level
│   │   │   ├── card1.png        # Example card image for hard level
│   │   │   ├── card2.png        # Example card image for hard level
│   │   │   └── background.gif   # Background image for hard level
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
