import axios from "axios";

export const LOGIN_SUCCESS = "loginSuccess";  // Use a constant for action type

export const loginUser = async (data) => {
  try {
    const responseData = await axios.post("http://localhost:4458/login", data);
    return responseData.data;
  } catch (error) {
    console.error(error);
    throw error;  // Rethrow the error to handle it in the calling component
  }
};
