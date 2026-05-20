const inputEl = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const messageEl = document.getElementById("message");
const outputWrapper = document.getElementById("outputWrapper");
const outputEl = document.getElementById("outputText");

async function translate() {
    const text = inputEl.value.trim();
    messageEl.textContent = "";
    outputWrapper.classList.add("hidden");
    outputEl.textContent = "";

    if (!text) {
        messageEl.textContent = "Please enter a sentence to translate.";
        return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Translating...";

    try {
        const res = await fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        const data = await res.json();

        if (!res.ok) {
            messageEl.textContent = data.error || "Something went wrong.";
            return;
        }

        outputEl.textContent = data.translation;
        outputWrapper.classList.remove("hidden");
    } catch (err) {
        messageEl.textContent = "Network error. Please try again.";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
    }
}

submitBtn.addEventListener("click", translate);

inputEl.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        translate();
    }
});
