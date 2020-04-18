const orm = require("../config/orm");

const burger = {
    all: (cb) => orm.getAll("burgers", cb),
    create: (burger_name, cb) => orm.createOne("burgers", {burger_name}, cb)
};

module.exports = burger;

// burger.all(burgers => console.log(burgers));

// 
//     RowDataPacket {
//       id: 1,
//       burger_name: 'Portabella Charburger',
//       devoured: 1
//     },
//     RowDataPacket { id: 2, burger_name: 'Double-Double', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Whopper', devoured: 0 }
//   ]

// burger.create("Impossible Burger", (result) => console.log(result));
// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 9,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }