
let pokedox=document.getElementById("pokedox")



let fetchpokemon=()=>{

	let promises=[];

	for (let i=1;i<=150;i++){
	
let url=`https://pokeapi.co/api/v2/pokemon/${i}`;

promises.push(fetch(url).then(res=>{
	return res.json()}));
}

Promise.all(promises).then((results)=>{
	let pokemon=results.map((data)=>({
		name:data.name,
		id:data.id,
		image:data.sprites['front_default'],
		type:data.types.map((type)=>type.type.name).join(', '),
	}));

	displaypokemon(pokemon);
});


	
	



};

let displaypokemon=(pokemon)=>{
let a=pokemon.map((poke)=>
	`<li class="card">
<image class="card-image" src="${poke.image}"/>
<h2 class="card-title">${poke.id} . ${poke.name}</h2>
<p class="card-subtitle">Type : ${poke.type}</p>

	</li>`).join('');

pokedox.innerHTML=a
}
fetchpokemon();