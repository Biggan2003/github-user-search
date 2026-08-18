// GitHub API-এর ISO date string
// readable date format-এ convert করার function.
export function formatDate(dateString: string): string {

    // GitHub থেকে পাওয়া date string-কে
    // JavaScript Date object-এ convert করছি.
    const date = new Date(dateString);


    // Date-কে সুন্দর readable format-এ return করছি.
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
