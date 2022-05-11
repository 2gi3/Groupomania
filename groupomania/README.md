to run this app open directory 'groupomania' and run 'npm install'
then open the directory 'backend' and run 'npm install'

create the following environment keys:
DB="<database name>"
ROOT="<connection name>"
PWD="<connection password>"
JWT="<secret word/sentence to create the JWT>"

database
-Option 1: I nstall mySql Workbench, then create a new connection, then click on "create a new sql tab for executing    queries",
  then click on "open a script file in this editor'(folder icon), then open the file named "DumpProject7.sql"(it is located in the same directory as this README file), click on the lighing bolt button ("execut the selected portion of this script or everything"), then refresh the connection and the new tabs will be there.
-Option 2: Use the "DumpProject7.sql" file to create the database with your favourite tools.


then in the 'groupomania' directory run 'npm start'
and in the 'backend directory' run 'nodemon server'


