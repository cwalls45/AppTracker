export function removeFromSessionStorage(keys: string[]): void {
    keys.forEach(key => {
        sessionStorage.removeItem(key);
    });
}

export function removeFromCookies(keys: string[]): void {
    keys.forEach(key => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    });
}



