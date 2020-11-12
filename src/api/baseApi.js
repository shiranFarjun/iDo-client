import axios from 'axios';

// const BASE_ID='5f79da15e402340016f93476';
export default axios.create({
    baseURL: `http://localhost:8000/api/v1`
})