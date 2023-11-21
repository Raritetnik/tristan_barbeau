import express from 'express';
import bodyParser from 'body-parser';
import Mail from './mail.mjs'

const app = express();
const port = 3020; // Вы можете изменить порт по вашему выбору

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Обработчик для базового маршрута
app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.post('/mailContact', jsonParser, async (req, res) => {
    const {email, message, name, phone, dispos} = req.body;
    return res.json({result: await new Mail().sendContact(email, message, name, phone, dispos)})
})

app.post('/mailEvaluation', jsonParser, async (req, res) => {
    const {email, name, phone, adresse} = req.body;
    return res.json({result: await new Mail().sendEvaluation(email, name, phone, adresse)})
})

// Слушаем указанный порт
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

