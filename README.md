# NodeJS Basic folder structure.

### To initialze the project follow the below steps
**Step 1  : Run the below command that will install the required dependencies**
```
npm install
```
Once you run the `npm install` command it will install the dependencies from the `package.json` file into the `node_modules` folder.

**Step 2  : Now you need to run the below command to initialze the ORM**
```
npx sequelize init
```
Once you run this command it will create following file 
 * `config/config.json` which contain the database credential for the specific enviroment
 * `migrations/` folder contain all the database migrations
 * `models/index.js` models folder contain all the database model and `index.js` file will load all model automatically to you code.

Now you need to change or set the your database credential in `config/config.json` file based on  your enviroment

**Step 3 : Create `.env` to setup some basic enviroment configuration**
Here are the pre define variable that must availane on `.env` file 

```
ENV=local
PORT=8080
APPNAME=your appname
DBHOST=localhost
DBUSERNAME=root
DBPASS=
DBNAME=baceCode
```
`ENV` Variable possible value will be 'local', 'development' and 'production'
