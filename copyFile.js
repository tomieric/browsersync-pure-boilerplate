// fork on https://github.com/KavitaJadhav/Copy
var copy = {};
var fs = require('fs');

copy.createDir = function(directory){
	if(!fs.existsSync(directory))  fs.mkdirSync(directory);
};

copy.filesInDirectory = function(directory){
	return fs.readdirSync(directory);
};

copy.removeDirectoryRecursively = function(directory){
	if(!fs.existsSync(directory)) return;

	var files = copy.filesInDirectory(directory);
	var path;

	files.forEach(function(file){
		path = directory + '/' + file;
		if(fs.lstatSync(path).isDirectory()) return copy.removeDirectoryRecursively(path);
		fs.unlinkSync(directory + '/' + file);
	});
	fs.rmdirSync(directory);
};

copy.copyFileToDestination = function(source , destination , file, replacement){
	var writeLocation = destination +'/'+ file;
	var readLocation = source + '/' + file;

	if(fs.lstatSync(readLocation).isDirectory()) return copy.copyFiles(readLocation , writeLocation);
	if(fs.existsSync(writeLocation)) return ;
	
	var text;
	//console.log("\n.........Copying "+ file + " to " + destination)
    
    // 替换字符串
    // 对于 html 模板中引用静态资源路径进行替换
    if(!!replacement && Array.isArray(replacement)) {
         text = fs.readFileSync(readLocation, 'utf-8');
         replacement.map(function(htmlStr) {
             text = text.replace(htmlStr.reg, htmlStr.text)
         })
         fs.writeFileSync(writeLocation, text, 'utf-8');
    } else {
        text = fs.readFileSync(readLocation);
        fs.writeFileSync(writeLocation, text);
    }
	
};

copy.copyFiles = function(source , destination , option, replacement){

	if(option == '--all') copy.removeDirectoryRecursively(destination);
	copy.createDir(destination);

	var sourceFiles = copy.filesInDirectory(source);
	sourceFiles.forEach(function(file){
		copy.copyFileToDestination(source , destination , file, replacement);
	})
};

exports.copy = copy;
