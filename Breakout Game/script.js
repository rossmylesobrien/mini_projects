/*
1. Create canvas context
2. Create and draw ball
3. Create and draw paddle
4. Create bricks
5. Draw score
6. Add update() - Animate - requestAnimationFrame(cb)
7. Move paddle
8. Keyboard event handlers to move paddle
9. Move ball
10. Add wall bounderies
11. Increase score when bricks break
12. Lose - redraw bricks, reset score
*/

const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Rules and close event handlers
rulesBtn.addEventlistener('click', () => {
  rules.classList.add('show');
});

closeBtn.addEventlistener('click', () => {
  rules.classList.remove('show');
});
