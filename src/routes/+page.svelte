<script>
    import { fetchHeroes } from "../stores/Store";
    import Cards from "../components/Cards.svelte";

    export let heroes = [];
    export let query = "";

    async function handleClick() {
        heroes = await fetchHeroes(query);
        query = "";
    }

    async function onKeyPress(e) {
        if (e.charCode === 13) {
            heroes = await fetchHeroes(query);
        }
    }
</script>

<main class="container">
    <div class="grid">
        <input
            type="text"
            bind:value={query}
            placeholder="Search for heroes and villains"
            on:keypress={onKeyPress}
        />

        <button type="submit" on:click={handleClick}>Search</button>
    </div>

    {#if heroes}
        <div class="heroes">
            {#each heroes as hero}
                <a type="button" href="/battle/{hero.id}">
                    <Cards {hero} />
                </a>
            {/each}
        </div>
    {:else}
        <p>Something wrong. try again</p>
    {/if}
</main>

<style lang="scss" global>
    .container {
        margin: auto;
        max-width: 1190px;
    }
    .grid {
        display: flex;
        input {
            flex: 1;
        }
    }
    .heroes {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
    }
    .hero-card {
        position: relative;
        color: white;
        max-width: 200px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid black;
        outline: 6px solid rgb(72, 89, 107);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        .gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.8) 80%
            );
        }

        .hero-info {
            position: absolute;
            left: 16px;
            bottom: 16px;

            p {
                margin: 0;
                font-size: 20px;
                font-weight: 500;
            }
            small {
                opacity: 0.7;
                font-size: 14px;
            }
        }
        img {
            height: 100%;
            object-fit: cover;
        }
    }
</style>
