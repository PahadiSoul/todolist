let todo = [];
let req = prompt("Enter the reqst");

while(true){
    
    if(req == 'quit'){
        console.log("Quiting game");
        break;
    }
    if(req == 'list'){
        console.log("-----------------------");
        for(i=0; i<=todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------------");
    }
    else if (req == 'add'){
        let task =prompt("Add the reqst");
        todo.push(task);
        console.log("task added");
    }
  else if(req == 'delete'){

    let idx = prompt ("pleasee enter the idx to delete");
    todo.splice(idx,1);
    console.log("item is delete");
  }
  else{
    console.log("wrong entryyyyyyy");
  }
    req = prompt("Enter the reqst");
}