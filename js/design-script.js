/* Hover Interaction for Color Swatches */
const cards = document.querySelectorAll('.swatch-container');
cards.forEach(card => {
    const swatch = card.querySelector('.color-swatch');
    const info = card.querySelector('.color-info');

    card.addEventListener('mouseenter', () => {
        swatch.style.opacity = '0';
        info.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        swatch.style.opacity = '1';
        info.style.opacity = '0';
    });
});

cards.forEach(card => {
    const swatch = card.querySelector('.color-swatch');
    const info = card.querySelector('.color-info');
    let holdTimer;

    card.addEventListener('touchstart', () => {
        holdTimer = setTimeout(() => {
            swatch.style.opacity = '0';
            info.style.opacity = '1';
        }, 500);
        
    });

    card.addEventListener('touchend', () => {
        clearTimeout(holdTimer);
            swatch.style.opacity = '1';
            info.style.opacity = '0';
    });
});

/* Hover Interaction for Typography */
const fonts = document.querySelectorAll('.samples-container');

fonts.forEach(font => {
    const text = font.querySelector('.font-samples');
    const info = font.querySelector('.typography-info');

    font.addEventListener('mouseenter', () => {
        text.style.opacity = '0';
        info.style.opacity = '1';
    });

    font.addEventListener('mouseleave', () => {
        text.style.opacity = '1';
        info.style.opacity = '0';
    });
});

fonts.forEach(font => {
    const text = font.querySelector('.font-samples');
    const info = font.querySelector('.typography-info');
    let holdTimer;

    font.addEventListener('touchstart', () => {
        holdTimer = setTimeout(() => {
            text.style.opacity = '0';
            info.style.opacity = '1';
        }, 500);
        
    });

    font.addEventListener('touchend', () => {
        clearTimeout(holdTimer);
            text.style.opacity = '1';
            info.style.opacity = '0';
    });
});

/* Hover Interaction for Logos & Button Interactivity */
const primaryLogo = ['./assets/design-system logos/primary-fullcolor.svg', './assets/design-system logos/primary-greyscale.svg'];
const faviconLogo = ['./assets/design-system logos/favicon-fullcolor.svg', './assets/design-system logos/favicon-greyscale.svg'];
const designerLogo = ['./assets/design-system logos/designer-euconyx.svg', './assets/design-system logos/designer-eucash.svg', './assets/design-system logos/designer-matonyx.svg', 
    './assets/design-system logos/designer-matash.svg', './assets/design-system logos/designer-mistonyx.svg', './assets/design-system logos/designer-mistash.svg', 
    './assets/design-system logos/designer-pineonyx.svg', './assets/design-system logos/designer-pineash.svg'];
const personalLogo = ['../assets/design-system logos/personal-grad1onyx.svg', './assets/design-system logos/personal-grad1ash.svg', 
    './assets/design-system logos/personal-grad2onyx.svg', './assets/design-system logos/personal-grad2ash.svg'];

// Primary & Favicon Info
const primaryDescriptions = [
    "This is the heart of SierraCS Studio - my studio name wrapped in a wreath of Texas bluebonnets. Those vibrant blue blooms are more than just pretty; they're a nod to home, to Texas pride, and to the idea that creativity grows from where you're rooted. The warm brown frame and earthy green type feel grounded and natural, which is exactly the vibe I'm going for. I designed this to work on any background - light or dark - because versatility matters when you're building a brand.",
    "Same elegance, zero color. I use this version when I need something more refined - think professional documents, print work, or anywhere a neutral palette makes more sense. The bluebonnets still read beautifully even in monochrome, which was important to me."
];
const faviconDescriptions = [
    "I distilled the whole brand down to this: a single 'S' with a bluebonnet stem. It works as my favicon, sits in browser tabs, and doubles as a watermark on my content. Even at tiny sizes, you can still see the bluebonnet detail, which keeps that Texas connection alive everywhere my work shows up online.",
    "The subtle version for watermarking. It marks my work without shouting, letting the content speak while still clearly saying 'this is mine.'"
];

/* Index variables & DOM Elements */
let primIndex = 0;
let favIndex = 0;
let desIndex = 0;
let perIndex = 0;

// Primary Logo Elements
const primaryCard = document.querySelector('.logo-card.primary');
const primaryImg = primaryCard.querySelector('.logo-display img');
const primaryDescription = primaryCard.querySelector('.logo-description p');
const primaryPrevBtn = primaryCard.querySelector('.prev-btn');
const primaryNextBtn = primaryCard.querySelector('.next-btn');
const primaryCounter = primaryCard.querySelector('.counter');


// Favicon Logo Elements
const faviconCard = document.querySelector('.logo-card.favicon');
const faviconImg = faviconCard.querySelector('.logo-display img');
const faviconDescription = faviconCard.querySelector('.logo-description p');
const faviconPrevBtn = faviconCard.querySelector('.prev-btn');
const faviconNextBtn = faviconCard.querySelector('.next-btn');
const faviconCounter = faviconCard.querySelector('.counter');

// Designdev Logo Elements
const designDevCard = document.querySelector('.logo-card.designdev');
const designDevImg = designDevCard.querySelector('.logo-display img');
const designDevPrevBtn = designDevCard.querySelector('.prev-btn');
const designDevBtn = designDevCard.querySelector('.next-btn');
const designDevCounter = designDevCard.querySelector('.counter');
const designDevBg = designDevCard.querySelector('.logo-display');

// Personal Logo Elements
const personalCard = document.querySelector('.logo-card.personal');
const personalImg = personalCard.querySelector('.logo-display img');
const personalPrevBtn = personalCard.querySelector('.prev-btn');
const personalNextBtn = personalCard.querySelector('.next-btn');
const personalCounter = personalCard.querySelector('.counter');
const personalBg = personalCard.querySelector('.logo-display');

/* Navigation Buttons Functions */
// Primary Logo
primaryNextBtn.addEventListener('click', () => {
    primIndex = (primIndex + 1) % primaryLogo.length;
    primaryImg.src = primaryLogo[primIndex];
    primaryCounter.textContent = `${primIndex + 1} / ${primaryLogo.length}`;
    primaryDescription.textContent = primaryDescriptions[primIndex];
});

primaryPrevBtn.addEventListener('click', () => {
    primIndex = (primIndex - 1 + primaryLogo.length) % primaryLogo.length;
    primaryImg.src = primaryLogo[primIndex];
    primaryCounter.textContent = `${primIndex + 1} / ${primaryLogo.length}`;
    primaryDescription.textContent = primaryDescriptions[primIndex];
});

// Favicon Logo
faviconNextBtn.addEventListener('click', () => {
    favIndex = (favIndex + 1) % faviconLogo.length;
    faviconImg.src = faviconLogo[favIndex];
    faviconCounter.textContent = `${favIndex + 1} / ${faviconLogo.length}`;
    faviconDescription.textContent = faviconDescriptions[favIndex];
});

faviconPrevBtn.addEventListener('click', () => {
    favIndex = (favIndex - 1 + faviconLogo.length) % faviconLogo.length;
    faviconImg.src = faviconLogo[favIndex];
    faviconCounter.textContent = `${favIndex + 1} / ${faviconLogo.length}`;
    faviconDescription.textContent = faviconDescriptions[favIndex];
});

// Designdev Logo
designDevBtn.addEventListener('click', () => {
    desIndex = (desIndex + 1) % designerLogo.length;
    designDevImg.src = designerLogo[desIndex];
    designDevCounter.textContent = `${desIndex + 1} / ${designerLogo.length}`;
    if (desIndex % 2 !== 0) {
        designDevBg.style.backgroundColor = 'var(--Espresso)';
    } else {
        designDevBg.style.backgroundColor = 'var(--Oat)';
    }
});

designDevPrevBtn.addEventListener('click', () => {
    desIndex = (desIndex - 1 + designerLogo.length) % designerLogo.length;
    designDevImg.src = designerLogo[desIndex];
    designDevCounter.textContent = `${desIndex + 1} / ${designerLogo.length}`;
    if (desIndex % 2 !== 0) {
        designDevBg.style.backgroundColor = 'var(--Espresso)';
    } else {
        designDevBg.style.backgroundColor = 'var(--Oat)';
    }
});

// Personal Logo
personalNextBtn.addEventListener('click', () => {
    perIndex = (perIndex + 1) % personalLogo.length;
    personalImg.src = personalLogo[perIndex];
    personalCounter.textContent = `${perIndex + 1} / ${personalLogo.length}`;
    if (perIndex % 2 !== 0) {
        personalBg.style.backgroundColor = 'var(--Espresso)';
    } else {
        personalBg.style.backgroundColor = 'var(--Oat)';
    }
});

personalPrevBtn.addEventListener('click', () => {
    perIndex = (perIndex - 1 + personalLogo.length) % personalLogo.length;
    personalImg.src = personalLogo[perIndex];
    personalCounter.textContent = `${perIndex + 1} / ${personalLogo.length}`;
    if (perIndex % 2 !== 0) {
        personalBg.style.backgroundColor = 'var(--Espresso)';
    } else {
        personalBg.style.backgroundColor = 'var(--Oat)';
    }
});

/* Logo Hover Functions */
const logoCards = document.querySelectorAll('.logo-content');
logoCards.forEach(card => {
    const display = card.querySelector('.logo-display');
    const info = card.querySelector('.logo-description');

    card.addEventListener('mouseenter', () => {
        display.style.opacity = '0';
        info.style.opacity = '1';
        info.style.pointerEvents = 'auto';
    });

    card.addEventListener('mouseleave', () => {
        display.style.opacity = '1';
        info.style.opacity = '0';
        info.style.pointerEvents = 'none';
    });
});
