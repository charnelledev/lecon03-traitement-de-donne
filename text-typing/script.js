const target = document.getElementById('target');

let array = [
    "Developpeur",
    "Graphiste",
    "Web design"
]

let wordIndex = 0;
let letterIndex = 0;
// letter.textContent = array[2][2];
 
 const createLetter = ()=>{
    const letter = document.createElement('span');
    target.appendChild(letter);
     letter.textContent = array[wordIndex][letterIndex];
     setTimeout(()=>{
    letter.remove();
     }, 2000);
 }
    const loop = () =>{
        setTimeout(()=>{
         if (wordIndex>=array.length){
            wordIndex =0 ;
            letterIndex = 0;
            loop();
         }else if (letterIndex <array[wordIndex].length){
               createLetter();
               letterIndex++;
               loop();
            }else{
                setTimeout(()=>{
                wordIndex++;
                letterIndex = 0;
                loop();
                
                },2000);
            }
           },50);
           }
    loop()

 