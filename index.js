const app=require('./app.js');
const mongo=require('./connect');

(async () => {
    app.listen(process.env.PORT, () => console.log('listening on',process.env.PORT));
    await mongo.connect();
})();