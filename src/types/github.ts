// GitHub User API response-এর structure
// আমরা যে fields ব্যবহার করব, সেগুলোর type এখানে define করছি.

export interface GitHubUser {
    // GitHub username
    login: string;

    // User-এর profile image URL
    avatar_url: string;

    // User-এর display name
    // GitHub API-তে এটি null হতে পারে.
    name: string | null;

    // User-এর bio
    // Bio না থাকলে GitHub API null দিতে পারে.
    bio: string | null;

    // User-এর company
    company: string | null;

    // User-এর location
    location: string | null;

    // User-এর personal website/blog
    blog: string | null;

    // Twitter username
    twitter_username: string | null;

    // Public repositories সংখ্যা
    public_repos: number;

    // Public gists সংখ্যা
    public_gists: number;

    // Followers সংখ্যা
    followers: number;

    // Following সংখ্যা
    following: number;

    // GitHub account তৈরি হওয়ার date
    created_at: string;

    // GitHub profile-এর last update date
    updated_at: string;

    // Direct GitHub profile URL
    html_url: string;
}

// GitHub repository-এর structure.
// Repository API থেকে আমরা যেসব information ব্যবহার করব,
// সেগুলো এখানে define করছি.

export interface GitHubRepository {
    // Repository-এর নাম
    name: string;

    // Repository-এর description
    description: string | null;

    // Repository URL
    html_url: string;

    // Programming language
    language: string | null;

    // Star count
    stargazers_count: number;

    // Fork count
    forks_count: number;

    // Repository visibility
    visibility: string;

    // Repository তৈরি হওয়ার date
    created_at: string;

    // Repository last update date
    updated_at: string;
}
