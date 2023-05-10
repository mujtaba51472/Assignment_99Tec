import axios from 'axios'


// Register user
const register = async (userData) => {
    const response = await axios.post('http://localhost:4000/api/mj/userregister', userData)
    console.log('userdata', response)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post('http://localhost:4000/api/mj/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    axios.get('http://localhost:4000/api/mj/logout')
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService