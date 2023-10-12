export function fetchSession(){
    return fetch('/api/session', {
        method: 'GET',
        credentials: 'include',
    })
    .catch(()=> Promise.reject({error: 'networkError'}))
    .then( response => {
        if(response.ok){
            response.stringify();
            return response.json();
        }
        return response.json()
        .catch(error => Promise.reject({error}))
        .then(err => Promise.reject(err));
    });
}

export function fetchLogin(username){
    return fetch('/api/session',{
        method: 'POST',
        headers: new Headers({
            'content-type':'application/json'
        }),
        body:JSON.stringify({ username })
    })
    .catch(()=> Promise.reject({error: 'networkError'}))
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch(error => Promise.reject({error}))
        .then(err => Promise.reject(err));
    });
}

export function fetchLogout(){
    return fetch('/api/session', {
        method: 'DELETE',
        credentials: 'include',
    })
    .catch(()=> Promise.reject({error: 'networkError'}))
}


export function fetchCart(){
    return fetch('/api/cart', {
        method: 'GET',
        credentials: 'include',
    })
    .catch(()=> Promise.reject({error: 'networkError'}))
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch(error => Promise.reject({error}))
        .then(err => Promise.reject(err));
    });
}

export function fetchUpdateCart(newCart){
    return fetch('/api/cart',{
        method: 'PUT',
        headers: new Headers({
            'content-type':'application/json'
        }),
        body:JSON.stringify({ newCart })
    })
    .catch(()=> Promise.reject({error: 'networkError'}))
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch(error => Promise.reject({error}))
        .then(err => Promise.reject(err));
    });
}
