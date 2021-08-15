import Cookies from "js-cookie";

export const config = () => {
  const jwtToken = Cookies.get("authToken");
  
  if (jwtToken) {
    return {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
  } else {
    return {};
  }
};
