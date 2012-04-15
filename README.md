# xhrq.js - XMLHttpRequest queues. #

xhrq.js is for those times when you're at a hackjam with 30 minutes left to go and your prototype is sending 1,000 requests/minute to the already overloaded API. It adds a single method, `.queue( data )`, to the XMLHttpRequest prototype that only allows 4 active requests at once. Otherwise, `.queue()` works exactly the same as `.send()`.
