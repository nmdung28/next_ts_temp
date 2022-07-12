import { createAuthHeader } from 'core/createAuthHeader';
import API from 'axios';

export function APIPost(url: string, postData: any, token?: any) {
    return API.post(url, postData  , {
        headers: createAuthHeader(token)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const {  data } = res.data;
                return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIGet(url: string, token: any) {
    return API.get(url, {
        headers: createAuthHeader(token)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const {  data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIPut(url: string, postData: any, token: any) {
    return API.post(url, postData  , {
        headers: createAuthHeader(token)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const {  data } = res.data;
                return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}
