
const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;
const {sequelize} = require('./src/db.js');




// Syncing all the models at once.
app.listen(port, () => {
  sequelize.sync({ force: true });
  console.log("listening on port 3001");
});
