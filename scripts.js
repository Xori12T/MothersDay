window.githubPushes = 13;

document.querySelectorAll(".github-push-count").forEach((pushCounter) => {
    pushCounter.textContent = window.githubPushes;
});