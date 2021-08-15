import { ADD_ACTIVITY, SET_ACTIVITIES } from '../actions/activity-actions';
import Activity from '../../models/activity';

const initialState = {
  Activities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        // take returned array and map it to a new array that just includes
        // fields that I am interested in.
        activities: action.activities.map(
          pl => new Activity(
            pl.id.toString(), 
            pl.title, 
            pl.imageUri,
            pl.address,
            pl.lat,
            pl.lng
          )
        )
      }
    case ADD_ACTIVITY:
      const newActivity = new Activity(
        action.activityData.id.toString(), 
        action.activityData.title, 
        action.activityData.image,
        action.activityData.address,
        action.activityData.coords.lat,
        action.activityData.coords.lng
        );
      return {
        activities: state.activities.concat(newActivity)
      };
    default:
      return state;
  }
};
