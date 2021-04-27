

export const signin = (fromData, history) => async (dispatch) => {
  try {
    //login user

    history.push("/vlog");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (fromData, history) => async (dispatch) => {
  try {
    //signup user

    history.push("/vlog");
  } catch (error) {
    console.log(error);
  }
};
