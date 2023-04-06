import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const useSetCookies = (accessToken: string, refreshToken: string, expiresIn: number) => {

  const [cookies, setCookies] = useCookies();

  useEffect(() => {
      setCookies("TurfTrackerAccessToken", accessToken, { maxAge: expiresIn });
      setCookies("TurfTrackerRefreshToken", refreshToken, { maxAge: expiresIn });
  }, [accessToken, refreshToken, expiresIn]);
}