import axios from "axios";

export const BASE_URL = "http://localhost:8000/api";

export const USER_API_END_POINT = "/users";
export const FACULTY_API_END_POINT = "/users/faculty";

export const client = axios.create({
    baseURL: BASE_URL,
});
