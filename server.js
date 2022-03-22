const { syncAndSeed, Flower } = require('./db')
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/flowers', async (req, res, next) => {
    try {
       res.send(await Flower.findAll()) 
    }
    catch (ex) {
       next(ex) 
    }
})

app.post('/api/flowers', async (req, res, next) => {
    try {
       res.status(201).send(await Flower.create(req.body)) 
    }
    catch (ex) {
       next(ex) 
    }
})

app.delete('/api/flowers/:id', async (req, res, next) => {
    try {
       const flower = await Flower.findByPk(req.params.id) 
       await flower.destroy();
       res.sendStatus(204);
    }
    catch (ex) {
       next(ex) 
    }
})



const start = async () => {
    try {
      await syncAndSeed()
      const port = process.env.PORT || 3000;
      app.listen(port, ()=> console.log(`listening on port ${port}`));

    }
    catch (ex) {
        console.log(ex)
    }
}

start()

