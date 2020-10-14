const db = require('../database/connection');

module.exports = {
    get,
    add,
    getById,
    getBy,
    getByDept,
};

function get() {
    return db('users').select("id","username","department").orderBy('id')
}

async function add(body) {
    try {
        const [id] = await db("users").insert(body, "id");

        return getById(id);
    } catch (error) {
        throw error;
    }
}

function getBy(filter){
    return db('users')
        .where(filter)
        .first()
}
function getByDept(filter){
    return db('users as u ')
        .where(u.department)
}

function getById(id) {
    return db("users").where({ id }).first();
}


