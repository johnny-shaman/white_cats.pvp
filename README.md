# white_cats.pvp
white_cats.pvp is a server side messaging example for WebRTC PvP on Websocket

It is a example of white_cats with echoback

Usage:

Node.js:

```javascript
  require('white_cats.pvp')('./public')(8080, '0.0.0.0')

  //require('white_cats.pvp')(public folder path)(port, ip, ...options)
```

Browser:

```html
    <!-- put a tag into the body tag-->
    <script src="https://cdn.jsdelivr.net/npm/white_cats@0.1.27/cat.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dsand@0.7.60/dsand.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dsand@0.7.60/pvp.js"></script>
```

```javascript
PvP()()();
//PvP(connection term)(server uri)(ice options)
//if connection establish then...

$.pvp.send('message');

// message event listenning
_($.role).put({
  hear (e) {
    return e.data;
  }
});

_($.pack).put({
  hear (d) {
    console.log(d);
  }
});
```
