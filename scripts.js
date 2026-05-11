window.githubPushes = 15;

document.querySelectorAll(".github-push-count").forEach((pushCounter) => {
    pushCounter.textContent = window.githubPushes;
});

document.querySelectorAll(".external-message").forEach(async (el) => {
    const file = el.dataset.textSource;

    try {
        const response = await fetch(file);
        const text = await response.text();

        el.textContent = text;
    } catch (err) {
        el.textContent = "Could not load text.";
        console.error(err);
    }
});