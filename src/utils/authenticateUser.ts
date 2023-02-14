import axios from 'axios';
import { AuthenticateResponse } from '../entities/auth';
import { store } from '../redux/store';

export const loginUser = async (email: string, password: string): Promise<AuthenticateResponse | boolean> => {
    const { environment } = store.getState();
    try {
        const { data }: { data: { user: AuthenticateResponse } } =
            await axios.post(`${environment.apiUrl}/auth/login`, {
                user: {
                    email,
                    password
                }
            });

        return data.user;
    } catch (error) {
        return false;
    }

};