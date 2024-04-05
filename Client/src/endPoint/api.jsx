let BaseURL = "http://localhost:5000/api/v1";
import axios from "axios"

const endpoint = {
    LOGIN: `${BaseURL}/login`,
    SIGNUP: `${BaseURL}/signup`,
    ME: `${BaseURL}/me`,
    QUESTIONS: `${BaseURL}/questions`,
}