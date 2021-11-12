
//in js per importare si usa sempre la variavile const
//e la funzione require (abbiamo così fatto l'equivalente dell'
//import su java)
const express = require('express')
//instanziamo l'app, che è come instanziare il costruttore in java
const app = express()
//req e res sono le variabili che ci danno accesso alla richiesta e 
//alla risposta (in realtà possiamo chiamarle come vogliamo, sono variabili)

//creo un array di player. Con il push riempio l'array, che in questo 
//caso riempio con oggetti generici ai quali do gli attributi che mi servono
const myPlayers = []
myPlayers.push({"id":1, "name": "edo","surname":"cerchiara"})
myPlayers.push({"id":2, "name": "michela","surname":"minniti"})
myPlayers.push({"id":3, "name": "william","surname":"iuliano"})
myPlayers.push({"id":4, "name": "fabiano","surname":"colombo"})
myPlayers.push({"id":5, "name": "ludovica","surname":"desanctis"})

//così diciamo ad express di usare questo driver, che prende il body
//della richiesta json in un oggetto interpretabile
app.use(express.json())
//se volessi aggiungere l'età, e posso farlo anche ad un solo elemento:
myPlayers[0].age=29

app.get("/hello-World", (req, res)=>{
    res.status(300).send("ciao mondo!!")
    
})
//il metodo json prende qualsiasi oggetto e costruisce un json
app.get("/players", (req, res)=>{
    res.status(200).json(myPlayers)
})
//con l'url nella get possiamo specificare direttamente l'attributo che vogliamo 
//per prima cosa dobbiamo effettuare l'accesso all'id degli elementi
app.get("/players/:id", (req, res)=>{
    const playerById = myPlayers[req.params.id-1]
    res.json(playerById)

})
//aggiungiamo un nuovo player con una richiesta POST
//con req.body ci prendiamo il corpo della richiesta, quindi un json
//dobbimamo trasformare il json in oggetto che ho passato
app.post("/players", (req, res)=>{
    console.log(req.body)
    myPlayers.push(req.body)
    res.status(200).send
})



//mettiamo in ascolto l'applicazione che stiamo costruendo sulla porta 3000
//che è quella usata per le app js per convenzione con il metodo listen
app.listen(3000)