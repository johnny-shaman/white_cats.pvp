{
  const _ = require('white_cats');
  const waiten = _([]);

  const wait = ws => waiten.pushR(
    _(ws).As
    .send(_(false).toJSON._)
    .on('message', sdp => _(ws).take({sdp})._)
    .As._
  );

  const associate = ws => _(ws)
  .As
  .send(waiten._[0].sdp)
  .on('message', m => waiten.popL.As.send(m).As._)
  .As._

  module.exports = (path = './public') => (port = process.env.PORT, ip =  process.env.IP, ...opt) => _(require('express'))
  .pipe(
    it => ({it, app: it()}),
  )
  .loop(
    ({app}) => require('express-ws')(app),
    ({it, app}) => _(app)
    .As
    .use(it.static(path))
    .ws('/', ws => 
      waiten._.length === 0
      ? wait(ws)
      : associate(ws)
    )
    .listen(port, ip, ...opt)
  )._;
}
