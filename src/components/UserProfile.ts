// GitHubUser type import করছি.
// এতে আমরা নিশ্চিত থাকব যে profile-এর data
// সঠিক structure follow করছে.
import type { GitHubUser } from "../types/github";
import { formatDate } from "../utils/formatDate";


// GitHub user-এর complete profile card তৈরি করার function.
export function createUserProfile(
    user: GitHubUser
): HTMLDivElement {

    // Main profile card তৈরি করছি.
    const card = document.createElement("div");

    card.className = "user-card";


    // User avatar.
    const avatar = document.createElement("img");

    avatar.className = "avatar";
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;


    // User name.
    const name = document.createElement("h2");

    // name null হলে username দেখাবে.
    name.textContent = user.name ?? user.login;


    // GitHub username.
    const username = document.createElement("p");

    username.innerHTML = `
        <strong>@${user.login}</strong>
    `;


    // User bio.
    const bio = document.createElement("p");

    bio.innerHTML = `
        <strong>Bio:</strong>
        ${user.bio ?? "No bio available"}
    `;


    // User location.
    const location = document.createElement("p");

    location.innerHTML = `
        <strong> Location:</strong>
        ${user.location ?? "Not available"}
    `;


    // Company.
    const company = document.createElement("p");

    company.innerHTML = `
        <strong>🏢 Company:</strong>
        ${user.company ?? "Not available"}
    `;

    // Account creation date.
    const createdAt = document.createElement("p");

    createdAt.innerHTML = `
        <strong>📅 Joined:</strong>
        ${formatDate(user.created_at)}
    `;


    // Last profile update date.
    const updatedAt = document.createElement("p");

    updatedAt.innerHTML = `
        <strong>🔄 Updated:</strong>
        ${formatDate(user.updated_at)}
    `;



    // Statistics section.
    const stats = document.createElement("div");

    stats.className = "user-stats";


    // Public repositories.
    const repositories = document.createElement("div");

    repositories.innerHTML = `
        <strong>${user.public_repos}</strong>
        <span>Repositories</span>
    `;


    // Followers.
    const followers = document.createElement("div");

    followers.innerHTML = `
        <strong>${user.followers}</strong>
        <span>Followers</span>
    `;


    // Following.
    const following = document.createElement("div");

    following.innerHTML = `
        <strong>${user.following}</strong>
        <span>Following</span>
    `;


    // Public gists.
    const gists = document.createElement("div");

    gists.innerHTML = `
        <strong>${user.public_gists}</strong>
        <span>Gists</span>
    `;


    // Statistics card-এর মধ্যে যোগ করছি.
    stats.appendChild(repositories);
    stats.appendChild(followers);
    stats.appendChild(following);
    stats.appendChild(gists);


    // GitHub profile link.
    const profileLink = document.createElement("a");

    profileLink.href = user.html_url;
    profileLink.target = "_blank";
    profileLink.rel = "noopener noreferrer";
    profileLink.textContent = "View GitHub Profile";


    // সব elements profile card-এর মধ্যে যোগ করছি.
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(bio);
    card.appendChild(location);
    card.appendChild(company);

    // Account dates
    card.appendChild(createdAt);
    card.appendChild(updatedAt);

    card.appendChild(stats);
    card.appendChild(profileLink);


    // সম্পূর্ণ profile card return করছি.
    return card;
}

