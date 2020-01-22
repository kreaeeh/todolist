const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('hello world!!')  
})


    const server = app.listen('8080 ', () => {
            const host = server.address().address
            const port = server.address().port
            console.log('todoList app is at http://%s:%s',host,port)
    })