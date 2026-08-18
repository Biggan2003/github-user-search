// GitHub API function import করছি.
import {
    getUser,
    getRepositories
} from "./api/github";

import { createRepositoryList } from "./components/RepositoryList";

// Search form component import করছি.
import { createSearchForm } from "./components/SearchForm";

// User profile component import করছি.
import { createUserProfile } from "./components/UserProfile";

// Main CSS import করছি.
import "./styles/main.css";


// HTML-এর #app container ধরছি.
const app = document.querySelector<HTMLDivElement>("#app")!;


// ========================================
// Page Layout
// ========================================

// Main container তৈরি করছি.
const container = document.createElement("div");

container.className = "container";


// Page heading.
const title = document.createElement("h1");

title.textContent = "GitHub User Details Search";


// Subtitle.
const subtitle = document.createElement("p");

subtitle.className = "subtitle";

subtitle.textContent =
    "Search for any public GitHub user";


// Loading message.
const loading = document.createElement("p");

loading.id = "loading";


// Error message.
const error = document.createElement("p");

error.id = "error";


// User profile result container.
const result = document.createElement("div");

result.id = "result";


// ========================================
// Search Function
// ========================================

// Search button চাপলে এই function execute হবে.
async function handleSearch(username: string): Promise<void> {

    // আগের result এবং error পরিষ্কার করছি.
    result.innerHTML = "";
    error.textContent = "";


    // API request চলার সময় Loading দেখাচ্ছি.
    loading.textContent = "Loading...";


    try {

        // GitHub API থেকে real user data fetch করছি.
        const user = await getUser(username);


        // API থেকে পাওয়া user data দিয়ে
        // profile component তৈরি করছি.
        const profile = createUserProfile(user);


        // Profile browser-এ display করছি.
        result.appendChild(profile);

        // User-এর repositories fetch করছি.
        const repositories = await getRepositories(username);

        // Repository list তৈরি করছি.
        const repositoryList =
            createRepositoryList(repositories);


        // Repository list display করছি.
        result.appendChild(repositoryList);


    } catch (err) {

        // Error হলে error message দেখাচ্ছি.
        if (err instanceof Error) {

            error.textContent = err.message;

        } else {

            error.textContent =
                "Something went wrong.";

        }

    } finally {

        // API request শেষ হলে Loading message সরিয়ে দিচ্ছি.
        loading.textContent = "";
    }
}


// ========================================
// Search Form
// ========================================

// Search form তৈরি করছি.
// Search করলে handleSearch() function call হবে.
const searchForm = createSearchForm({
    onSearch: handleSearch
});


// ========================================
// Build the Page
// ========================================

// সব elements main container-এ যোগ করছি.
container.appendChild(title);
container.appendChild(subtitle);
container.appendChild(searchForm);
container.appendChild(loading);
container.appendChild(error);
container.appendChild(result);


// Main container #app-এর মধ্যে যোগ করছি.
app.appendChild(container);
