const mongo = require("mongoose");
const mongoUrl= "mongodb://localhost:27017/api";

mongo.Promise = global.Promise;

// First Method
mongo.connect(mongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex:true,
    // serverSelectionTimeoutMS: 5000,
    // autoIndex: false, // Don't build indexes
    // maxPoolSize: 10, // Maintain up to 10 socket connections
    // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}).then(() => {
    console.log("Connection is successful DB");
}).catch((e) => {
    console.log(`No connect DB ${e}`);
});

// Second Method
// var m_Connection=mongo.connection

// m_Connection.on('error',()=>{
//     console.log("Mongo is fail");
// });

// m_Connection.on('connect',()=>{
//     console.log("Mongo is pass");
// });

module.exports = mongo