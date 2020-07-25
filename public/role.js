/*
  global
  _
*/
_($.role).put({
  say (e) {
    return e.keyCode === 13
    ? ($(e).now(v => $.pvp.send(v)), true)
    : false
  },
  hear (e) {
    console.log(e.data);
    return e.data;
  }
});
