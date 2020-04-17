const orm = require("../config/orm");

const burger = {
    all: (cb) => orm.getAll("burgers", cb)
};

module.exports = burger;

// burger.all(burgers => console.log(burgers));

// [
//     RowDataPacket {
//       id: 1,
//       burger_name: 'Portabella Charburger',
//       devoured: 1
//     },
//     RowDataPacket { id: 2, burger_name: 'Double-Double', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Whopper', devoured: 0 }
//   ]