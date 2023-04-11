import axios from 'axios';
import { IAccount, IUser } from '../entities/account';
import { AuthenticateResponse } from '../entities/auth';
import { store } from '../redux/store';

export const loginUser = async (email: string, password: string)
    : Promise<{
        credentials: AuthenticateResponse,
        account: IAccount
    } | false> => {
    const { environment } = store.getState();
    try {
        const { data }: { data: { credentials: AuthenticateResponse, account: IAccount } } =
            await axios.post(`${environment.apiUrl}/auth/login`, {
                user: {
                    email,
                    password
                }
            });

        return data;
    } catch (error) {
        return false;
    }

};