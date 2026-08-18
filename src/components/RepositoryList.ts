// GitHubRepository type import করছি.
// এতে repository data type-safe থাকবে.
import type { GitHubRepository } from "../types/github";


// Repository list তৈরি করার function.
export function createRepositoryList(
    repositories: GitHubRepository[]
): HTMLDivElement {

    // Main repository section.
    const container = document.createElement("div");

    container.className = "repositories";


    // Section title.
    const title = document.createElement("h3");

    title.textContent = "Repositories";


    container.appendChild(title);


    // কোনো repository না থাকলে message দেখাব.
    if (repositories.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.textContent =
            "No public repositories found.";

        container.appendChild(emptyMessage);

        return container;
    }


    // প্রতিটি repository-এর জন্য একটি card তৈরি করছি.
    repositories.forEach((repository) => {

        const card = document.createElement("article");

        card.className = "repository-card";


        // Repository name.
        const name = document.createElement("h4");

        const link = document.createElement("a");

        link.href = repository.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.textContent = repository.name;

        name.appendChild(link);


        // Repository description.
        const description = document.createElement("p");

        description.textContent =
            repository.description ??
            "No description available.";


        // Repository information.
        const meta = document.createElement("div");

        meta.className = "repository-meta";


        // Programming language.
        const language = document.createElement("span");

        language.textContent =
            `💻 ${repository.language ?? "Unknown"}`;


        // Stars.
        const stars = document.createElement("span");

        stars.textContent =
            `⭐ ${repository.stargazers_count}`;


        // Forks.
        const forks = document.createElement("span");

        forks.textContent =
            `🍴 ${repository.forks_count}`;


        // Meta information card-এ যোগ করছি.
        meta.appendChild(language);
        meta.appendChild(stars);
        meta.appendChild(forks);


        // সব information repository card-এ যোগ করছি.
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(meta);


        // Main repository container-এ card যোগ করছি.
        container.appendChild(card);
    });


    // Complete repository section return করছি.
    return container;
}
