const express =require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());


 const data ={
   email: 'admin@hello.world',
   name: 'Jithmi Kumarasingha',
   location: 'Colombo',
   password: 'circles111'

}

app.post('/user-service/login', (req, res) => {
    const { email, password } = req.body;
  
    if (email === data.email && password === data.password) {
      
      const token = 'a_guid';
      res.json({ token });
    } else {
      console.log("invalid");
     }

    console.log("input taken");
  });

app.get('/user-service', (req, res) => {
        res.send(data);
  });


  
 app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  }); 