export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.forEach(item => {
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