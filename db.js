const {MongoClient} = require("mongodb")

module.exports = {
   db:null,
   async connect(){
      try{
         var con = await MongoClient.connect("mongodb+srv://sanjeevi:san9014@cluster-1.wd2yz.mongodb.net?retryWrites=true&w=majority")
         this.db = con.db("money-manager");
         console.log("----MongoDB Connected----");
      }
      catch(err){
         console.log(err);
      }
   }
}