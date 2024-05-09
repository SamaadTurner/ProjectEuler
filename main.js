var fs = require('fs');

fs.readdir('./solutions', (err, files) => {
  files.forEach((file) => {
    const module = import('./solutions/' + file).then((m) => {
      var solution = new m.default();
      console.log('name: ', solution);
      console.log('expected: ', solution.solution());
      console.log('actual: ', solution.solve());
    });
  });
});
