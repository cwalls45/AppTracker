export interface AuthenticateResponse {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string;
    RefreshToken: string;
    TokenType: string;
}

export enum SessionStorageKeys {
    ACCOUNTID = 'TurfTrackerAccountId'
}

export enum CookieKeys {
    ACCESS_TOKEN = 'TurfTrackerAccessToken',
    REFRESH_TOKEN = 'TurfTrackerRefreshToken'
}
