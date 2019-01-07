import group from './index';

it('if categories <= columns all categories are visible', () => {
    const colsTotal = 3;
    expect(group([1], colsTotal)).toEqual([1]);
    expect(group([1, 1], colsTotal)).toEqual([1, 1]);
    expect(group([1, 1, 1], colsTotal)).toEqual([1, 1, 1]);
    expect(group([3, 3, 3], colsTotal)).toEqual([1, 1, 1]);
    expect(group([1, 5, 9], colsTotal)).toEqual([1, 1, 1]);
});

it('if items > columns - all columns are filled ', () => {
    const colsTotal = 10;
    const add = (a, b) => a + b;
    const sum = (arr) => arr.reduce(add, 0);
    expect(sum(group([5, 5], colsTotal))).toEqual(colsTotal);
    expect(sum(group([1, 2, 3, 4], colsTotal))).toEqual(colsTotal);
    expect(sum(group([2, 2, 2, 2, 2], colsTotal))).toEqual(colsTotal);
});

it('if items > columns - category items are grouped to one column', () => {
    const colsTotal = 2;
    expect(group([1, 1], colsTotal)).toEqual([1, 1]);
    expect(group([1, 5], colsTotal)).toEqual([1, 1]);
    expect(group([1, 10], colsTotal)).toEqual([1, 1]);
});

it('if items <= columns - all items are visible', () => {
    const colsTotal = 10;
    expect(group([1], colsTotal)).toEqual([1]);
    expect(group([1, 2, 3], colsTotal)).toEqual([1, 2, 3]);
    expect(group([4, 3, 2, 1], colsTotal)).toEqual([4, 3, 2, 1]);
});

it('if categories > columns last of them (categories) will be hidden (= 0)', () => {
    let colsTotal = 1;
    expect(group([1, 1], colsTotal)).toEqual([1, 0]);
    expect(group([1, 1, 1], colsTotal)).toEqual([1, 0, 0]);
    expect(group([1, 5, 5, 5], colsTotal)).toEqual([1, 0, 0, 0]);
    colsTotal = 3;
    expect(group([1, 1, 1, 1], colsTotal)).toEqual([1, 1, 1, 0]);
    expect(group([1, 1, 1, 5, 5], colsTotal)).toEqual([1, 1, 1, 0, 0]);
});

it('category items are truncated if items < columns', () => {
    let colsTotal = 4;
    expect(group([5], colsTotal)).toEqual([4]);
    expect(group([3, 3], colsTotal)).toEqual([3, 1]);
    expect(group([10, 1], colsTotal)).toEqual([3, 1]);
    expect(group([1, 10, 1], colsTotal)).toEqual([1, 2, 1]);
});