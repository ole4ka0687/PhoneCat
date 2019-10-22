'use strict';

export default class Component {
	constructor(element) {
		this._el = element; 
	}

	show() {
		this._el.classList.remove('js-hidden');
	}

	hide() {
		this._el.classList.add('js-hidden');
	}
}