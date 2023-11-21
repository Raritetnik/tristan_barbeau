import data from '@/assets/data/house.json'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    let listHouses = data.liste;
    let pageNumber = Number(query.page !== undefined ? query.page : 1);
    let pageListHouses = listHouses.slice(16 * (pageNumber - 1), 16 * pageNumber);
    const numberOfPages = Math.ceil(data.liste.length / 16);
    let response = {
        liste: pageListHouses,
        pages: numberOfPages,
        actualPage: query.page,
    }
    return response;
})