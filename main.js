var shrimp = 0;
var crabs= 0;
var lobsters = 0;
var man = 0;
var boats = 0;
var shramp = 0;
var crabCost = 0;


function addShrimp(number){
    shrimp = shrimp + number;
    document.getElementById("shrimpCount").innerHTML = shrimp;
};
// Purchases
function hireCrab(){
   var crabCost = Math.floor(10* Math.pow(1.1,crabs));
   if(shrimp>= crabCost){
        crabs = crabs + 1;
        shrimp = shrimp - crabCost;
        document.getElementById('crabs').innerHTML = crabs;
        document.getElementById('shrimpCount').innerHTML = shrimp;
   };
   var nextCost = Math.floor(10 * Math.pow(1.1,crabs));
   document.getElementById('crabCost').innerHTML = nextCost;
};
function hireLobster(){
    var lobsterCost = Math.floor(100* Math.pow(1.1,lobsters));
    if(shrimp>= lobsterCost){
        lobsters = lobsters + 1;
         shrimp = shrimp - lobsterCost;
         document.getElementById('lobsters').innerHTML = lobsters;
         document.getElementById('shrimpCount').innerHTML = shrimp;
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,lobsters));
    document.getElementById('lobsterCost').innerHTML = nextCost;
 };
 function hireMan(){
    var manCost = Math.floor(1000* Math.pow(1.1,man));
    if(shrimp>= manCost){
        man = man + 1;
         shrimp = shrimp - manCost;
         document.getElementById('man').innerHTML = man;
         document.getElementById('shrimpCount').innerHTML = shrimp;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,man));
    document.getElementById('manCost').innerHTML = nextCost;
 };
 function hireBoat(){
    var boatCost = Math.floor(10000* Math.pow(1.1,boats));
    if(shrimp>= boatCost){
        boats = boats + 1;
         shrimp = shrimp - boatCost;
         document.getElementById('boats').innerHTML = boats;
         document.getElementById('shrimpCount').innerHTML = shrimp;
    };
    var nextCost = Math.floor(10000 * Math.pow(1.1,boats));
    document.getElementById('boatCost').innerHTML = nextCost;
 };
 function hireShramp(){
    var shrampCost = Math.floor(100000* Math.pow(1.1,shramp));
    if(shrimp>= shrampCost){
        shramp = shramp + 1;
         shrimp = shrimp - shrampCost;
         document.getElementById('shramp').innerHTML = shramp;
         document.getElementById('shrimpCount').innerHTML = shrimp;
    };
    var nextCost = Math.floor(100000 * Math.pow(1.1,shramp));
    document.getElementById('shrampCost').innerHTML = nextCost;
 };
 
 function update(){ 
    document.getElementById("shrimpCount").innerHTML = shrimp;
    document.getElementById('crabs').innerHTML = crabs;
    document.getElementById('lobsters').innerHTML = lobsters;
    document.getElementById('man').innerHTML = man;
    document.getElementById('boats').innerHTML = boats;
    document.getElementById('shramp').innerHTML = shramp;
    
    document.getElementById('crabCost').innerHTML = crabCost;
    document.getElementById('lobsterCost').innerHTML = lobsterCost;
    document.getElementById('manCost').innerHTML = manCost;
    document.getElementById('boatCost').innerHTML = boatCost;
    document.getElementById('shrampCost').innerHTML = shrampCost;
}
// Save and load
 function savegame(){
    var save = {
        shrimp: shrimp,
        crabs: crabs,
        lobsters: lobsters,
        man: man,
        boats: boats,
        shramp: shramp,

        crabCost: crabCost,
        lobsterCost: lobsterCost,
        manCost: manCost,
        boatCost: boatCost,
        shrampCost: shrampCost

    }

    localStorage.setItem("save",JSON.stringify(save));
}
    function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.shrimp !== "undefined") shrimp = savegame.shrimp;
    if (typeof savegame.crabs !== "undefined") crabs = savegame.crabs;
    if (typeof savegame.lobsters !== "undefined") lobsters = savegame.lobsters;
    if (typeof savegame.man !== "undefined") man = savegame.man;
    if (typeof savegame.boats !== "undefined") boats = savegame.boats;
    if (typeof savegame.shramp !== "undefined") shramp = savegame.shramp;

    if (typeof savegame.crabCost !== "undefined") crabCost = savegame.crabCost;
    if (typeof savegame.lobsterCost !== "undefined") lobsterCost = savegame.lobsterCost;
    if (typeof savegame.manCost !== "undefined") manCost = savegame.manCost;
    if (typeof savegame.boatCost !== "undefined") boatCost = savegame.boatCost;
    if (typeof savegame.shrampCost !== "undefined") shrampCost = savegame.shrampCost;

    update();

    }

// Ticks
window.setInterval(function(){
    addShrimp(crabs)
    addShrimp(lobsters*3)
    addShrimp(boats*10)
    addShrimp(man*7)
    addShrimp(shramp*25)
    ;

}, 1000);
window.setInterval(function(){
    savegame();
}, 60000);