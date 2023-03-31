<script>
    let query = "";
    let heroes = [];

    const fetchHeroes = async () => {
        heroes = [];

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
    };

    const onKeyPress = (e) => {
        if (e.charCode === 13) fetchHeroes();
    };

    const handleClick = () => {
        promise = fetchHeroes();
    };
</script>

<div class="grid">
    <input
        type="text"
        bind:value={query}
        placeholder="Search for heroes and villains"
        on:submit={fetchHeroes}
        on:keypress={onKeyPress}
        preventdefault
    />
    <button type="submit" on:click={handleClick} preventdefault>Search</button>
</div>
<hr />

<div class="heroes">
    {#if heroes}
        {#each heroes as hero}
            <div class="hero-card">
                <div class="gradient" />
                <div class="hero-info">
                    <p>{hero.name}</p>
                    <small>{hero.biography.publisher}</small>
                </div>
                <img src={hero.image.url} alt={hero.name} />
            </div>
        {/each}
    {:else}
        <p>Something wrong. try again</p>
    {/if}
</div>

<style lang="scss">
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
