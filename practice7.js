//practice1

let worker = [
  {id:1 , job1:"A",job2: "B" ,status1:"done", status2:"notdone"},
  {id: 2, job1:"C", job2: "D", status1: "not done", status2:"donelate"},
  {id: 3, job1:"E", job2: "F", status1: " done", status2:"notdone"},
  {id: 4, job1:"G", job2: "H", status1: "not done", status2:"donelate"},
  ];
  for(let i =0; i < worker.length; i++){
    if(worker[i].status1 === "donelate" || worker[i].status2 === "donelate"){
      console.log("error");
    }
  }
  let c =0;
  while( c < worker.length ){
    if(worker[c]. status1 !== "done" || worker[c].status2 !== "done")
    console.log("work should done");
    c++;
  }

  //practice2

  let movie=[
    {name:"T", genre:"Action"},
    {name:"F" , genre:"Drama"},
    {name: "B", genre:"Action"},
    {name:"P", genre:"Mystery"},
    {name: "C", genre:"Action"},
    {name:'R', genre:"Action"}
    ];
    
     let i =0;
    for(film of movie){
    if(film.genre === "Action" && i < 3){
        i++;
      console.log(film.name);
     
    }else if (i === 3){
      break;
    }
  }

//pracitce3

const info = {
  name: "Sara",
  lastname : "ahmadi",
  age : 24
};

let {lastname, age} = info;
lastname = "Sahar";
console.log(lastname);
console.log(age);


