/* ================================
   1️⃣ ADVANCED FRAUD MESSAGE CHECK
================================ */

function checkMessage() {

    let text = document.getElementById("fraudText").value.toLowerCase().trim();
    let result = document.getElementById("fraudResult");

    if (text === "") {
        result.innerHTML = "Please enter a message.";
        result.style.color = "orange";
        return;
    }

    const highRiskWords = [
        "otp", "verify", "bank", "account suspended",
        "lottery", "winner", "claim now", "urgent",
        "immediately", "click here", "limited time",
        "reward", "investment", "crypto", "free money"
    ];

    const moneyWords = [
        "money", "cash", "prize", "bonus", "offer"
    ];

    let score = 0;

    highRiskWords.forEach(word => {
        if (text.includes(word)) score += 2;
    });

    moneyWords.forEach(word => {
        if (text.includes(word)) score += 1;
    });

    // Detect suspicious links
    if (text.includes("http") || text.includes("www") || text.includes(".com")) {
        score += 2;
    }

    // Detect urgency + money combo
    if ((text.includes("urgent") || text.includes("immediately")) &&
        (text.includes("money") || text.includes("prize"))) {
        score += 3;
    }

    // Final decision
    if (score >= 6) {
        result.innerHTML = "🚨 HIGH RISK SCAM DETECTED!";
        result.style.color = "red";
    }
    else if (score >= 3) {
        result.innerHTML = "⚠️ Suspicious message. Be careful.";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "✅ Message appears safe.";
        result.style.color = "green";
    }
}
/* ================================
   2️⃣ FAKE LINK DETECTOR
================================ */

function checkLink() {

    let link = document.getElementById("linkInput").value.toLowerCase().trim();
    let result = document.getElementById("linkResult");

    if (link === "") {
        result.innerHTML = "Please enter a link.";
        result.style.color = "orange";
        return;
    }

    let score = 0;

    const highRiskWords = [
        "verify", "kyc", "bonus", "reward",
        "free", "otp", "urgent", "login",
        "update", "secure", "bank"
    ];

    const dangerousDomains = [
        ".xyz", ".top", ".click", ".ru", ".shop", ".info"
    ];

    highRiskWords.forEach(word => {
        if (link.includes(word)) score += 2;
    });

    dangerousDomains.forEach(domain => {
        if (link.includes(domain)) score += 3;
    });

    if (link.includes("@")) score += 3;
    if (!link.startsWith("https")) score += 2;

    if (score >= 6) {
        result.innerHTML = "🚨 HIGH RISK FAKE LINK!";
        result.style.color = "red";
    }
    else if (score >= 3) {
        result.innerHTML = "⚠️ Suspicious link.";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "✅ Link looks safe.";
        result.style.color = "green";
    }
}


/* ================================
   3️⃣ FAKE PROFILE DETECTOR
================================ */

function checkProfile() {

    let text = document.getElementById("profileInput").value.toLowerCase().trim();
    let result = document.getElementById("profileResult");

    if (text === "") {
        result.innerHTML = "Enter profile details.";
        result.style.color = "orange";
        return;
    }

    let score = 0;

    const scamIndicators = [
        "crypto", "investment", "guaranteed return",
        "quick money", "business opportunity",
        "dm me", "whatsapp", "telegram",
        "army officer", "syria", "foreign",
        "send money", "loan offer",
        "rich investor"
    ];

    scamIndicators.forEach(word => {
        if (text.includes(word)) score += 2;
    });

    if (text.includes("model") && text.includes("dm")) score += 2;

    if (score >= 6) {
        result.innerHTML = "🚨 HIGH RISK FAKE PROFILE!";
        result.style.color = "red";
    }
    else if (score >= 3) {
        result.innerHTML = "⚠️ Profile looks suspicious.";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "✅ Profile appears normal.";
        result.style.color = "green";
    }
}

/* ================================
   DIGITAL SAFETY ASSISTANT
================================ */

function askAssistant() {

    let input = document.getElementById("assistantInput").value.toLowerCase().trim();
    let result = document.getElementById("assistantResult");

    if (input === "") {
        result.innerHTML = "Please ask a question.";
        result.style.color = "orange";
        return;
    }

    let response = "";

    if (input.includes("otp")) {
        response = "🚨 Never share your OTP with anyone. Banks never ask for OTP.";
    }
    else if (input.includes("phishing") || input.includes("fake message")) {
        response = "⚠️ Check sender, avoid clicking unknown links, and verify before responding.";
    }
    else if (input.includes("password")) {
        response = "🔐 Use strong passwords with letters, numbers, and symbols.";
    }
    else if (input.includes("upi") || input.includes("pin")) {
        response = "🚨 Never share your UPI PIN. No one needs your PIN to send money.";
    }
    else if (input.includes("scam call") || input.includes("fake call")) {
        response = "📞 Disconnect immediately if someone asks for bank or personal details.";
    }
    else {
        response = "🤖 Stay alert online. Never share personal, OTP, or banking details with unknown people.";
    }

    result.innerHTML = response;
    result.style.color = "lightblue";
}



/* ================================
   5️⃣ SMART PERSONAL DATA MASKING
================================ */

function maskPersonalData() {

    let text = document.getElementById("maskInput").value;
    let result = document.getElementById("maskResult");

    if (text.trim() === "") {
        result.innerHTML = "Please enter text.";
        result.style.color = "orange";
        return;
    }

    // Mask phone numbers
    text = text.replace(/\b\d{10}\b/g, "**********");

    // Mask OTP
    text = text.replace(/\b\d{4,6}\b/g, "****");

    // Mask email
    text = text.replace(
        /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
        "[email hidden]"
    );

    // Mask card numbers
    text = text.replace(/\b\d{16}\b/g, "****************");

    result.innerHTML = text;
    result.style.color = "yellow";
}
function goToDetection() {
    window.location.href = "/detection";
}