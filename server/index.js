const express=require('express');
const app=express();

const PORT=4000;
const http=require('http').createServer(app);
const cors=require('cors');
app.use(cors());

const socketIO=require('socket.io')(http,{
  cors:{
    origin:"http://localhost:3000"
  }
})

socketIO.on('connection',(socket)=>{
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
})
app.get('/api', (req, res) => {
    res.json({
      message: 'Hello world',
    });
  });
  
  http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });