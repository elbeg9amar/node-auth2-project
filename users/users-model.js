const db = require('../database/connection');

module.exports = {
    get,
    add,
    getById,
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

function getById(id) {
    return db("users").where({ id }).first();
}


