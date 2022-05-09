
const baseUrl = process.env.NODE_ENV === "production"
? "https://tu-cosc-617-final-project.herokuapp.com"
: "http://localhost:5000";
export default baseUrl;