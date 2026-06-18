const states = [
    { action: 'I design,', visual: './assets/images/renders/render-design.png', adjective: 'engaging interfaces'},
    {action: 'I develop,', visual: './assets/images/renders/render-develop.png', adjective: 'dynamic interfaces'}
];

const actionEl = document.getElementById('action');
const adjEl = document.getElementById('adjective');
const visualEl = document.getElementById('heroVisual');

let currentState = 1;

function rotateState() {
    // Fade out
    actionEl.style.opacity = '0';
    adjEl.style.opacity = '0';
    visualEl.style.opacity = '0';

    setTimeout(() => {
        const state = states[currentState];
        actionEl.textContent = state.action;
        visualEl.src = state.visual;
        adjEl.textContent = state.adjective;
        currentState = (currentState + 1) % states.length;

        // Fade back in
        actionEl.style.opacity = '1';
        adjEl.style.opacity = '1';
        visualEl.style.opacity  = '1';
    }, 500);
};
setInterval(rotateState, 3000);