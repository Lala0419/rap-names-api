
const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
    '21 savage' :{'age':29,
                  'birthName': 'Sheyaa Bin Abraham-Joseph',
                  'birthLocation': 'London, England'
                 },
    'chance the rapper' :{
                 'age':29,
                  'birthName': 'Chancelor Bennett',
                  'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
                'age':0,
                'birthName':'unknown',
                'birthLocation':'unknown'
    }

}

app.get('/', (request, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:pepe',(request,res)=>{
   const rapperName=request.params.pepe.toLowerCase()
   
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})
app.listen(PORT, ()=>{
    console.log(`The server id now running on port ${PORT}! better go catch it!`)
})