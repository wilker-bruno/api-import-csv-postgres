export default function usersCsv(state = [], action) {
  switch (action.type) {
    case "ADD_TO_USERS":
      return action.users;

    case "UPDATE_USER":
      return state.map((user) =>
        action.user.name === user.name ? action.user : user
      );

    default:
      return state;
  }
}
