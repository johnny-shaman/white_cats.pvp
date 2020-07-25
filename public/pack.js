/*
  global
  _
  p
*/
_($.pack).put({
  say (e, d) {
    d && $.byId('say').$("");
  },
  hear (e, d) {
    $.byId('log').append(p.$(d));
  }
});
