import {add, total} from './App';


test('add', () => {
    expect(add(1,2)).toBe(3);
    expect(add(-2,2)).toBe(0);
    expect(add(-1,-2)).toBe(-3);

})

test('total', () => {
    expect(total(5, 20)).toBe("$25")
})
