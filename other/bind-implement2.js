let me = {
  'name': 'tommy',
  'height': 178,
  getHeight: function() {
    console.log(` my name is ${this.name} , 
    my height is ${this.height},
    the person i am thinking about is ${arguments[0]}
    her height is ${arguments[1]}`)
  }
}



let meBinded = me.getHeight.bind(me, 'sandra')
meBinded('158')

