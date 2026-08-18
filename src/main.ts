// GitHub API থেকে আমরা যেসব user information ব্যবহার করব,
// সেগুলোর structure TypeScript-কে জানাচ্ছি.
import "./style.css";
interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string | null;
    bio: string | null;
}


// GitHub API থেকে username অনুযায়ী user data fetch করার function.
async function getUser(username: string): Promise<GitHubUser> {

    // GitHub-এর official "Get a user" endpoint.
    // Endpoint: GET /users/{username}
    const response = await fetch(
        `https://api.github.com/users/${username}`,
        {
            // GitHub documentation অনুযায়ী recommended header.
            headers: {
                "Accept": "application/vnd.github+json",

                // GitHub API version specified in your documentation.
                "X-GitHub-Api-Version": "2026-03-10"
            }
        }
    );


    // fetch() 404 বা 500-এর মতো HTTP response-এর জন্য
    // automatically error throw করে না.
    // তাই response.ok manually check করছি.
    if (!response.ok) {

        // Username না পাওয়া গেলে GitHub 404 দেয়.
        if (response.status === 404) {
            throw new Error("User not found");
        }

        // অন্য কোনো HTTP error হলে status দেখাব.
        throw new Error(`HTTP ${response.status}`);
    }


    // API response-এর JSON data return করছি.
    return response.json() as Promise<GitHubUser>;
}


// HTML-এর form element ধরছি.
const form = document.querySelector<HTMLFormElement>(
    "#search-form"
)!;


// Username input element ধরছি.
const usernameInput = document.querySelector<HTMLInputElement>(
    "#username"
)!;


// Loading message দেখানোর element.
const loading = document.querySelector<HTMLParagraphElement>(
    "#loading"
)!;


// Error message দেখানোর element.
const errorMessage = document.querySelector<HTMLParagraphElement>(
    "#error"
)!;


// User information দেখানোর element.
const result = document.querySelector<HTMLDivElement>(
    "#result"
)!;


// Form submit হলে এই function চলবে.
form.addEventListener("submit", async (event) => {

    // Form submit করলে browser যেন page reload না করে.
    event.preventDefault();


    // আগের result এবং error পরিষ্কার করছি.
    result.innerHTML = "";
    errorMessage.textContent = "";


    // Input থেকে username নিচ্ছি.
    const username = usernameInput.value.trim();


    // Username না দিলে error দেখাব.
    if (!username) {
        errorMessage.textContent =
            "Please enter a GitHub username.";

        return;
    }


    // API request চলার সময় Loading দেখাব.
    loading.textContent = "Loading...";


    try {

        // GitHub API থেকে real user data fetch করছি.
        const user = await getUser(username);


        // API থেকে পাওয়া data UI-তে display করছি.
        result.innerHTML = `
            <div class="user-card">

                <img
                    src="${user.avatar_url}"
                    alt="${user.login}"
                    class="avatar"
                />

                <h2>${user.name ?? user.login}</h2>

                <p>
                    <strong>Username:</strong>
                    @${user.login}
                </p>

                <p>
                    <strong>Bio:</strong>
                    ${user.bio ?? "No bio available"}
                </p>

            </div>
        `;

    } catch (error) {

        // কোনো error হলে সেটা handle করছি.
        if (error instanceof Error) {
            errorMessage.textContent = error.message;
        } else {
            errorMessage.textContent =
                "Something went wrong.";
        }

    } finally {

        // Request শেষ হলে Loading message সরিয়ে দেব.
        loading.textContent = "";
    }
});
