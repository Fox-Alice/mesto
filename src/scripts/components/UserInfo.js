export default class UserInfo {
    constructor({title: profileNameSelector, description: profileJobSelector}) {
        this._profileName = document.querySelector(profileNameSelector),
            this._profileJob = document.querySelector(profileJobSelector)
    }

    getUserInfo = () => {
        const userInfo = { name: this._profileName.textContent, job: this._profileJob.textContent };
        return userInfo
    }


    setUserInfo = (data) => {
        this._profileName.textContent = data.name;
        this._profileJob.textContent = data.job  
    }    
}