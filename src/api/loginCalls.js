import axios from "axios"

//  create account
export const signUp = (body) => {
    return axios.post("/api/1.0/users", body)
}