//NOT USING
import ApiService from "./Api";
const BASE_URL = "https://jsonplaceholder.typicode.com";
const client = new ApiService({ baseURL: BASE_URL });

const authorsApi = {};
authorsApi.getAllAuthors = () => client.get(`/users`);
export default authorsApi;