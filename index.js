const { request, response } = require('express');
const { readFile } = require('fs').promises;
const express = require('express');
const app = express();
//------------- app.get(/url, callbackfunction) ----------//

app.get('/', async (request, response) => {
    response.send(await readFile('./hello.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log(`App available  port is http://localhost:3000`));