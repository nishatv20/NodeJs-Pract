// const { response } = require('express');
// const express = require('express');
// const dbConnect = require('./mongodb');
// const app = express();

// app.use(express.json());

// app.get('/', async (req, res) => {
//     let data = await dbConnect();
//     data= await data.find().toArray();
//     console.log(data)
//     // res.send({ name: 'nishat' })
//     res.send(data)
// });

// app.post('/', async(req,res)=> {
//     // console.log(req.body)
//     let data = await dbConnect();
//     let result = await data.insert(req.body)
//     res.send(result)
// }) 


// app.put("/:name", async(req,res)=> {
//    let data =  await dbConnect();
//    let result = data.updateOne(
//     {name: req.params.name},
//     {$set: req.body}
//     )
//     res.send({result:"update"})
// })



// app.put('/', async(req,res)=> {
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name: "I phone"},
//         {$set:req.body}
//         )
//     // console.warn(req.body)
// res.send({status: "updated"})
// })

// app.delete("/:id",async (req,res)=> {
//     console.log(req.params.id)
//     const data = await dbConnect();
//     const result = data.deleteOne({name:"U10"})
//  res.send("done")
// })
app.listen(5000)