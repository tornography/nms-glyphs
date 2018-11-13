'use strict';

/**
 * extend, fill and uppercase value
 * @param {string} val
 * @param {string} shift
 * @param {string} mod
 * @param {number} length
 * @return {string}
 */
const shiftModUpFill = (val, shift, mod, length) => {
    return (Math.abs((parseInt(val, 16) + shift) % mod).toString(16).toUpperCase()).padStart(length, '0');
};

/**
 * generate diferent formats of coordinates
 * @param {string} coords
 * @return {object}
 */
const coordsFormated = (coords) => {
    const blocks = coords.match(/[0-9a-fA-F]{4}/g);

    if (coords.match(/[^0-9a-fA-F_\-:]/)) {
        return { error: 'Incorrect format. Only hexa decimal allowed.' };
    }

    if (coords.length !== 16 && coords.length !== 19) {
        return {
            error: 'Incorrect length. Coordinates must have a length of 16 or 19.',
            length: coords.length 
        };
    }
    
    return {
        original: blocks.join(':'),
        stripped: blocks.join(''),
        dashed: blocks.join('-'),
        underscored: blocks.join('_'),
        blocks: blocks
    };
};

/**
 * translate hex string to array of words
 * @param {string} gylphs
 * @return {array}
 */
const glyphsToWords = (glyphs) => {
    const words = {
        0: 'sunset',
        1: 'bird',
        2: 'face',
        3: 'diplo',
        4: 'eclipse',
        5: 'balloon',
        6: 'boat',
        7: 'bug',
        8: 'dragonfly',
        9: 'galaxy',
        A: 'voxel',
        B: 'fish',
        C: 'tent',
        D: 'rocket',
        E: 'tree',
        F: 'atlas'
    };

    return glyphs.match(/.{1}/g).map(g => { return words[g]; });
};

/**
 * convert coordinates to glyphs
 * @param {string} coords
 * @return {object}
 */
const getCoordsDetails = (coordinates) => {
    const coords = coordsFormated(coordinates);

    if (coords.error) {
        return coords;
    }

    const bigShift = parseInt('801', 16);
    const smallShift = parseInt('81', 16);
    const bigMod = parseInt('1000', 16);
    const smallMod = parseInt('100', 16);

    const x = coords.blocks[0];
    const y = coords.blocks[1];
    const z = coords.blocks[2];
    const p = coords.blocks[3].substr(0, 1);
    const s = coords.blocks[3].substr(1, 3);

    const a = p.toUpperCase();
    const b = s.toUpperCase();
    const c = shiftModUpFill(y, smallShift, smallMod, 2);
    const d = shiftModUpFill(z, bigShift, bigMod, 3);
    const e = shiftModUpFill(x, bigShift, bigMod, 3);

    const glyphs = (a + b + c + d + e);

    const data = {
        coordinates: { ...coords },
        glyphs: {
            hex: glyphs,
            words: glyphsToWords(glyphs)
        }
    };
    return data;
};

module.exports = getCoordsDetails;