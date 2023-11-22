//import data from '@/assets/data/house.json'
import data from '@/assets/data/MOCK_DATA.json';

export default defineEventHandler(async (event) => {
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