// Project Info Card
const projects = {
    portfolio: {
        name: 'SierraCS Studio Portfolio',
        year: '2025',
        info: 'SierraCS Studio Portfolio reimagines a personal site as a Mac-inspired desktop experience, complete with a lock screen, menu bar, and app window shell. Built with vanilla HTML, CSS, and JavaScript, it showcases my work through an interface that feels alive rather than static.',
        goal: 'The goal of this portfolio is to prove that a personal site can be both a resume and a piece of design work in itself. Built to introduce SierraCS Studio and demonstrate front-end fundamentals, creative UI thinking, and attention to detail without relying on a framework.',
        techStack: 'HTML, CSS, JavaScript',
        liveLink: 'https://sierra-cs.github.io/portfolio/index.html',
        githubLink: 'https://github.com/sierra-cs/portfolio',
        screenshots: [
            './assets/images/project-screenshots/portfolio/portfolio-main.png', 
            './assets/images/project-screenshots/portfolio/portfolio-2.png', 
            './assets/images/project-screenshots/portfolio/portfolio-3.png', 
            './assets/images/project-screenshots/portfolio/portfolio-4.png',
            './assets/images/project-screenshots/portfolio/portfolio-5.png'
        ]
    },
    'design-system': {
        name: 'SierraCS Studio Design System',
        year: '2025',
        info: 'The SierraCS Studio Design System documents the visual language behind my brand: a neutral, green-forward color palette, a deliberate typography pairing, and the reusable components that hold the portfolio together.',
        goal: 'The goal of this design system is to keep SierraCS Studio consistent and scalable as new projects are added. It exists as both a practical reference for my own work and a demonstration of how I think about design systems, tokens, and component reuse.',
        techStack: 'HTML, CSS, JavaScript',
        liveLink: 'https://sierra-cs.github.io/portfolio/designsys.html',
        githubLink: 'https://github.com/sierra-cs/portfolio',
        screenshots: [
            './assets/images/project-screenshots/design-system/design-system-main.png',
            './assets/images/project-screenshots/design-system/design-system-2.png',
            './assets/images/project-screenshots/design-system/design-system-3.png'
        ],
        videos: [
            './assets/images/project-screenshots/design-system/videos/design-system-interaction-1.mp4',
            './assets/images/project-screenshots/design-system/videos/design-system-interaction-2.mp4'
        ]
    },
    cadence: {
        name: 'Cadence',
        year: '2026',
        info: 'Cadence is a task and habit tracking app designed with a self-awareness first philosophy. Built with React, it helps users build consistent routines without the guilt of missed streaks. The interface features a liquid glass visual aesthetic and a forgiving streak model that focuses on progress over perfection.',
        goal: 'The goal of Cadence is to create a productivity tool that feels human; one that coaches rather punishes. Designed for people who want to build better habits without the anxiety of traditional habit trackers. Currently in active development as my primary React portfolio project.',
        techStack: 'React, JavaScript, CSS',
        liveLink: 'https://sierra-cs.github.io/Cadence-app/',
        githubLink: 'https://github.com/sierra-cs/Cadence-app',
        screenshots: [
            './assets/images/project-screenshots/cadence/cadence-main.png', 
            './assets/images/project-screenshots/cadence/cadence-2.png',
            './assets/images/project-screenshots/cadence/cadence-3.png',
            './assets/images/project-screenshots/cadence/cadence-4.png'
        ],
        videos: [
            './assets/images/project-screenshots/cadence/videos/cadence-interaction.mp4'
        ]
    },
    jammming: {
        name: 'Jammming',
        year: '2026',
        info: 'Jammming is a playlist-building app that connects to the Spotify Web API, letting users search for songs and assemble custom playlists to save directly to their Spotify account.',
        goal: 'The goal of Jammming was to practice working with a real third-party API and managing asynchronous data in a JavaScript-only project, outside of a framework. Note: a live demo requires Spotify Premium API access, which is no longer available after August 2026 — see the GitHub repo for the full code.',
        techStack: 'JavaScript, CSS, HTML',
        githubLink: 'https://github.com/sierra-cs/Jammming',
        screenshots: [
            './assets/images/project-screenshots/jammming/jammming-main.png',
            './assets/images/project-screenshots/jammming/jammming-2.png',
            './assets/images/project-screenshots/jammming/jammming-3.png',
            './assets/images/project-screenshots/jammming/jammming-4.png',
            './assets/images/project-screenshots/jammming/jammming-5.png'
        ]
    }
}

// Card Backdrop
const projectBackdrop = document.createElement('div');
projectBackdrop.className = 'project-backdrop';
document.body.appendChild(projectBackdrop);

// Card Modal
const projectModal = document.createElement('div');
projectModal.className = 'project-modal';
document.body.appendChild(projectModal);

// Event Listeners 
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.id;
        const project = projects[projectId];
        openProjectModal(project);
    });
});

// Open Project Modal
function openProjectModal(project) {
    projectModal.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.name}</h2>
            <button class="modal-close" id="closeProject">X</button>
        </div>
        <div class="modal-body">
            <div class="modal-left">
                <div class="modal-section">
                    <h3>Project Info:</h3>
                    <p>${project.info}</p>
                </div>
                <div class="modal-section">
                    <h3>Purpose & Goal</h3>
                    <p>${project.goal}</p>
                </div>
                <div class="modal-section">
                    <h3>Tech Stack:</h3>
                    <p>${project.techStack}</p>
                </div>
                <div class="modal-links">
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live Site</a>` : ''}
                    <a href="${project.githubLink}" target="_blank">GitHub</a>
                </div>
            </div>
            <div class="modal-right">
                <div class="modal-screenshots">
                    <img src="${project.screenshots[0]}" alt="Main screenshot" class="screenshot-main">
                    <div class="screenshot-grid">
                        ${(() => {
                            const gridItems = [
                                ...project.screenshots.slice(1).map(src => ({ type: 'image', src })),
                                ...(project.videos || []).map(src => ({ type: 'video', src}))
                            ];
                            return gridItems.map((item, i) =>
                                item.type === 'video'
                                    ? `<video src="${item.src}" alt="Screenshot ${i + 1}" class="screenshot-small" autoplay loop muted playsline></video>`
                                    : `<img src="${item.src}" alt="Screenshot ${i + 1}" class="screenshot-small">`
                            ).join('');
                        })()}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show backdrop and modal
    projectBackdrop.style.opacity = '0.5';
    projectBackdrop.style.pointerEvents = 'all';
    projectModal.style.opacity = '1';
    projectModal.style.pointerEvents = 'all';

    // Close button
    document.getElementById('closeProject').addEventListener('click', () => {
        projectBackdrop.style.opacity = '0';
        projectBackdrop.style.pointerEvents = 'none';
        projectModal.style.opacity = '0';
        projectModal.style.pointerEvents = 'none';
    });
}