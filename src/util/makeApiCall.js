import { formatDate } from "./formatDate";
import Axios from "axios";

export const makeApiCall = async categoryId => {
  try {
    const response = await Axios({
      url: "https://api.foursquare.com/v2/venues/explore",
      method: "GET",
      params: {
        client_id: "XOI1NCEZMPGNI2FV5GL0MSMN0UXFKFZJPYCXE4KU4P43DBAP",
        client_secret: "YPDQGZBUJY2WLNZMMLUKDH0QR5QGKZIESAQ43BHH2ICOFUJY",
        near: "valletta",
        categoryId,
        v: formatDate(new Date()),
      },
    });
    return response.data.response.groups[0].items;
  } catch (err) {
    console.log(err);
  }
};
