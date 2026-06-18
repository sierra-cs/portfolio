document.addEventListener('DOMContentLoaded', () => {
    // Menu Bar
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    menuBar.innerHTML = `
        <div class="menu-bar">
            <div class="menu-left">
                <img src="./assets/images/favicon-fullcolor.svg" alt="SierraCS Studio Favicon" class="menu-logo">
                <span class="menu-text">SierraCS Studio</span>
                <span class="menu-subtext">File</span>
                <span class="menu-subtext">Edit</span>
                <span class="menu-subtext">View</span>
                <span class="menu-subtext">History</span>
                <span class="menu-subtext">Bookmarks</span>
                <span class="menu-subtext">Window</span>
                <span class="menu-subtext">Help</span>
            </div>
            <div class="menu-right">
                <img src="./assets/images/icons/battery-100.svg" alt="Battery Icon" class="menu-icon">
                <img src="./assets/images/icons/wifi.svg" alt="WiFi Icon" class="wifi-menu-icon">
                <span class="date-time" id="dateTime"></span>
            </div>
        </div>
    `;
    document.body.prepend(menuBar);

    function updateDateTime() {
    const now = new Date();

    // Time in 12-hour format (no AM/PM)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const timeString = `${hours}:${minutes} ${ampm}`;

    // Date
    const dateString = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // DateTime
    document.getElementById('dateTime').textContent = `${dateString} ${timeString}`;
}

    updateDateTime();
    setInterval(updateDateTime, 60000);
    
    // Sleep overlay for injection
    const sleepOverlay = document.createElement('div');
    sleepOverlay.id = 'sleepOverlay';
    sleepOverlay.className = 'sleep-overlay';
    document.body.appendChild(sleepOverlay);

    // Sleep overlay function
    function activateSleep() {
        document.querySelector('.menu-bar').style.display = 'none';
        sleepOverlay.style.opacity = '1';
        sleepOverlay.style.pointerEvents = 'all';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }

    // Logo Dropdown Menu
    const logoMenu = document.createElement('div');
    logoMenu.id = 'logoMenu';
    logoMenu.className = 'logo-menu';

    // Logo Menu HTML
    logoMenu.innerHTML = `
        <div class="menu-group">
            <button class="menu-item" id="aboutWebsite">About This Website</button>
        </div>

        <div class="menu-divider"></div>
        <div class="menu-group">
            <button class="menu-item decorative-item" id="systemSettings">System Settings</button>
            <button class="menu-item decorative-item" id="appStore">App Store</button>
        </div>

        <div class="menu-divider"></div>
        <div class="menu-group">
            <button class="menu-item decorative-item" id="recentItems">Recent Items</button>
        </div>

        <div class="menu-divider"></div>
        <div class="menu-group">
            <button class="menu-item decorative-item" id="forceQuit">Force Quit...</button>
        </div>

        <div class="menu-divider"></div>
        <div class="menu-group">
            <button class="menu-item" id="sleep">Sleep</button>
            <button class="menu-item" id="restart">Restart</button>
            <button class="menu-item" id="shutDown">Shut Down</button>
        </div>

        <div class="menu-divider"></div>
        <div class="menu-group">
            <button class="menu-item" id="lockScreen">Lock Screen</button>
            <button class="menu-item" id="logOut">Log Out SierraCS Studio...</button>
        </div>
    `;
    document.body.appendChild(logoMenu);

    // Logo backdrop
    const logoMenuBackdrop = document.createElement('div');
    logoMenuBackdrop.className = 'logo-menu-backdrop';
    document.body.appendChild(logoMenuBackdrop);

    logoButton.addEventListener('click', () => {
        logoMenu.classList.toggle('active');
        logoMenuBackdrop.classList.toggle('active');
});

    logoMenuBackdrop.addEventListener('click', () => {
        logoMenu.classList.remove('active');
        logoMenuBackdrop.classList.remove('active');
});


    const logoButton = document.querySelector(".menu-logo");
    logoButton.addEventListener('click', () => {
        logoMenu.classList.toggle('active');
    });

    // Menu event listeners
    document.querySelectorAll('.decorative-item').forEach(item => {
        item.addEventListener('click', () => {
            logoMenu.classList.remove('active');
        });
    });

    const restart = document.getElementById("restart");
    restart.addEventListener('click', () => {
        location.reload();
    });

    const shutDown = document.getElementById("shutDown");
    shutDown.addEventListener('click', () => {
        window.location.href = "https://www.google.com/";
    });

    const logOut = document.getElementById("logOut");
    logOut.addEventListener('click', () => {
        window.location.href = "index.html";
    });

    const sleep = document.getElementById("sleep");
    sleep.addEventListener('click', () => {
        activateSleep();
    });

    // Navigate to Lock Screen function
    function navigateToLockScreen() {
        document.body.style.transition = 'opacity 400ms linear';
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 400);
    }

    const lockScreen = document.getElementById('lockScreen');
    lockScreen.addEventListener('click', () => {
        navigateToLockScreen();
    });

    // About This Website
    // Backdrop
    const aboutBackdrop = document.createElement('div');
    aboutBackdrop.id = 'aboutBackdrop';
    aboutBackdrop.className = 'about-backdrop';
    document.body.appendChild(aboutBackdrop);

    function activateBackdrop() {
        aboutBackdrop.style.opacity = '0.5';
        aboutBackdrop.style.pointerEvents = 'all';
        logoMenu.classList.remove('active');
    }

    // Modal
    const aboutModal = document.createElement('div');
    aboutModal.id = 'aboutModal';
    aboutModal.className = 'about-modal';

    aboutModal.innerHTML = `
        <div class="about-menu about-buttons">
            <button class="about-item" id="closeAbout">X</button>
            <button class="about-item decorative-button" id="secondCircle"></button>
            <button class="about-item decorative-button" id="thirdCircle"></button>
        </div>
        
        <div class="about-menu">
            <img src="./assets/images/primary-fullcolor.svg" alt="Primary Icon" class="about-item" id="primaryLogo">
        </div>

        <div class="about-menu">
            <p class="about-item" id="websiteName"><strong>SierraCS Studio</strong></p>
            <p class="about-item" id="versionInfo">V1, 2026</p>
        </div>
        
        <div class="about-menu website-stats">
            <p class="about-item" id="type"><strong>Type: </strong>Portfolio</p>
            <p class="about-item" id="verison"><strong>Version: </strong>V1</p>
            <p class="about-item" id="year"><strong>Year: </strong>2026</p>
            <p class="about-item" id="frameworks"><strong>Built with: </strong>HTML/CSS/JavaScript</p>
            <p class="about-item" id="status"><strong>Status: </strong>Live</p>
        </div>
        
        <div class="about-menu">
            <p class="about-item" id="rights">© ${new Date().getFullYear()} SierraCS Studio. All rights Reserved.</p>
        </div>
    `;

    document.body.appendChild(aboutModal);

    // Closing About Modal
    function activateModal() {
        aboutModal.style.opacity = '1';
        aboutModal.style.pointerEvents = 'all';
    }

    function closeModal() {
        aboutModal.style.opacity = '0';
        aboutModal.style.pointerEvents = 'none';
        aboutBackdrop.style.opacity = '0';
        aboutBackdrop.style.pointerEvents = 'none';
    }

    document.getElementById('aboutWebsite').addEventListener('click', () => {
        logoMenu.classList.remove('active');
        activateBackdrop();
        activateModal();
    });

    document.getElementById('closeAbout').addEventListener('click', () => {
        closeModal();
    });

    // Footer
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.className = 'footer-nav';

    footer.innerHTML = `
        <nav class="main-nav">
            <a href="./home.html">Home</a>
            <a href="./about.html">About</a>
            <a href="./works.html">Works</a>
            <a href="./contact.html">Contact</a>
            <a href="./designsys.html">Design System</a>
        </nav>
        <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} SierraCS Studio. All rights Reserved.</p>
            <p>Designed & Developed by Sierra C.S.</p>
        </div>
    `;
    document.body.appendChild(footer);

    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').replace('./', '');
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });

    // App Window
    const main = document.querySelector('main');
    const appWindow = document.createElement('div');
    appWindow.className = 'app-window';

    appWindow.innerHTML = `
        <div class="window-controls">
            <button class="window-btn close-btn"></button>
            <button class="window-btn minimize-btn"></button>
            <button class="window-btn maximize-btn"></button>
        </div>
    `;

    const windowContent = document.createElement('div');
    windowContent.className = 'window-content';
    windowContent.appendChild(main);

    appWindow.appendChild(windowContent);
    document.body.insertBefore(appWindow, footer);
});

