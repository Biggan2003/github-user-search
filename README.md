# GitHub User Details Search

A professional GitHub User Search and Profile Explorer built with **TypeScript, Vite, and the GitHub REST API**.

The application allows users to search for any public GitHub user and view their profile information, GitHub statistics, and public repositories through a clean and responsive interface.

---

## How It Works

```text
User enters username
        ↓
   SearchForm
        ↓
     main.ts
        ↓
   GitHub REST API
        ↓
 ┌──────┴──────┐
 ↓             ↓
User Data   Repository Data
 ↓             ↓
UserProfile  RepositoryList
        ↓
      UI
```


## 🚀 Features

### 👤 User Profile

Search for a GitHub username and view:

- Full name
- GitHub username
- Profile avatar
- Bio
- Location
- Company
- Account creation date
- Profile update date
- Direct GitHub profile link

### 📊 GitHub Statistics

The application displays:

- Public repositories
- Followers
- Following
- Public gists

### 📦 Repository Explorer

For the searched GitHub user, the application displays up to 10 recently updated public repositories.

Each repository includes:

- Repository name
- Repository description
- Primary programming language
- Star count
- Fork count
- Direct repository link

### ⚠️ Error Handling

The application handles:

- Empty username input
- GitHub user not found (`404`)
- Other API errors
- Missing GitHub profile information
- Missing repository descriptions

### 🎨 UI

The interface includes:

- Responsive layout
- GitHub-inspired color palette
- Clean profile cards
- Repository cards
- Hover interactions
- Lucide SVG icons
- Mobile-friendly design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Type-safe application logic |
| Vite | Development server and build tool |
| HTML5 | Application structure |
| CSS3 | UI styling and responsive design |
| GitHub REST API | Real GitHub user and repository data |
| Lucide | SVG icons |

---

## 📁 Project Structure

```text
github-user-search/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── api/
│   │   └── github.ts
│   │
│   ├── components/
│   │   ├── SearchForm.ts
│   │   ├── UserProfile.ts
│   │   └── RepositoryList.ts
│   │
│   ├── types/
│   │   └── github.ts
│   │
│   ├── utils/
│   │   └── formatDate.ts
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   └── main.ts
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

```

## File Responsibilities

| File | Purpose |
|---|---|
| `main.ts` | Connects the application components and controls the search flow |
| `api/github.ts` | Fetches users and repositories from GitHub API |
| `types/github.ts` | Defines TypeScript interfaces for GitHub data |
| `components/SearchForm.ts` | Handles username input and search |
| `components/UserProfile.ts` | Displays user profile and statistics |
| `components/RepositoryList.ts` | Displays repositories |
| `utils/formatDate.ts` | Converts API dates into readable dates |
| `styles/main.css` | Handles the complete UI styling |
| `index.html` | Application entry point |



### Get User

```http
GET https://api.github.com/users/{username}
```

### Get Repositories

```http
GET https://api.github.com/users/{username}/repos
```

### API Version

```http
X-GitHub-Api-Version: 2026-03-10
```


## Installation & Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd github-user-search
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173/
```

### 5. Search a User

Enter a GitHub username, for example:

```text
octocat
```

and click **Search**.

## Error Handling

If the username does not exist:

```text
User not found
```

Missing information is handled with fallback values such as:

```text
Bio: No bio available
```

## Icons

The project uses Lucide SVG icons for interface elements such as:

- `MapPin`
- `Building2`
- `CalendarDays`
- `RefreshCw`
- `GitFork`

## Official Documentation

GitHub REST API:

https://docs.github.com/en/rest/users/users?apiVersion=2026-03-10

Lucide:

https://lucide.dev/

Vite:

https://vite.dev/

TypeScript:

https://www.typescriptlang.org/

## Author

**G. M Biggan**

GitHub: https://github.com/Biggan2003
