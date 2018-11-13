# nms-glyphs
Converts galactic coordinates of [No Man's Sky](https://www.nomanssky.com/) (game) to portal glyphs.

# Online API
There is an API online you can use under https://nmsapi.tornography.com/coordinates/1111:2222:3333:4444

Replace example coordinates with your own.

# Code Example
```js
import CoordsToGlyphs from 'path_to_node_modules/@tornogrphy/nms-glyphs';

const details = CoordsToGlyphs('1111:2222:3333:4444');
```

Example output should be
```
{
  "coordinates": {
    "original": "1111:2222:3333:4444",
    "stripped": "1111222233334444",
    "dashed": "1111-2222-3333-4444",
    "underscored": "1111_2222_3333_4444",
    "blocks": [
      "1111",
      "2222",
      "3333",
      "4444"
    ]
  },
  "glyphs": {
    "hex": "4444A3B34912",
    "words": [
      "eclipse",
      "eclipse",
      "eclipse",
      "eclipse",
      "voxel",
      "diplo",
      "fish",
      "diplo",
      "eclipse",
      "galaxy",
      "bird",
      "face"
    ]
  }
}
```

# Installation
```bash
$ npm i @tornography/nms-glyphs
```

# Tests
```bash
$ npm test
```