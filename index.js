const express = require('express');
const app = express();


// function rootCall(req , res) {
//    res.send('Thank You')
// }

// rootCall = (req, res) =>{
//     res.send('Thank You')
// }

// app.get('/' ,  rootCall);
app.get ('/' , (req , res) => res.send("Thank You For Calling Me. I know how to node. Yay!"))
app.listen(3000 , () => console.log('listening to port 3000'))