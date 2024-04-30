import axios from "axios";

export default axios.create({
baseURL:"https://api.rawg.io/api",

    params: {
        key: "3619e8ee289c4a48871cd15a54110867"
    }
})