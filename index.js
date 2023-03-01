// const http = require('http')
// const data = require('./data')
// http.createServer((req, resp)=> {
// resp.writeHead(200,{'Content-Type':'application\json'});
// // resp.write(JSON.stringify({name:'Nishat Verma', email:'verma.nishat@gmail.com'}));
// resp.write(JSON.stringify(data))
// resp.end();
// }).listen(5000)
// console.log("Code step by step");
// console.log(process.argv[3])

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2], input[3])

// const fs =require('fs');
// const input = process.argv;
// if(input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

// ----------------FILE LIST FROM FOLDER-------------

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// // console.warn(dirPath)
// // for(i=0; i<5; i++) {
// //     fs.writeFileSync(dirPath +`/hello ${i}.txt` , "a simple text file");
// // }

// // fs.readdir(dirPath,(err,files)=> {
// //    files.forEach((item)=> {
// //    console.log("file name is",  item)
// //    })

//     // console.warn(files)
// })

// const fs =require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath  ,'This is a simple text file');
// ---------Now Read File Path------
// fs.readFile(filePath,'utf8',(err,item)=> {
//     console.log(item)
// })
// ---------Appending a FILE------
// fs.appendFile(filePath,'and file name is apple.txt',(err)=> {
//     if(!err) console.log("file is updated")
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })
// console.log("start exe..")
// // console.log("logic exe...")
// setTimeout(()=>{
//     console.log("logic exe......")
// },2000)
// console.log("complete exe...")

// setTimeout(()=> {
//     b=30;
// },2000)

// let a= 20;
// let b= 0;


// let waitingData = new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//         resolve(30)
//     },2000)
// })


// waitingData.then((data)=>{
//     console.log(a+data)
// })

// console.log("startin up")

// setTimeout(()=> {
//     console.log("2 second log")
// },2000)

// setTimeout(()=> {
//     console.log("0 second log")
// },0)

// console.log("finishing up")

// const express = require('express')
// const app = express()

// app.get('' ,(req,res)=>{
// res.send(`<h1>Hello, this is Home Page</h1> 
// <a href ="/about">Goto About Page</a>
// `);
// });

// app.get('/about', (req,res)=> {

//     res.send(`
//     <input type="text" placeholder="User Name" value="${req.query.name}"/>
//     <button>Click Me</button>
//     <a href ="/">Goto Home Page</a>

//     `);
// });

// app.get('/help', (req,res)=> {
//     res.send([
//         {
//             name: 'Nishat',
//             email:'verma.nishat@gmail.com'
//         },
//         {
//             name: 'Anvi',
//             email:'rana.anvi@gmail.com'
//         }
//     ])
// })
// app.listen(5000);

// const { response } = require('express');
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public')
// // console.log(publicPath)

// // app.use(express.static(publicPath));
// app.get('', (req,res)=> {
//  res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (req,res)=> {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('*', (req,res)=> {
//     res.sendFile(`${publicPath}/nopage.html`)
// })
// app.listen(5000);
// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware')
// const route = express.Router();


// // app.use(reqFilter)

// app.get('/',(req,res)=> {
//     res.send('Welcome to Home Page')
// });

// app.get('/users',reqFilter, (req,res)=> {
//     res.send('Welcome to Users Page')
// });
// app.get('/about',reqFilter, (req,res)=> {
//   res.send('Welcome to About page')
// });
// app.listen(5000)

// ----------Connect MONGODB with Node Js----------



  // let collection = db.collection('products');
  // let response = await (collection.find({name:'m-40'}).toArray());
  // console.log(response);

// --------pROMISE HANDLING------
// dbConnect().then((resp)=> {
//  resp.find({name: 'U10'}).toArray().then((data)=> {
//  console.warn(data)
//  })
// })


// console.warn(dbConnect());
// getData();

// const dbConnect = require('./mongodb')

// const main = async()=> {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.warn(data);
// }

// main();

// const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//   name:String,
//   price:Number,
//   brand:String,
//   Category: String
// });


// const saveInDb = async()=> {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductsModel = mongoose.model('products', productSchema)
//   let data = new ProductsModel({
//     name: "Note Pro",
//     price: 150,
//     brand: "maxx",
//     Category: "Mobile"
//   });
//   let result = await data.save();
//   console.log(result)

// }

// const updateInDb = async()=> {
//   const Product = mongoose.model('products', productSchema);
//   let data = await Product.updateOne(
//     {name:"U11"},
//     {
//       $set:{price:700}
//     }
//   )
//   console.log(data)
// }


// const deleteInDB = async()=> {
//   const Product = mongoose.model('products', productSchema);
//   let data = await Product.deleteOne({name:'m-40'})
//   console.log(data);
// }
 
// const findInDB = async() => {
//   console.log("Starting Function")

//   const Product = mongoose.model('products', productSchema)
//   console.log("Model Found")
//   let data = await Product.find({name:"U11"});
//   console.log("data fpound");
//   console.log(data);
// }

// saveInDb();
// findInDB();
// deleteInDB();


const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());
app.post("/create", async (req,res)=> {
  // console.log(req.body)
  // res.send("Done");
  let data= new Product(req.body);
  let result = await data.save();
  console.log(result)
  res.send(result);
});


app.get("/list",async(req,res)=> {
  let data = await Product.find();
  res.send(data);
})

app.delete("/delete/:_id",async(req,res)=> {
   console.log(req.params)
   let data = await Product.deleteOne(req.params);
  res.send(data);
})

app.put("/update/:_id",async(req,res)=> {
  console.log(req.params)
  let data = await Product.updateOne(
    req.params,
    {
      $set:req.body
    }
    );
 res.send(data);
})


app.listen(5000);

