const {MongoClient,ObjectId}=require('mongodb');
const mongo={
    db:null,
    users:null,
    client:null,
    ObjectId,
    async connect(){
        try{
            //check comment
            this.client = new MongoClient(process.env.MONGO_URL);
            console.log("URL:",process.env.MONGO_URL);
            await this.client.connect();
            this.db=this.client.db(process.env.DB_NAME);
            console.log(process.env.DB_NAME);
            this.users=await this.db.collection("users");
            console.log("Mongo connection established successfully");
        }
        catch(e){
            console.log("error in connection of mongo db",e.message);
        }
    },
    async close(){
        await this.client.close();
    }
}

module.exports=mongo;