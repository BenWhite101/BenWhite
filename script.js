const grid = document.getElementById('grid');
const max = 200;
$('#getMax').html("(" + max + ")");
var colors = {
  
normal: '#A8A77A',
fire:  '#EE8130',
water:  '#6390F0',
electric:  '#F7D02C',
grass:  '#7AC74C',
ice:  '#96D9D6',
fighting:  '#C22E28',
poison:  '#A33EA1',
ground:  '#E2BF65',
flying:  '#A98FF3',
psychic:  '#F95587',
bug:  '#A6B91A',
rock:  '#B6A136',
ghost:  '#735797',
dragon:  '#6F35FC',
dark:  '#705746',
steel:  '#B7B7CE',
fairy:  '#D685AD'
};

/*function getDesc(i) {
  
  var pokeURL = "https://pokeapi.co/api/v2/pokemon-species/" + i;

    $.getJSON(pokeURL, function(data){ 
      
    });
}*/

for(let i = 1; i <= max; i++){
   var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + i;

    $.getJSON(pokeURL, function(data){
       // console.log(data);
       // console.log(JSON.stringify(data, null, "  "));
      
      var pokeID = data.id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
          if (data.types[1].type.name != "null"){
            var pokeType2 = data.types[1].type.name;
            var pokeType2html = "<span style='background:" + colors[pokeType2] + "'>" + data.types[1].type.name + "</span>";
            
            var pokeColor = "linear-gradient(to bottom right," + colors[pokeType2] + "," + colors[pokeType1] + ")";     
            //console.log(pokeColor);
          }
        }
        else {
          var pokeType2 = ""; 
          var pokeType2html = ""; 
          var pokeColor = colors[pokeType1];
          
        }
      var idColor;
      if(pokeType2 == ""){
        idColor = data.types[0].type.name;
      } else {
        idColor = data.types[1].type.name;
            
      }
      
      var h = data.height;
      var w = data.weight;
      
      var spd_n = data.stats[0].stat.name;
      var spd = data.stats[0].base_stat;
      
      var spDef_n = data.stats[1].stat.name;
      var spDef = data.stats[1].base_stat;
      
      var spAtk_n = data.stats[2].stat.name;
      var spAtk = data.stats[2].base_stat;
      
      var def_n = data.stats[3].stat.name;
      var def = data.stats[3].base_stat;
      
      var atk_n = data.stats[4].stat.name;
      var atk = data.stats[4].base_stat;
      
      var hp_n = data.stats[5].stat.name;
      var hp = data.stats[5].base_stat;
      
      var spr = data.sprites.front_default;
      

      //  console.log("Number: ", pokeID);
       // console.log("Name: ", pokeName);
      //  console.log("Type 1: ", pokeType1);
      //  console.log("Type 2: ", pokeType2);
      
      const pokeEl = document.createElement('div');
      pokeEl.setAttribute("style","order:" + i);
      pokeEl.setAttribute("class","card-wrap card-wrap-" + i);
      
      const pih = `
        <div class="card" style="background: ${pokeColor};">
    <div class="card-body" >
      
        <div class="frame">
            <div class="img-box">
                <img  src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png"/>
<img style="display:none;" src="${spr}"> 
            </div>

        </div>

        <div class="text-box">
            <p class="pk-id" style="color:${colors[idColor]}">#${data.id}</p>
            <p class="pk-name">${pokeName}</p>
            <img style="display:none;" class="sprite" src="${spr}"> 
            <div class="pk-types">
                <span class="pk-type1" style="background:${colors[pokeType1]}">${pokeType1}</span>
                ${pokeType2html}
            </div>
            
            <div class="stat-grid">
             
                    <div><p>HP</p>${hp}</div>
                    <div><p>ATK</p>${atk}</div>
                    <div><p>DEF</p>${def}</div>
                  
                    <div><p>SPD</p>${spd}</div>
                    <div><p>SP.ATK</p>${spAtk}</div>
                    <div><p>SP.DEF</p>${spDef}</div>
                 
            </div>

        </div>

    </div>
</div>

    `;
      
 /*     
if($('#grid').children().length > 0){
  console.log("HAS");
    $('#grid .card').last().after(pih);
} else {
   console.log("NO HAS");
    $('#grid').prepend(pih);
}
   
*/
      
      //docc += pih;
      
      
      
      pokeEl.innerHTML = pih;
	    grid.appendChild(pokeEl);
      
      
    });
}


/*
$( document ).ready(function() {
  
  setInterval(function(){ $('#grid').html(docc); }, 500);
    
});
*/








/*
function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param;

    $.getJSON(pokeURL, function(data){
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));
      
      var pokeID = data.id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 = null;

        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
      
      
      const pih = `
        <div class="img-box">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
							data.id
						}.png" alt="${pokeName}" />
        </div>
        <div class="info">
            <span class="number">#${data.id}</span>
            <h3 class="name">${pokeName}</h3>
            <small class="type"><span>${pokeType1}</span><span>${pokeType2}</span></small>
        </div>
    `;
      
      $('#aaa').html(pih);

    });
} */

