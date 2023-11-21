export default defineEventHandler((event) => {
    return {success: true};
    /*if (event.method === 'GET') {
        return 'GETTED';
    }
    if (event.method === 'POST') {
        return 'POSTED';
    }*/
})