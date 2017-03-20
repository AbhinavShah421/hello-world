var fs = require("fs"),
    path = require("path");


fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        throw err;
    }
for(var i=0;i<list.length;i++ ){
          if(list[i].match(".md"))
        console.log( list[i]);
}
});
