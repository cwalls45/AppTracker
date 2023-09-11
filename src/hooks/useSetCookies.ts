import { useEffect } from "react";
import Cookies from 'js-cookie';

export const useSetCookies = (accessToken: string, refreshToken: string, expiresIn: number) => {

  useEffect(() => {
    Cookies.set('TurfTrackerAccessToken', accessToken);
    Cookies.set('TurfTrackerRefreshToken', refreshToken);
  }, [accessToken, refreshToken, expiresIn]);
}