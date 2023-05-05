import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    //set options.method to 'GET' if there is no method
    options.method = options.method || 'GET';
    //set options.headers to an empty obj if there is no headers
    options.headers = options.headers || {};
    //if method is not 'GET', set content-type -> json and xsrf-token -> cookie value
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }
    //call default window fetch with url and options
    const res = await window.fetch(url, options);
    //if res status is >= 400, throw error with res
    if (res.status >= 400) throw res;
    //if not return res to next promise chain
    return res;
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
