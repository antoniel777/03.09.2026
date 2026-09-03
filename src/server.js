import express from 'express'

const app = express()
const port =3000

app.use(express.json())

app.get("/",(_req,res) =>{
      res.json("hello  wolrd")
})

app.listen(port, () =>{
      console.log(` API rodando em: http://localhost:${port}`)
})