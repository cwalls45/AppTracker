export function removeFromSessionStorage(keys: string[]): void {
    keys.forEach(key => {
        sessionStorage.removeItem(key);
    });
}

export function removeFromCookies(keys: string[], removeCookie: (key: string) => void): void {
    keys.forEach(key => {
        removeCookie(key);
    });
}



