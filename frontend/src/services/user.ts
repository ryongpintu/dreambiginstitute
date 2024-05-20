import axios from "axios";

export const BASE_URL = "https://services.idreambig.in/api";

export const USER_API_END_POINT = "/users";
export const FACULTY_API_END_POINT = "/users/faculty";
export const SUGGESTION_API_END_POINT = "/users/add/suggestion";

export const client = axios.create({
    baseURL: BASE_URL,
});
