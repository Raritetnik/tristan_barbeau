//import data from '@/assets/data/house.json'
import data from '@/assets/data/MOCK_DATA.json';

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const result = data.liste.filter(e => {
        return e.code == query.houseId;
    })
    return result[0];
})