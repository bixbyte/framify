//!PosgreSQL Connection Object
module.exports = function( db_name, db_user, db_password, db_host ){ 
    
    //!Sort the database host parameters
    if( typeof(db_host) == "string" && db_host.length > 1 ){
        
        //* Set up the host configuration with the default port
        db_host = {
            url: db_host || "localhost",
            port: 5432
        }

    }else if( typeof(db_host) == "object"){
       
       //* Ensure that the database url and port are defined otherwise resort to the default ones
       db_host.url  = db_host.url || "localhost";
       db_host.port = db_host.port || 5432;
        
    }else{
        
        //* Return the default database host configuration
        console.log("\n\nBixbyte Framify -> DB\nResolved to the default database host configuration.\n\n");
        db_host = {  url: "localhost", port: 5432 };
        
    }

    //!Set up the basic database connection variables
    var cf = {};
    
    cf.db       = db_name || "postgres";
    
    cf.user     = db_user || "postgres";
    
    cf.pass     = db_password || "";
    
    cf.host     = db_host;
    

    var pg = require("../node_modules/pg");
    
    return cf;
    
};
