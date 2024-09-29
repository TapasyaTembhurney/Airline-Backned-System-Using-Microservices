const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig.js');
const apiRoutes = require('./routes/index');
const db = require('./models/index'); 

const app = express();

const setUpAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        if(process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
        
    });
};

setUpAndStartServer();