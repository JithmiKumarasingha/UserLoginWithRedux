const express =require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
// app.use(bodyParser.json());

// app.use(cors())

 

const data ={
   email: 'admin@hello.world',
   name: 'Jithmi Kumarasingha',
   location: 'Colombo',
   password: 'circles111'
}


// end point to get data
// app.get('/test', (req,res) => {
//    res.send(data);
// })

//end point to post data
// app.post('/test/add', (req , res) => {
//    const  { password } = req.body

//    const newData ={
//        no:data.length+1,
//        email,
//        password
//    }


//    data.push(newData)
//    return res.json(data);

// })

app.post('/user-service/login', (req, res) => {
    const { email, password } = req.body;
  
    if (email === data.email && password === data.password) {
      
      const token = 'a_guid';
      res.json({ token });
    } else {
      res.status(401).json({ error: `Invalid email or password ${req.body}` });
    }

    console.log("input taken");
  });

  

  app.get('/user-service', (req, res) => {
        res.send(data);
  });
  
 
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  }); 