export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }

    addItem(element, position = 'after') {
        switch (position) {
            case 'before':
                this._container.prepend(element)
                break;
            case 'after':
                this._container.append(element)
                break;
            default:
                break;
        }
    }
}