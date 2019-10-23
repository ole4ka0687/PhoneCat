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

	on(eventName, callback) {
		this._el.addEventListener(eventName, callback);
	}

	off(eventName, callback) {
		this._el.removeEventListener(eventName, callback);
	}

	trigger(eventName, data = null) {
		let customEvent = new CustomEvent(eventName, {
			detail: data
		});

		this._el.dispatchEvent(customEvent);
	}
}