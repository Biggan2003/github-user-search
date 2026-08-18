// GitHubUser interface import করছি.
// এটি API থেকে পাওয়া data-এর structure define করে.
import type {
    GitHubUser,
    GitHubRepository
} from "../types/github";


// GitHub API থেকে একজন user-এর information fetch করার function.
export async function getUser(
    username: string
): Promise<GitHubUser> {

    // GitHub-এর official "Get a user" endpoint.
    const response = await fetch(
        `https://api.github.com/users/${username}`,

        {
            headers: {
                // GitHub API-এর recommended media type.
                "Accept": "application/vnd.github+json",

                // আমাদের GitHub REST API version.
                "X-GitHub-Api-Version": "2026-03-10"
            }
        }
    );


    // fetch() 404 বা 500-এর মতো HTTP response-এর
    // জন্য automatically error throw করে না.
    //
    // তাই response.ok manually check করছি.
    if (!response.ok) {

        // User না পাওয়া গেলে GitHub 404 দেয়.
        if (response.status === 404) {
            throw new Error("User not found");
        }

        // অন্য কোনো HTTP error হলে status দেখাব.
        throw new Error(`GitHub API Error: ${response.status}`);
    }


    // Successful response-এর JSON data নিচ্ছি.
    const user: GitHubUser = await response.json();


    // Typed GitHubUser return করছি.
    return user;
}





// GitHub user-এর repositories fetch করার function.
export async function getRepositories(
    username: string
): Promise<GitHubRepository[]> {

    // GitHub REST API-এর repository endpoint.
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
        {
            headers: {
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2026-03-10"
            }
        }
    );


    // HTTP response successful কিনা check করছি.
    if (!response.ok) {

        throw new Error(
            `Repository API Error: ${response.status}`
        );
    }


    // Repository list JSON হিসেবে নিচ্ছি.
    const repositories: GitHubRepository[] =
        await response.json();


    // Typed repository list return করছি.
    return repositories;
}
