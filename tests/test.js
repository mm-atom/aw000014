import { expect } from 'chai';
import t from '../dist/index';

describe('storage set', () => {
	it('set storage value', () => {
		const key = 'mm';
		const value = 'studio'
		t(key, value);
		const val = localStorage.getItem(key);
		expect(value).eq(JSON.parse(val))
	});
});
