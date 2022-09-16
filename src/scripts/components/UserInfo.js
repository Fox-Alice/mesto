import { nameInput, jobInput } from '../../pages/index.js'
export default class UserInfo {
    constructor(profileNameSelector, profileJobSelector) {
        this._profileName = document.querySelector(profileNameSelector),
            this._profileJob = document.querySelector(profileJobSelector)
    }

    getUserInfo = () => {
        const userInfo = { name: this._profileName.textContent, job: this._profileJob.textContent };
        return userInfo
    }


    setUserInfo = ({ name, job }) => {
        nameInput.value = name;
        jobInput.value = job
    }
}