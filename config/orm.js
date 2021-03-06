const connection = require("./connection");

const orm = {
    getAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    createOne: (table, newRowValues, cb) => {
        const queryString = "INSERT INTO ?? SET ? "
        connection.query(queryString, [table, newRowValues], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data)
        });
    },
    updateById: (table, updateValues, id, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE id = ?";
        connection.query(queryString, [table, updateValues, id], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data)
        });
    }

};

module.exports = orm;

// orm.getAll("burgers", burgers => console.log(burgers));

// [
//     RowDataPacket { id: 1, burger_name: 'Portabella Charburger', devoured: 1 },
//     RowDataPacket { id: 2, burger_name: 'Double-Double', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Whopper', devoured: 0 }
// ]

// orm.createOne("burgers", {burger_name: "Impossible Burger"}, result => {
//     console.log(result);
// });

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 8,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }

// orm.updateById("burgers", {burger_name: "Jumbo Jack"}, 3, result => {
//     console.log(result);
// })

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '(Rows matched: 1  Changed: 1  Warnings: 0',
//     protocol41: true,
//     changedRows: 1
//   }