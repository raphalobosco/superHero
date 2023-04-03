export const load = ({ fetch, params }) => {
    console.log(params)

    const fetchHero = async (id) => {
        const res = await fetch(`https://superheroapi.com/api/910406413624867/${id}`)
        const data = await res.json()
        return data
    }

    return {
        hero: fetchHero(params.slug)
    }

}