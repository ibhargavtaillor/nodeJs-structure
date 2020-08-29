# nodeJs-structure

##### Node js Structure
You need to create .env file to setup some basic enviroment configuration
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

##### To initialze the project run the below command step by step

```
npm install
npx sequelize init
```