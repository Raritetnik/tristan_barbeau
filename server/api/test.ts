export default defineEventHandler((event) => {
    if (event.method === 'GET') {
        return 'GETTED';
    }
    if (event.method === 'POST') {
        return 'POSTED';
    }
})