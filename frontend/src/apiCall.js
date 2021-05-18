
import axios from "axios";

const apiCall = async (parameter,setParameter) => {
  try {
    const response = await axios.get(
    `http://localhost:8080/${parameter}`
    );

    console.log(response);
    setParameter(response);
  } catch (error) {
    console.log(error);
  }
};


export default apiCall;
