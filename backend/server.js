import express from 'express'
import products from './data/product'
const port = 5000;

const app = express()

app.get('/',(req,res)=>{
  res.send('Api is running')
})

app.get('/',(req,res)=>{
  res.send(products)
})

app.listen(port,()=>{
  console.log(`Server running of ${port}`)
})