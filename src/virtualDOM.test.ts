import { createElement } from ".";

describe(createElement, () => {
    it('should return something', () => {
        return expect(createElement('div', { id: 'okami', mark: 'okami-container' })).toBe({});
    });
})
