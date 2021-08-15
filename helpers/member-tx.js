import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('TBL_MEMBERS.db');

export const init = () => {
    console.log('made it to init');
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('DROP TABLE IF EXISTS TBL_MEMBERS', []);
            tx.executeSql('CREATE TABLE IF NOT EXISTS TBL_MEMBERS (id INTEGER PRIMARY KEY NOT NULL, fname TEXT, lname TEXT);',
            []);
        });
    });
    return promise;
};

export const insertMember = (fname, lname) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO TBL_MEMBERS (fname, lname) VALUES (?, ?)',
                [fname, lname],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const selectAllMembers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM TBL_MEMBERS',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const deleteAllMembers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM TBL_MEMBERS',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}