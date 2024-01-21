import { IAccount } from '../entities/account';
import { AuthenticateResponse, CookieKeys, SessionStorageKeys } from '../entities/auth';
import { store } from '../redux/store';
import { apiGet, apiPost } from './apiRequests';
import { removeFromCookies, removeFromSessionStorage } from './browserStorage';

export const loginUser = async (email: string, password: string)
    : Promise<{
        credentials: AuthenticateResponse,
        account: IAccount
    } | false> => {
    const { environment } = store.getState();
    try {
        const { data }: { data: { credentials: AuthenticateResponse, account: IAccount } } =
            await apiPost(`${environment.apiUrl}/auth/login`, {
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

export const getUserEmailWithAccessToken = async (accessToken: string): Promise<{ userName: string }> => {
    const { environment } = store.getState();
    try {
        const { data }: { data: { userName: string } } =
            await apiGet(`${environment.apiUrl}/auth/user/token/${accessToken}`);

        return data;
    } catch (error) {
        console.log(`ERROR: There was an error getting user with access token ${accessToken}`);
        throw new Error(`ERROR: There was an error getting user with access token ${accessToken} - ${JSON.stringify(error, null, 2)}`);
    }
};

export const signOut = async (token: string): Promise<boolean> => {
    const { environment } = store.getState();
    try {
        const { data }: { data: { isSignedOut: boolean } } =
            await apiPost(`${environment.apiUrl}/auth/signOut`, { token });

        return data.isSignedOut;
    } catch (error) {
        return false;
    }
};

export const removeCookiesAndSessionStorage = (cookieKeys: CookieKeys[], sessionKeys: SessionStorageKeys[]): void => {
    removeFromCookies(cookieKeys);
    removeFromSessionStorage(sessionKeys)
}

