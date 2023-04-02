<script>
    import { heroes, fetchHeroes } from "../../stores/Store";

    export let heroName = "bane";
    let data = [];

    function loadHero(e) {
        data = fetchHeroes(e);
        console.log(data);
        return data;
    }
</script>

<div on:load={(e) => loadHero(heroName)}>
    {#if data.length > 0}
        <div class="heroes">
            {#if heroes}
                {#each heroes as hero}
                    <p>{hero.name}</p>
                {/each}
            {:else}
                <p>Something wrong. try again</p>
            {/if}
        </div>
    {/if}
</div>
