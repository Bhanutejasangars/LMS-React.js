export const loggedUserData = () => {
  return JSON.parse(localStorage.getItem("LoggedUser"));
};
