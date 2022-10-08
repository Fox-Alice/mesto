(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.handleCardDelete,c=e.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=o,this._name=o.name,this._link=o.link,this._templateSelector=n,this._handleCardClick=i,this._handleCardDelete=a,this._handleCardLike=c,this._userId=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createItem",value:function(){return this._view=this._getTemplate(),this._cardElementName=this._view.querySelector(".card__title"),this._cardElementImage=this._view.querySelector(".card__image"),this._cardElementName.textContent=this._name,this._cardElementImage.src=this._link,this._cardElementImage.alt=this._name,this._subscribeToEvents(),this.checkDeleteButtonExistence(),this._view}},{key:"_subscribeToEvents",value:function(){var e=this;this._likeCounter(),this._likeButtonElement=this._view.querySelector(".card__like"),this._likeButtonElement.addEventListener("click",(function(t){e._likeCard(t)})),this._likeButtonElement.addEventListener("click",(function(){return e._handleCardLike(e)})),this._removeButtonElement=this._view.querySelector(".card__remove-button"),this._removeButtonElement.addEventListener("click",(function(){return e._handleCardDelete(e)})),this._imageButtonElement=this._view.querySelector(".card__image"),this._imageButtonElement.addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"_likeCard",value:function(){this._likeCounter(),this.cardLiked()?this._likeButtonElement.classList.add("card__like_active"):this._likeButtonElement.classList.remove("card__like_active")}},{key:"_likeCounter",value:function(){this._cardLikeCounter=this._view.querySelector(".card__like-counter"),this._cardLikeCounter.textContent=this._data.likes.length}},{key:"cardLiked",value:function(){var e=this;return this._data.likes.some((function(t){return t._id===e._userId}))}},{key:"_checkOwnership",value:function(){return this._data.owner._id===this._userId}},{key:"checkDeleteButtonExistence",value:function(){this._checkOwnership()?this._removeButtonElement.classList.add("card__remove-button_visible"):this._removeButtonElement.classList.remove("card__remove-button_visible")}},{key:"updateDataLikes",value:function(e){this._data.likes=e.likes,this._likeCard()}},{key:"getDataId",value:function(){return this._data._id}},{key:"getUserId",value:function(){return this._data.owner._id}},{key:"remove",value:function(){this._view.remove(),this._view=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=r((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),t.classList.add(r._config.errorClass),t.textContent=e.validationMessage})),o(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=""})),o(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),o(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),o(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.inactiveButton():(r._buttonElement.classList.remove(r._config.inactiveButtonClass),r._buttonElement.disabled=!1)})),o(this,"inactiveButton",(function(){r._buttonElement.classList.add(r._config.inactiveButtonClass),r._buttonElement.disabled="disabled"})),o(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState()}))}))})),o(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._config.buttonElementSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.formInputSelector))}));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"after";switch(t){case"before":this._container.prepend(e);break;case"after":this._container.append(e)}}}],n&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".image-popup__image"),t._caption=t._popup.querySelector(".image-popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._caption.textContent=t,p(y(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__form-item")),n._textSubmitButton=n._form.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputObject={},this._inputList.forEach((function(t){return e._inputObject[t.name]=t.value})),this._inputObject}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())})),g(O(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),g(O(a.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){console.log(this._textSubmitButton.textContent),this._textSubmitButton.textContent=e?"Сохранить...":"Сохранить"}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function R(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._handleSubmit=null,t._button=t._popup.querySelector(".popup__save-button"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._button.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),j(q(a.prototype),"setEventListeners",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=D((function e(t){var n=this,r=t.title,o=t.description,i=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"getUserInfo",(function(){return{name:n._profileName.textContent,about:n._profileJob.textContent,avatar:n._profileAvatar}})),x(this,"setUserInfo",(function(e){n._profileName.textContent=e.name,n._profileJob.textContent=e.about,n._profileAvatar.src=e.avatar})),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(o),this._profileAvatar=document.querySelector(i)}));function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){return e.ok?e.json():Promise.reject("Oшибка на стороне сервера")},(n="_onResponce")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._onResponce)}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._onResponce)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards/"),{headers:this._headers}).then(this._onResponce)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._onResponce)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._onResponce)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._onResponce)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._onResponce)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._onResponce)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V={formElementSelector:".popup__form",formInputSelector:".popup__form-item",buttonElementSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__form-item_type_error",errorClass:"popup__input-error_active"},J=document.querySelector(".popup__form-item_type_name"),H=document.querySelector(".popup__form-item_type_job"),z=document.querySelector(".profile__button"),M=document.querySelector(".profile__add-button"),F=document.querySelector(".popup__form_type_edit"),G=document.querySelector(".card-popup__form"),K=document.querySelector(".avatar-popup__form"),Q=document.querySelector(".delete-popup__save-button"),W=new v(".image-popup");W.setEventListeners();var X=new S(".card-popup",(function(e){X.renderLoading(!0),te.addCard(e).then((function(e){oe.inactiveButton(),ae.addItem(ce(e),"before"),X.close()})).catch((function(e){console.log("Error",e)})).finally((function(){return X.renderLoading(!1)}))}));X.setEventListeners();var Y=new S(".edit-popup",(function(e){re.inactiveButton(),te.editProfile(e).then((function(e){ee.setUserInfo(e),Y.close()}))}));Y.setEventListeners();var Z=new B(".delete-popup");Z.setEventListeners();var $=new S(".avatar-popup",(function(e){var t=this;te.updateAvatar(e).then((function(e){ie.enableValidation(),ee.setUserInfo(e),$.close()})).catch((function(e){console.log("Error",e)})).finally((function(){return t.renderLoading(!1)}))}));$.setEventListeners();var ee=new A({title:".profile__title",description:".profile__description",avatar:".profile__avatar"}),te=new N({url:"https://mesto.nomoreparties.co./v1/cohort-51",headers:{authorization:"31e7088a-3b9d-4de6-85fd-70c9c1c04334","Content-Type":"application/json"}});te.getInitialCards().then((function(e){ae.renderItems(e)})).catch((function(e){console.log("Error",e)}));var ne=null;te.getUser().then((function(e){ne=e._id,ee.setUserInfo(e)}));var re=new i(V,F),oe=new i(V,G),ie=new i(V,K);re.enableValidation(),oe.enableValidation();var ae=new c({renderer:function(e){ae.addItem(ce(e))}},".photo-grid");function ce(e){return new t({data:e,handleCardClick:le,handleCardDelete:ue,handleCardLike:se},".card-template",ne).createItem()}function ue(e){Z.open(),Q.addEventListener("click",(function(){return Z.setSubmitAction(function(e){te.removeCard(e.getDataId()).then((function(){e.remove(),Z.close()})).catch((function(e){console.log("Error",e)}))}(e))}))}function le(e){W.open(e)}function se(e){e.cardLiked()?te.deleteLike(e.getDataId()).then((function(t){e.updateDataLikes(t)})):te.putLike(e.getDataId()).then((function(t){e.updateDataLikes(t)}))}z.addEventListener("click",(function(){var e=ee.getUserInfo();J.value=e.name,H.value=e.about,Y.open()})),M.addEventListener("click",(function(){return X.open()})),document.querySelector(".profile__avatar-overlay").addEventListener("click",(function(){$.open()}))})();