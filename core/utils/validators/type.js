module.exports = ( v, type, msg ) => {
  if ( typeof v !== type ) {
    throw new TypeError( msg );
  }
};
