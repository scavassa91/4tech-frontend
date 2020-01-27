import { axios4tech } from './config';

export const login = async (userLogin, password) => {
    try {
        const response = await axios4tech.post('auth/login', {
            userLogin,
            password
        });

        if (response.status >= 200 && response.status < 300) {
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('userId', response.data._id);
            return response;
        }
    } catch (e) {
        return e;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
}