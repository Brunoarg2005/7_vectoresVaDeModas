Main();
function Main(){
	let cant= prompt("ingrese la cantidad de elementos del vector:","");
	let vector = [];
	for(let i=0; i<cant; i++){
		vector.push(Random(10));
	}
	document.write("Numeros aleatorios:<br>");
	for(let i=0; i<cant; i++){
		document.write(" "+vector[i]+" ");
	}
	document.write("<br>La moda de este vector es: "+Moda(vector));
}

function Random(max){
    return Math.floor(Math.random()*max);
}

function Moda(arr){
	let moda = null;
	let max=0
	for(let i = 0; i < arr.length; i++){
		let cont = 0
		for(let j=0; j<arr.length; j++){
			if(arr[i]===arr[j]){
				cont++
			}
		}
		if(cont>max){
			max=cont;
			moda = arr[i];
		}
	}
	return moda;
}