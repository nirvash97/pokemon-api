const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
let pokemon = [
    {name : 'pikachu' ,
    type: 'Electri'},
    {
        name : 'T-rex' ,
        type: 'rex',
    }
]
app.get("/", (req, res) => res.send("Hello World! Pokemon"));
app.get("/pokemons", (req, res) => res.send(pokemon));
app.post("/pokemons",(req,res) => 
{
    console.log(req.body)
    pokemon.push(req.body)
    res.sendStatus(201)
})
app.listen(port, () => console.log(`Pokemon-Api listening on port ${port}!`));
