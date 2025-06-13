(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "NAWA OO fr?",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const h1 = document.querySelector('.text-box');

    // Check if the current message is "NAWA OO fr?" (index 3)
    if (noButton.textContent === "NAWA OO fr?") {
        h1.classList.add("transitioning");
        setTimeout(() => {
            h1.textContent = "Do you prefer your Man to Me";
            h1.classList.remove("transitioning");
        }, 300);
    }

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


// script.js
const header = document.getElementById('myHeader');
const textBox = document.getElementById('textBox');
const button = document.getElementById('no-button');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 4) {
    // Fade in h1
    header.style.opacity = 0;
    header.textContent = 'Maybe you dont get the question';
    let headerOpacity = 0;
    function fadeInHeader() {
      if (headerOpacity < 1) {
        headerOpacity += 0.02;
        header.style.opacity = headerOpacity;
        requestAnimationFrame(fadeInHeader);
      }
    }
    fadeInHeader();

    // Show and fade in text box
    textBox.style.display = 'block'; // Make visible
    textBox.style.opacity = 0; // Start invisible
    let textBoxOpacity = 0;
    function fadeInTextBox() {
      if (textBoxOpacity < 1) {
        textBoxOpacity += 0.02;
        textBox.style.opacity = textBoxOpacity;
        requestAnimationFrame(fadeInTextBox);
      }
    }
    fadeInTextBox();
  }
});