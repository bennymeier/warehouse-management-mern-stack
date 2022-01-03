const RoleModel = require('../models/role.model');

function initial() {
  RoleModel.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new RoleModel({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("Added 'user' to roles collection");
      });

      new RoleModel({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("Added 'moderator' to roles collection");
      });

      new RoleModel({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("Added 'admin' to roles collection");
      });
    }
  });
}

module.exports = { initial };
