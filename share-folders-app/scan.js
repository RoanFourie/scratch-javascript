// This code uses node's fs module, and recursively goes through all files and
// folders in a directory. It exports the scan function which gets called with
// a path and an alias. The path is the folder to be scanned, and the alias is
// the name with which it will be presented in the interface (we don't want to
// show the real directory name which is served). In our example, we replace it
// with "files".

var fs = require('fs'),
    path = require('path');

module.exports = function scan(dir, alias){

    return {
        name: alias,
        type: 'folder',
        path: alias,
        items: walk(dir, alias)
    };

};

function walk(dir, prefix){

    prefix = prefix || '';

    if(!fs.existsSync(dir)){
        return [];
    }

    return fs.readdirSync(dir).filter(function(f){

        return f && f[0] != '.'; // Ignore hidden files

    }).map(function(f){

        var p = path.join(dir, f),
            stat = fs.statSync(p);

        if(stat.isDirectory()){

            return {
                name: f,
                type: 'folder',
                path: path.join(prefix, p),
                items: walk(p, prefix)
            };

        }

        return {
            name: f,
            type: 'file',
            path: path.join(prefix, p),
            size: stat.size
        }

    });

};
