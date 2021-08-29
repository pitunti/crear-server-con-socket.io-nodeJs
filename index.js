const options={
  cors:{
    origin:"*" /*Permitir todas las conecciones si quieres que solo se permita un dominio en especifico por ejemplo https://localhost*/
  }
}
const io = require("socket.io",options);//Ejecuta socket.io

io.on("connection",(socket)=>{
  socket.on("msg",(msg)=>{
    socket.emit("msg","hello");
    io.emit("msg","hello");//
  })
})

io.listen(1212)//Inicia el socket server. Solo se especifica el puerto para la coneccion