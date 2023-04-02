
import { writable } from "svelte/store";

export let heroes = writable([]);

export async function fetchHeroes(query) {
    // heroes = []
    const res = await fetch(
        `https://superheroapi.com/api/910406413624867/search/${query}`
    );
    if (res.ok) {
        const data = await res.json();
        heroes = data.results;
        console.log(heroes);
        return heroes;
    } else {
        throw new Error("Something wrong. Try again");
    }
}

