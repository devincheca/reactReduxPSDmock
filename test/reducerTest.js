const assert = require('assert');
const visibilityFilter = require('../reactDev/reducers/visibilityFilter.jsx');

describe('Reducer', function ()
{
  it('should return default state', function ()
  {
    assert.equal(
      visibilityFilter(
        "DEFAULT", 
        { type: 'none' }), 
        "DEFAULT"
      );
  });
  it('should return test as the filter', function ()
  {
    assert.equal(
      visibilityFilter(
        {}, { type: 'SET_VISIBILITY_FILTER', filter: 'TEST' }),
      'TEST'
    );
  });
});