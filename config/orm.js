const connection = require("./connection");

const orm = {
    getAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            cb(data);
        })
    }

}

module.exports = orm;

// orm.getAll("burgers", burgers => console.log(burgers));

// [
//     RowDataPacket { id: 1, burger_name: 'Portabella Charburger', devoured: 1 },
//     RowDataPacket { id: 2, burger_name: 'Double-Double', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Whopper', devoured: 0 }
// ]