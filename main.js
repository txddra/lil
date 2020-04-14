

const Node  = function(value){
return {value, next:null }
}

const Lil = function(){
  return {
    head: null,

    addToStart(value){
if(this.head === null){
this.head = Node(value)
}
else if(this.head !== null){
let aHead = this.head 
this.head = Node(value)
this.head.next = aHead
}
    }
    addToEnd(){
  if(this.head === null){
  this.head = Node()
  }

}

  
}
  
}


if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
