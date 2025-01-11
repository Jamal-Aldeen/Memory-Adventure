// Function to save the score to local storage
export function saveScore(level, moves, time) {
  const score = {
      moves: moves,
      time: time,
      timestamp: new Date().toISOString()
  };

  const scores = JSON.parse(localStorage.getItem(`highScores_${level}`)) || [];
  scores.push(score);

  // Sort scores by moves and time (lower moves and time are better)
  scores.sort((a, b) => {
      if (a.moves === b.moves) {
          return a.time - b.time;
      }
      return a.moves - b.moves;
  });

  const topScores = scores.slice(0, 3); // Keep only the top 3 scores

  // Save back to local storage
  localStorage.setItem(`highScores_${level}`, JSON.stringify(topScores));

  // Check if the current score is in the top 3
  const isHighScore = topScores.some(s => s.moves === moves && s.time === time);
  return isHighScore;
}

// Function to retrieve the saved scores for a specific level
export function getSavedScores(level) {
  const scores = JSON.parse(localStorage.getItem(`highScores_${level}`)) || [];
  return scores;
}

// Function to clear all scores (optional, for debugging or resetting)
export function clearScores() {
  localStorage.removeItem('highScores_easy');
  localStorage.removeItem('highScores_medium');
  localStorage.removeItem('highScores_hard');
}