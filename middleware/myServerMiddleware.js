// middleware/myServerMiddleware.js

const express = require('express');
const app = express();


app.get('/api/data', (req, res) => {
    console.log('Запрос к /api/data получен');
    res.json({message: 'Привет, это данные из сервера!'});
});

export default function (req, res, next) {
    app(req, res, next);
}
