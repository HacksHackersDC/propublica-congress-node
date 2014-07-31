function contains ( arr, item ) {
  return arr.indexOf( item ) > -1;
}

function alphanumeric ( str ) {
  return /^[a-z0-9]+$/i.test( str );
}

module.exports = {
  urlParams: Object.freeze({
    'bill-id': alphanumeric,
    'bill-type': contains.bind( null, ['introduced', 'updated', 'passed', 'major'] ),
    'chamber': contains.bind( null, ['house', 'senate'] ),
    'committee-id': alphanumeric,
    'congress-number': function ( num ) {
      return contains( [105, 106, 107, 108, 109, 110, 111, 112, 113], Number( num ) );
    },
    'cosponsor-type': contains.bind( null, ['cosponsored', 'withdrawn'] ),
    'district': function ( str ) {
      return !isNan( Number( str ) ) // TODO: add real validation
    }
    'end-date': function () { return true }, // TODO: add real validation,
    'member-id': alphanumeric,
    'member-id-2': alphanumeric,
    'member-id-1': alphanumeric,
    'nomination-category': contains.bind( null, ['received', 'updated', 'confirmed', 'withdrawn'] ),
    'nominee-id': alphanumeric,
    'resource': contains.bind( null, ['subjects', 'amendments', 'related'] ),
    'response-format': contains.bind( null, ['.json', '.xml'] ),
    'roll-call-number': function () { return true }, // TODO: add real validation
    'session-number': function () { return true }, // TODO: add real validation
    'start-date': function () { return true }, // TODO: add real validation
    'state': contains.bind( null, ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'] ),
    'vote-type': contains.bind( null, ['missed_votes', 'party_votes', 'loneno', 'perfect'] ),
    'version': function ( str ) {
      return str === 'v3';
    }
  }),

  queryStringParams: Object.freeze({
    'state': contains.bind( null, ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'] ),
    'district': function ( num ) {
      var num = Number( num );
      return ( num >= 0 && num < 53 );
    }
  })
};
