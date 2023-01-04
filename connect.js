const {MongoClient,ObjectId}=require('mongodb');
const mongo={
    db:null,
    users:null,
    ObjectId,
    async connect(){
        try{
            const client = new MongoClient(process.env.MONGO_URL);
            console.log("URL:",process.env.MONGO_URL);
            await client.connect();
            this.db=client.db(process.env.DB_NAME);
            this.users=await this.db.collection("users");
            console.log("Mongo connection established successfully");
        }
        catch(e){
            console.log("error in connection of mongo db",e.message);
        }
    }
}

module.exports=mongo;