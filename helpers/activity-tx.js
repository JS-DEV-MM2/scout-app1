import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('TBL_ACTIVITIES.db');

export const init = () => {
    console.log('made it to init');
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('DROP TABLE IF EXISTS TBL_ACTIVITIES', []);
            tx.executeSql('CREATE TABLE IF NOT EXISTS TBL_ACTIVITIES (id INTEGER PRIMARY KEY NOT NULL, description TEXT);',
            []);
        });
    });
    return promise;
};

export const insertActivity = (description) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO TBL_ACTIVITIES (description) VALUES (?)',
                [description],
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

export const selectAllActivities = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM TBL_ACTIVITIES',
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

export const deleteAllActivities = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM TBL_ACTIVITIES',
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

