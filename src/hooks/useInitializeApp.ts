import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserEmailWithAccessToken, removeCookiesAndSessionStorage } from '../utils/authenticateUser';
import { setAccountId } from '../redux/action-creators/accountActionCreators';
import { isEmpty } from 'lodash';
import { CookieKeys, SessionStorageKeys } from '../entities/auth';
import { bindActionCreators } from 'redux';
import { useCookies } from 'react-cookie';
import { accountActionCreators, environmentActionCreators } from '../redux';

export const useInitializeApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const { setAPIUrl } = bindActionCreators(environmentActionCreators, dispatch);
    const { getUserByUserName } = bindActionCreators(accountActionCreators, dispatch);

    const [cookies, , removeCookie] = useCookies();
    const accountId = sessionStorage.getItem(SessionStorageKeys.ACCOUNTID) || '';

    async function fetchUser(token: string) {
        const user = await getUserEmailWithAccessToken(token)
        return user;
    }

    useEffect(() => {
        if (!isEmpty(accountId)) {
            setAccountId(accountId);
        }

        setAPIUrl();

        if (cookies.TurfTrackerAccessToken && cookies.TurfTrackerRefreshToken) {
            fetchUser(cookies.TurfTrackerAccessToken)
                .then(res => {
                    getUserByUserName(res.userName);
                    setIsLoggedIn(true);
                });
        }
        else {
            removeCookiesAndSessionStorage([CookieKeys.ACCESS_TOKEN, CookieKeys.REFRESH_TOKEN], [SessionStorageKeys.ACCOUNTID], removeCookie);
            setIsLoggedIn(false);
        }
    }, [cookies.TurfTrackerAccessToken, cookies.TurfTrackerRefreshToken]);

    return { cookies, isLoggedIn, setIsLoggedIn };
};