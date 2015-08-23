
    EXAMPLE DATABASE CONNECTION 
    
    1. POSTGRES DATABASE
    
    # == INTRODUCTION
    
    Layout
    db( 'database_engine', 'database_name', 'username', 'password', 'host_configuration' )
    
    ##  database_engine ( required )
    
        -> Acceptable parameters :
        
            * 'mongo'       => establishes a mongodb database connection
            * 
            * 'postgres'    => establishes a posgresql database connection
    
    
    ## database_name ( optional ) 
    
        -> Used to define the database to be used.  
        
        * results to 'postgres' if left blank ( in the case of the "postgres" database_engine  )
        * 
        * results to 'mongodb' if left blank ( in the case of the "mongo" database_engine ) 
         
       
    ## username ( optional )
    
        -> Used to define the database user's username
        
        * results to "postgres" if left blank ( in the case of the "postgres" database_engine )
        * 
        * results to "mongodb" if left blank ( in the case of the "postgres" database_engine )
        
        
    ## password ( optional )
    
        -> Used to define the database user's password
        
        * results to "" if left blank
    
        
    ##  host_configuration ( optional )
    
        -> Used to define the host server's connection details
        
        * results to { url: 'localhost', port: 5432 } if left blank
        * 
        * results to { url: 'provided_string', port: 5432 }  if a string is provided
        * 
        * results to { url: 'localhost', port: 5432 } if an unsupported object is given
        * 
        * results to the provided object if it has the 'url' and/or 'port' keys ( where the keys are not left  blank )
        * 
        * Ideal object  { url: 'connection_url', port: 'port_number' }
            
       
    # == Sample Usage

    //! ABSOLUTE CONNECTION
    --> Ideal when sure that only one connection pool instance is needed
    var db = require("./db")("postgres");

    //! RE - USABLE DB CONNECTION
    --> Ideal when connection to different databases is needed with a single import or the "db" module
    var db = require("./db");

    #1
    var postgres = db("postgres");

    --> CREATES the default postgres connection with connection as 
    {   db: 'postgres',
        user: 'postgres',
        pass: '',
        host: { url: 'localhost', port: 5432 } }
      
    #2 
    var postgres = db("postgres","database_name", "user_name", "Password");

    --> CREATES the connection :
    {   db: 'database_name',
        user: 'user_name',
        pass: 'Password',
        host: { url: 'localhost', port: 5432 } }

    
    #3 
    var postgres = db("postgres","database_name", "user_name", "Password", "some_url.something");

    --> CREATES the connection :
    {   db: 'database_name',
        user: 'user_name',
        pass: 'Password',
        host: { url: 'some_url.something', port: 5432 } }

    #4 
    var postgres = db("postgres","database_name", "user_name", "Password", {});

    --> CREATES the connection :
    {   db: 'database_name',
        user: 'user_name',
        pass: 'Password',
        host: { url: 'localhost', port: 5432 } }

    #5 
    var postgres = db("postgres","database_name", "user_name", "Password", { url: 'connection_url', port: 'port_number' } );

    --> CREATES the connection :
    {   db: 'database_name',
        user: 'user_name',
        pass: 'Password',
        host: { url: 'connection_url', port: 'port_number' } }