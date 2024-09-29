// Rastgele bir alıntı (quote) oluşturur
async function generateQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById("quoteResult").textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById("quoteResult").textContent = "Error fetching quote.";
    }
}

// Rastgele bir takma ad (nickname) oluşturur
async function generateNickname() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const nickname = data.results[0].login.username;
        document.getElementById("nicknameResult").textContent = nickname;
    } catch (error) {
        console.error('Nickname fetch error:', error);
        document.getElementById("nicknameResult").textContent = "Error fetching nickname.";
    }
}


// Rastgele bir şifre (password) oluşturur
function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("quotePassword").textContent = password;
}

// Kopyala butonlarının işlevi
function copyToClipboard(textId, alertMessage) {
    const text = document.getElementById(textId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(alertMessage);
    });
}

// Butonlara event listener ekler
document.getElementById("generateQuote").addEventListener("click", generateQuote);
document.getElementById("generateNickname").addEventListener("click", generateNickname);
document.getElementById("generatePassword").addEventListener("click", generatePassword);

document.getElementById("copyQuoteButton").addEventListener("click", () => {
    copyToClipboard("quoteResult", "Quote copied to clipboard!");
});

document.getElementById("copyNicknameButton").addEventListener("click", () => {
    copyToClipboard("nicknameResult", "Nickname copied to clipboard!");
});

document.getElementById("copyPasswordButton").addEventListener("click", () => {
    copyToClipboard("quotePassword", "Password copied to clipboard!");
});

function copyEmail() {
    const email = document.getElementById('email');
    navigator.clipboard.writeText(email.innerText).then(() => {
        alert('E-posta adresi kopyalandı!');
    }).catch(err => {
        console.error('Kopyalama hatası: ', err);
    });
}

