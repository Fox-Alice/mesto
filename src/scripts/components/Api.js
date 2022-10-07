import { data } from "browserslist"

export default class Api {
    constructor (options) {
        this._url = options.url,
        this._headers = options.headers
    }

    _onResponce(res) {
        if (res.ok) {
            return res.json()
            }
            return Promise.reject('Oшибка на стороне сервера')
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {            
            headers: this._headers            
        })
        .then(this._onResponce)
    }

    editProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',           
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
              })
        })
        .then(this._onResponce)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards/`, {            
            headers: this._headers
        })
        
        .then(this._onResponce)
    }

    removeCard (cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',           
            headers: this._headers
        })
        .then(this._onResponce)        
    }

    addCard ({name, link}) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',           
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
        .then(this._onResponce)        
    }

    putLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',           
            headers: this._headers
        })
        .then(this._onResponce)
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',           
            headers: this._headers
        })
        .then(this._onResponce)
    }

    updateAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',           
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
              })
        })
        .then(this._onResponce)
    }
}