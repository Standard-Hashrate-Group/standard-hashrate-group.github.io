const fsPromise = require('fs/promises');
const path = require('path');
const rimraf = require('rimraf');
const Parcel = require('@parcel/core').default;
const ncp = require('ncp').ncp;
const distDir = path.join(__dirname, '../docs')

console.log(distDir)

rimraf(path.join(__dirname, '../docs'), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  (async () => {
    let bundler = new Parcel({
      entries: path.join(__dirname, '../src/*.html'),
      defaultConfig: require.resolve('@parcel/config-default'),
      defaultTargetOptions: {
        engines: {
          browsers: ['> 1%'],
        },
        distDir: path.join(__dirname, '../docs')
      },
      mode: 'production',
    });

    await bundler.run();

    try {
      await fsPromise.copyFile(
        path.join(__dirname, '../CNAME'),
        path.join(__dirname, '../docs/CNAME')
      );
      ncp(path.join(__dirname,'../reports'), path.join(__dirname,'../docs/reports'), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('sync reports done!');
      });
      console.log('CNAME copied success');
    } catch {
      console.log('CNAME copied failed');
    }
  })();
});
