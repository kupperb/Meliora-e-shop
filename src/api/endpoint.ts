export const BACKEND_BASE_PATH = "http://localhost:8000";

const ApiPath = {
    Auth:{
        register:'/auth/register',
        currentUser: '/auth/current-user',
        login: '/auth/login',
    }
}

export default ApiPath;