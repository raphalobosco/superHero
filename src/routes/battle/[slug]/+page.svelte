<script>
    import Cards from "../../../components/Cards.svelte";
    export let data;
    const { hero } = data;
</script>

<h1>{hero.name}</h1>
<Cards {hero} />
