/*! Bixbyte Framework  */

//!Export the database connection
var db = require("./db");

/*//!MongoDB instance
var mongo = db("mongo", "hello", "ian", "ian", "localhost");
console.log( "MongoDB Connection: \n" );
console.log(  mongo  );*/


//!Postgres instance
var pg = db("postgres","codepamoja", "postgres",  "");
console.log( conn );

setTimeout(function(){
    process.conn.query("SELECT * FROM entitys", function( err,done ){
        console.log(done);
    }, 7000);
})


/*//!Madness instance
var  madness = db("madness", "hello", "user", "password", "connection");
console.log( "Madness test Connection" );
console.log( madness );*/