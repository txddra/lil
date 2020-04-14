

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
    },
    addToEnd(value){
  if(this.head === null){
  this.head = Node(value);

  return;
  
  }
  let currently = this.head;
    while(currently.next !== null ){

      currently = currently.next;ijn 
    }
},
removeFromStart(){
  this.head = this.head.next

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
