'use strict';

import fs from 'fs';
import node from 'when/node';

/**
 * reads the text contents of <name>.txt in the fixtures folder
 * relative to the caller module's test file
 * @param  {String} name - the name of the fixture you want to read
 * @return {Promise<String>} - the retrieved fixture's file contents
 */
export default function readFromFixture(name) {
  return node.call(fs.readFile, './fixtures/' + name + '.txt', 'utf8').then(function (contents) {
    return contents.replace(/\r\n/g, '\n').trim();
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9yZWFkRnJvbUZpeHR1cmUvcmVhZEZyb21GaXh0dXJlLmpzIl0sIm5hbWVzIjpbImZzIiwibm9kZSIsInJlYWRGcm9tRml4dHVyZSIsIm5hbWUiLCJjYWxsIiwicmVhZEZpbGUiLCJ0aGVuIiwiY29udGVudHMiLCJyZXBsYWNlIiwidHJpbSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBT0EsRUFBUCxNQUFlLElBQWY7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFdBQWpCOztBQUVBOzs7Ozs7QUFNQSxlQUFlLFNBQVNDLGVBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzdDLFNBQU9GLEtBQUtHLElBQUwsQ0FBVUosR0FBR0ssUUFBYixrQkFBcUNGLElBQXJDLFdBQWlELE1BQWpELEVBQ0pHLElBREksQ0FDQyxVQUFDQyxRQUFEO0FBQUEsV0FBY0EsU0FBU0MsT0FBVCxDQUFpQixPQUFqQixFQUEwQixJQUExQixFQUFnQ0MsSUFBaEMsRUFBZDtBQUFBLEdBREQsQ0FBUDtBQUVEIiwiZmlsZSI6InJlYWRGcm9tRml4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgbm9kZSBmcm9tICd3aGVuL25vZGUnXG5cbi8qKlxuICogcmVhZHMgdGhlIHRleHQgY29udGVudHMgb2YgPG5hbWU+LnR4dCBpbiB0aGUgZml4dHVyZXMgZm9sZGVyXG4gKiByZWxhdGl2ZSB0byB0aGUgY2FsbGVyIG1vZHVsZSdzIHRlc3QgZmlsZVxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGZpeHR1cmUgeW91IHdhbnQgdG8gcmVhZFxuICogQHJldHVybiB7UHJvbWlzZTxTdHJpbmc+fSAtIHRoZSByZXRyaWV2ZWQgZml4dHVyZSdzIGZpbGUgY29udGVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZEZyb21GaXh0dXJlIChuYW1lKSB7XG4gIHJldHVybiBub2RlLmNhbGwoZnMucmVhZEZpbGUsIGAuL2ZpeHR1cmVzLyR7bmFtZX0udHh0YCwgJ3V0ZjgnKVxuICAgIC50aGVuKChjb250ZW50cykgPT4gY29udGVudHMucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKS50cmltKCkpXG59XG4iXX0=