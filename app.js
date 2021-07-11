const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/connection');
const userRoutes = require('./src/routes/userRoutes');
const app = express();

/**
 * 
 * Import of Tables Model from models folder
 * 
 */
const User = require('./src/models/user');
const Roles = require('./src/models/roles');
const UserRoles = require('./src/models/userRole');


/**
 * PORT NUMBER ON LOCALHOST
*/
const port = 4000;

app.use(bodyParser.json());

app.use('/compta',userRoutes);

/**
 * 
 * Database tables relationships 
 * 
 */
User.belongsToMany(Roles, { through: UserRoles})
Roles.belongsToMany(User, { through: UserRoles})




sequelize
.sync()
.then(result => {
    console.log(`
    APP CONNECTED TO DATABASE -> ${result.config.database} \n
    APP RUNNING ON -> ${result.config.host} \n`);
    app.listen(port, () => {
        console.log('LISTENING ON ' + port);
    })
})
.catch(err => console.log(err));

