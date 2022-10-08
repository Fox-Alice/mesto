export default class UserInfo {
    constructor({ title: profileNameSelector, description: profileJobSelector, avatar: profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector)
    }

    getUserInfo = () => {
        const userInfo = {
            name: this._profileName.textContent,
            about: this._profileJob.textContent,
            avatar: this._profileAvatar
        };
        return userInfo
    }


    setUserInfo = (data) => {
        this._profileName.textContent = data.name;
        this._profileJob.textContent = data.about;
        this._profileAvatar.src = data.avatar;
    }
}