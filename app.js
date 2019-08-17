const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

class pokemons1
{
        constructor(name,type)
        {
        this.id = null
        this.name = name
        this.type = type
        }

}
let pokemons = []
    pokemons.push(create_pokemon('Pikachu','Electhic')),
    pokemons.push(create_pokemon('Goduk','Water')),
    pokemons.push(create_pokemon('Prayut','KUY'))



app.get("/pokemons", (req, res) => res.send(pokemons))


app.post("/pokemons", (req, res) => {
    //let NewId = pokemons.length+1 ย้ายไปทำใน function generateId
    //let p = req.body
    let p = new pokemons1(req.body.name , req.body.type)
    p.id = generateId()

    console.log(req.body)
    pokemons.push(p)
    res.sendStatus(201)
})


app.listen(port, () => console.log(`Pokemon!! API listening on port ${port}!`))

function generateId()
{
    let NewId = pokemons.length+1
    return NewId
}

function create_pokemon(name,type)
{
    let p = new pokemons1(name,type)
    p.id = generateId()
    return p
} 
