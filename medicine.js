Medicine = function() {

};


/*
  place LEVELS number of medicine bottles
*/
Medicine.placeAll = function() {
  // should do some more treatment to re-initialize
  if(Medicine.initied){
    return false
  }
  Medicine.initied = true
  Medicine.group = game.add.group()
  d = WORLD_H / (LEVELS )
  for(var i = 0; i < LEVELS; i++){
    var m = Medicine.group.create(game.world.randomX, (d*i), 'mushroom')
    m.body.immovable = true;
    // console.log('mushroom', d*i)
  }
};