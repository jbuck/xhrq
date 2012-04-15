/* xhrq.js is MIT licensed (c) 2012 Jon Buckley. github.com/jbuck/xhrq */

( function() {
  "use strict";

  var maxActive = 4,
      active = [],
      queued = [],
      queuedData = [];

  function cleanUpXHR() {
    active.splice( active.indexOf( this ), 1 );

    var xhr = queued.shift(),
        data = queuedData.shift();
    if ( xhr ) {
      active.push( xhr );
      xhr.send( data );
    }
  }

  XMLHttpRequest.prototype.queue = function queue( data ) {
    this.addEventListener("loadend", cleanUpXHR, false);

    if ( active.length < maxActive ) {
      active.push( this );
      this.send( data );
      return;
    }
    
    queued.push( this );
    queuedData.push( data );
  };
})();
