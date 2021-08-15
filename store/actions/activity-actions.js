export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';

import { selectAllActivities, deleteAllActivities, insertActivity } from '../../helpers/activity-tx';

export const addActivity = (description) => {
  console.log('inside addActivity');
  return async dispatch => {
      try {
        const dbResult = await insertActivity(
          description
        );

      dispatch({ 
        type: ADD_ACTIVITY, ActivityData: {
          description: description
        }
      })
      } catch (err) {
        console.log(err);
        throw err;
      }; 
  };
};

export const loadActivities = () => {
  console.log('inside loadActivities');
  return async dispatch => {
    try {
      const dbResult = await selectAllActivities();
      dispatch ({ type: SET_ACTIVITIES, Activities: dbResult.rows._array });
    } catch (err) {
      throw err;
    };
  };
};
