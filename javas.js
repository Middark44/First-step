/*const person = {
    firstName: "Jon",
    lastName:'Doe',
    hobby: ['coins','movies','woodwork',],
    address:{ street:'34 Westminster Lane',state:'Maine'}
}


const todos =[
    {id:1,
    take:'Out trash',
    isCompleted:false},

    {id:2,
    take:'meeting',
    isCompleted:false},

    {id:3,
    take:'hunt',
    isCompleted:false},
    ]

//Higher Order Array Method: forEach,map,filter

const todoText=todos.filter(function(todo){
    return todo.isCompleted === true;

}).map(function(todo){
    return todo.take
})

const x = 10

if(x == 10){
    console.log()
} else{
    console.log
} 

/*let orange = prompt("how old are you", 100);

alert(`you are ${orange} years old`)*/

//Constructor patte


/*for(i=0;i<15;i++){
    document.write(i)
    if(i===5){
        continue;
    }
}

const txt = "Hello World";
let x = txt.length;
alert(x);

let note;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
         day = "Monday";
      break;
    case 2:
     day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
      default:
          text = "Such a Fascinanting, yet Mercurial tempermemnt"
          */
        

const rock = document.getElementById('rock');
const scissors= document.getElementById("scissors");
const paper = document.getElementById('paper');
const myPara=document.getElementById('para');



rock.addEventListener('click',function(){
 computerChoice= Math.random()
  if(computerChoice<=0.5){
    myPara.innerHTML='Victory! Rock beats scissors!';
  }else if(computerChoice>=0.7){
    myPara.innerHTML='Defeat! Paper beats Rock.'
  }
   else{
     myPara.innerHTML='Interesting, there is a tie. Rock upon Rock!'
   }

})

paper.addEventListener('click',function(){
  computerChoice= Math.random()
   if(computerChoice<=0.5){
     myPara.innerHTML='Victory! Paper beats Rock!'
   }else if(computerChoice>=0.7){
     myPara.innerHTML='Defeat! Scissors beats paper'
   }
    else{
      myPara.innerHTML='Interesting, there is a tie. Paper upon Paper!'
    }
 
 })

 scissors.addEventListener('click',function(){
  computerChoice= Math.random()
   if(computerChoice<=0.5){
     myPara.innerHTML='Victory! Scissors beats rock!'
   }else if(computerChoice>=0.7){
     myPara.innerHTML='Defeat! Rock beats Scissors.'
   }
    else{
      myPara.innerHTML='Interesting, there is a tie. Scissors upon Scissors!'
    }
 
 })
