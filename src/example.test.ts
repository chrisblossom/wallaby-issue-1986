'use strict';

import fs from 'fs';
import path from 'path';

test('javascript test file exists', () => {
  expect({ first: 1 }).toMatchSnapshot();
  expect({ second: 2 }).toMatchSnapshot();

  const snapshotFileTSPath = path.resolve(__dirname, '__snapshots__/example.test.ts.snap');
  const snapshotFileTSExists = fs.existsSync(snapshotFileTSPath);
  expect(snapshotFileTSExists).toEqual(true);

  const snapshotFileJSPath = path.resolve(__dirname, '__snapshots__/example.test.js.snap');
  const snapshotFileJSExists = fs.existsSync(snapshotFileJSPath);
  expect(snapshotFileJSExists).toEqual(false);
});

