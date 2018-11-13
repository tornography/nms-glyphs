const getCoordsDetails = require('./index');

test('converts coordinates to glyphs', () => {
    expect(getCoordsDetails('1111222233334444').glyphs.hex).toBe('4444A3B34912');
});

test('converts coordinates to spoken glyphs', () => {
    expect(getCoordsDetails('1111222233334444').glyphs.words).toEqual(['eclipse','eclipse','eclipse','eclipse','voxel','diplo','fish','diplo','eclipse','galaxy','bird','face']);
});

test('original coords have colons', () => {
    expect(getCoordsDetails('1111222233334444').coordinates.original).toBe('1111:2222:3333:4444');
});

test('coords are hyphend', () => {
    expect(getCoordsDetails('1111:2222:3333:4444').coordinates.stripped).toBe('1111222233334444');
});

test('coords are hyphend', () => {
    expect(getCoordsDetails('1111222233334444').coordinates.dashed).toBe('1111-2222-3333-4444');
});

test('coords have underscores', () => {
    expect(getCoordsDetails('1111222233334444').coordinates.underscored).toBe('1111_2222_3333_4444');
});

test('splits coordinates into blocks', () => {
    expect(getCoordsDetails('1111222233334444').coordinates.blocks).toEqual(['1111', '2222','3333','4444'])
});
