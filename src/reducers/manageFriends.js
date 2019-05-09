export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let newFriend = { name: 'Joe', hometown: 'Boston', id: 101 };
      return { friends: [...state.friends, newFriend] };
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(friend => friend.id !== 101);
      return { friends: newFriends };
    default:
      return state;
  }
}
