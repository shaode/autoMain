var app = require('app')
var path = require('path')
var build = require('build')

app.use(function *() {
    this.fileName = path.join(__baseDirname, this.request.path)
    this.body = yield build.start
});
