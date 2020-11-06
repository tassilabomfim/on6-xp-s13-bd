const model = require('../models/gamesSchema')


const getgames =  (req,res) => {
    console.log(req.url)
    model.gamesCollection.find((error, games) => {
        if(error){
            return res.status(500).send(error)
        } else {
            return res.status(200).send(games)
        }
    })
}

//getgamesById
const getgamesById =  (req,res) => {
    const idParam = req.params.id
    model.gamesCollection.findById(idParam, (error, games) =>{
        if(error){
            return res.status(500).send(error)
        } else {
            if(games){
                return res.status(200).send(games)
            } else {
                return res.status(404).send("Game não encontrado :(")
            }
        }
    })
}

//addgames 
const addgames = (req,res) => {
    console.log(req.url)
    const gamesBody = req.body
    const games = new model.gamesCollection(gamesBody)

    games.save((error) => {
        if(error){
            return res.status(400).send(error);
        } else {
            return res.status(201).send(games);
        }
    })
}

//updategames 
const updategames = (req, res) => {
    const idParam = req.params.id
    const gamesBody = req.body
    const novo = {new: true}

    model.gamesCollection.findByIdAndUpdate(
        idParam, gamesBody,
        novo,
        (error, games) => {
            if(error){
                return res.status(500).send(error)
            } else if (games) {
                return res.status(200).send(gamesBody)
            } else {
                return res.sendStatus(404)
            }
        }
        )
}

//deletegames
const deletegames = (req, res) => {
    const idParam = req.params.id
    model.gamesCollection.findByIdAndDelete(idParam, (error, games) => {
        if(error) {
            return res.status(500).send(error)
        }else{
            if (games){
                return res.status(200).send("O game foi deletado.")
            }
        }
    })
}

module.exports = {
    getgames, 
    getgamesById, 
    addgames, 
    updategames, 
    deletegames 
}