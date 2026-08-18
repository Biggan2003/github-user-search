// SearchForm component-এর জন্য একটি callback type.
// Search button চাপলে username এই function-এর মাধ্যমে
// main.ts-এ পাঠানো হবে.
export interface SearchFormProps {
    onSearch: (username: string) => void;
}


// GitHub username search form তৈরি করে.
export function createSearchForm(
    props: SearchFormProps
): HTMLFormElement {

    // Form element তৈরি করছি.
    const form = document.createElement("form");

    // Form-এর ID দিচ্ছি.
    form.id = "search-form";


    // Username input তৈরি করছি.
    const input = document.createElement("input");

    input.id = "username";
    input.type = "text";
    input.placeholder = "Enter GitHub username";
    input.autocomplete = "off";


    // Search button তৈরি করছি.
    const button = document.createElement("button");

    button.type = "submit";
    button.textContent = "Search";


    // Input এবং button form-এর মধ্যে যোগ করছি.
    form.appendChild(input);
    form.appendChild(button);


    // Form submit হলে এই function চলবে.
    form.addEventListener("submit", (event) => {

        // Browser-এর default form submission বন্ধ করছি.
        event.preventDefault();


        // Input থেকে username নিচ্ছি.
        const username = input.value.trim();


        // Username না থাকলে search করব না.
        if (!username) {
            input.focus();
            return;
        }


        // Username parent/main.ts-এ পাঠাচ্ছি.
        props.onSearch(username);
    });


    // তৈরি করা form return করছি.
    return form;
}
