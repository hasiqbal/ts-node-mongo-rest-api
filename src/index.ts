import http from "http";
import { listenPort } from "../Interface";
import { getTasks, addTask, updateTask, deleteTask } from "../controller";

const server = http.createServer((req, res) =>{
    if (req.method == "GET" && req.url == "/api/tasks") {
        return getTasks(req,res);
    }
   if (req.method == "POST" && req.url == "/api/tasks") {
    return addTask(req, res);
  }
  if (req.method == "PUT" && req.url == "/api/tasks") {
    return updateTask(req, res);
  }
  if (req.method == "DELETE" && req.url == "/api/tasks") {
    return deleteTask(req, res);
  }
});

 const localHostPort:listenPort = { PORT: 3000};
 

server.listen(localHostPort.PORT, () => {
    console.log(`server running on ${localHostPort.PORT}`)
});

