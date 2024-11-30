import { api } from "./api"

const handleFetch = async (endpoint, setState) => {
    try {
        const response = await fetch(`${api}${endpoint}`, {
            method: "GET",
        })

        const data = await response.json()
        setState(data)
    } 
    catch (err) {
        alert(err.message)
    }
}

export { handleFetch };
