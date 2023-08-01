import { API } from "../shared/api"; 

export const registerUser = (
  name: string,
  email: string,
  password: string
) => {
  return API.post("/register", {
    name,
    email,
    password
  })
}

export const loginUser = (email: string, password: string) => {
  return API.post("/login", {email, password})
}