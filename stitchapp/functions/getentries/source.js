exports = function(arg){
  const mongodb = context.services.get("mongodb-atlas");
  const entries = mongodb.db("hacktoberfest").collection("entries");
  return entries.find({}).toArray();
};
