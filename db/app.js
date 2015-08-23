//!MongoDB Handle
var Mongo = require("./mongo");

//!Postgres Handle
var Postgres = require("./postgres");


//!The main return object
module.exports = function( database, db_name, db_user, db_password, db_host ){

			switch( database ){
                    
                //!Satisfy a request for the mongodb connection object
				case "mongo":
					return new Mongo( db_name, db_user, db_password, db_host );
				break;

                //!Satisfy a request for the postgresql connection object
				case "postgres":
					return new Postgres( db_name, db_user, db_password, db_host );
				break;
                    
                //!Handle requests made for unsupported database connections                        
                default:
                    console.log("\n\nBixbyte Framify -> DB\nFailed to connect to database\n\nREASON: Unsupported database '" + database + "'" );
                    return "Failed to understand database parameter";
                break;

			};

		};
