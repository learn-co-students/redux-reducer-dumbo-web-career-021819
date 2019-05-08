export function manageFriends(state, action){
  const newState = {...state}
  switch(action.type){
    case 'ADD_FRIEND':
      newState.friends.push(action.friend)
      return newState
    case 'REMOVE_FRIEND':
      const filteredFriends = newState.friends.filter(friend => friend.id != action.id)
      // console.log(filteredFriends)
      return {friends: filteredFriends}
    default:
      return state
  }
}
