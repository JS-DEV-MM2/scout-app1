export const ADD_MEMBER = 'ADD_MEMBER';
export const SET_MEMBERS = 'SET_MEMBERS';

import { selectAllMembers, deleteAllMembers, insertMember } from '../../helpers/member-tx';



export const addMember = (fname, lname) => {
    console.log('inside addMember');
    return async dispatch => {
    try {
      const dbResult = await insertMember(
        fname, 
        lname
      );

      dispatch({ 
        type: ADD_MEMBER, 
        MemberData: { 
          fname: fname,
          lname: lname
        }
      })
    } catch (err) {
      console.log(err);
      throw err;
    };
  };
}

export const loadMembers = () => {
  console.log('inside loadMembers');
  return async dispatch => {
    try {
      const dbResult = await selectAllMembers();
      dispatch ({ type: SET_MEMBERS, members: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
    
  };
};
