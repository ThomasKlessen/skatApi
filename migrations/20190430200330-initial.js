'use strict'

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate
    type = dbm.dataType
    seed = seedLink
}

exports.up = function (db) {
    const query = `
        create table if not exists users
        (
            id       serial not null
                constraint users_pk
                    primary key,
            username text   not null,
            hash     text   not null,
            salt     text   not null
        );

        comment on table users is 'all users';

        create unique index if not exists users_id_uindex
            on users (id);

        create unique index if not exists users_username_uindex
            on users (username);`

    return db.runSql(query)
}

exports.down = function (db) {
    const query = `DROP table users;`
    return db.runSql(query)
}

exports._meta = {
    "version": 1
}

