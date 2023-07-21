const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

/* middleware */
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
     console.log(
       'Pinged your deployment. You successfully connected to MongoDB!'
     );
}).catch((error)=>{
  console.log(error.message)
});



app.get('/', (req, res) => {
  res.send('app-chat')
})

app.listen(port, () => {
  console.log(`Server is listing on port ${port }`)
})




// 6wKfiYa5CR2rXzLu


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri =
//   'mongodb+srv://chat-application:6wKfiYa5CR2rXzLu@cluster0.9lqzgjv.mongodb.net/?retryWrites=true&w=majority';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

