const btn=document.querySelector('.btn')
const guess=document.querySelector('input')
const msg=document.querySelector('.msg');
let play=false;
let sWords=['python','javascript','c++','java','c#','html','css',
'reactjs','angular','android','sql'];


let newWords="";
let randWord="";

const crNewWords=()=>{
   let ranNum=Math.floor(Math.random() * sWords.length);
    let newTempSwords=sWords[ranNum];
    return newTempSwords;

}

const scrambleWords=(arr)=>{
    for(let i=arr.length-1;i>=0;i--)
    {
        let temp=arr[i];
        let j=Math.floor(Math.random()*(i+1));
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click',()=>{
    if(!play)
    {
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle("hidden");
        newWords= crNewWords();
        randWord=scrambleWords( newWords.split("")).join("");
        msg.innerHTML=`Guess the Word ${randWord}`;
    }else
    {
        let tempWord=guess.value;
        if(tempWord===newWords)
        {
            play=false;
            msg.innerHTML=`Absolutly corret. It is ${ newWords}`;
            btn.innerHTML="Start Again";
            guess.classList.toggle("hidden");
            guess.value="";
        }
        else
        {
            msg.innerHTML=`Sorry !It is not correct Try Again ${randWord}`
            guess.value="";
        }

    }
   
})
