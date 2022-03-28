const app = require("./index");
const connect = require("./configs/db");

app.listen(3333,async()=>{
    try {
        await connect();
        console.log("mongodb+srv://<username>:Swami@123@cluster0.1rjvo.mongodb.net/todo?retryWrites=true&w=majority");
    }
    catch(err){
        console.log(err);
    }
})