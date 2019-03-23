const fs = require('fs'); 
const archiver = require('archiver'); 
const extract = require('extract-zip'); 

let operacao = process.argv[2]; 
let origem = process.argv[3]; 
let destino = process.argv[4]; 

if (operacao === 'compacta') {
	let saida = fs.createWriteStream(destino);

	let compactador = archiver('zip'); 

	compactador.pipe(saida); 

	
	compactador.append(fs.createReadStream(origem), { name: 'file' }); 

	compactador.finalize(); 
}
if (operacao === 'descompacta') {
	
	extract(origem, { dir: destino }, function (err) {
		if (err) return console.log(err);
		console.log("C:\Users\Leandro Santos\Desktop\Compactados");
	});
}
