import AxiosInstance from "@/apps/plugins/axios";
class APIClient {
  BASE_API = process.env.NEXT_PUBLIC_BASE_API ?? "http://localhost:8000/api/v1";

  async get(url) {
    try {
      const res = await AxiosInstance.get(this.BASE_API + url);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  async post(url, data) {
    try {
      const res = await AxiosInstance.post(this.BASE_API + url, data);
      return res.data.payload;
    } catch (err) {
      return err.response.data.message;
    }
  }
  async patch(url, data) {
    try {
      const res = await AxiosInstance.patch(this.BASE_API + url, data);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  async delete(url) {
    try {
      const res = await AxiosInstance.delete(this.BASE_API + url);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

const API = new APIClient();

export default API;
