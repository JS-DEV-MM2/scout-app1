import { ADD_MEMBER, SET_MEMBERS } from '../actions/troop-actions';
import Member from '../../models/member';

const initialState = {
  Members: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBERS:
      return {
        // take returned array and map it to a new array that just includes
        // fields that I am interested in.
        members: action.members.map(
          pl => new Member(
            pl.id.toString(), 
            pl.title, 
            pl.imageUri,
            pl.address,
            pl.lat,
            pl.lng
          )
        )
      }
    case ADD_MEMBER:
      const newMember = new Member(
        action.memberData.id.toString(), 
        action.memberData.title, 
        action.memberData.image,
        action.memberData.address,
        action.memberData.coords.lat,
        action.memberData.coords.lng
        );
      return {
        members: state.members.concat(newMember)
      };
    default:
      return state;
  }
};
