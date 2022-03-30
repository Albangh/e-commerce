import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDJlYzBjZDBhNmRlOWNiOGQ2ODEzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYzNTc3NSwiZXhwIjoxNjQ4ODk0OTc1fQ.AO7sekbSPWW04HOe9mFWITL2OV65pemOFkW8fHbwdlg'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});

