(function() {
    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    
    myForm.addEventListener('submit', function(event){

        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const celeb = document.querySelector('#celeb').value;
        const food = document.querySelector('#food').value;
        const bodyP = document.querySelector('#bodyP').value;
       
        
        let myText;
        if(noun1 == ''){
             myText = `Please provide a noun`;
             document.querySelector('#noun1').focus();

        } 
        
        else if (noun2 ==''){
            myText = `Please provide a second noun`;
            document.querySelector('#noun2').focus();
        }

        else if (adj ==''){
            myText = `Please provide an adjective`;
            document.querySelector('#adj').focus();
        }

        else if (celeb ==''){
            myText = `Please provide a Celeb Name`;
            document.querySelector('#celeb').focus();
        }

        else if (bodyP ==''){
            myText = `Please provide a Body Part`;
            document.querySelector('#bodyP').focus();
        }

        else if (food ==''){
            myText = `Please provide a Food`;
            document.querySelector('#food').focus();
        }

         else {
            myText = `Oh, <span class= 'color'>${noun1}</span> this is my love letter to you. Everyday I wake up and am reminded of you. Your eyes, are <span class= 'color'>${adj}</span> and as big as a(n) <span class= 'color'>${noun2}</span>. Your smile is brighter than <span class= 'color'>${celeb}</span>. When I think of you, I'm reminded of the smell of your <span class= 'color'>${bodyP}</span>. Oh, a sweet fragrance with a tinge of <span class= 'color'>${food}</span>. You truly are perfect in all your being. So I write this letter asking once and for all, would you be my valentine?`;
            document.querySelector('#noun1').value = "";
            document.querySelector('#noun2').value = "";
            document.querySelector('#adj').value = "";
            document.querySelector('#celeb').value = "";
            document.querySelector('#bodyP').value = "";
            document.querySelector('#food').value = "";
        }

        
        (function () {
            document.querySelector('.open').addEventListener('click',function(event){
                event.preventDefault();
                document.getElementById('overlay').className = 'showing';
            });
        
            document.querySelector('.close').addEventListener('click',function(event){
                event.preventDefault();
                document.getElementById('overlay').className = 'hidden';
        
            });
        
            document.addEventListener('keydown', function(event){
                if (event.key === 'Escape') {
                    document.getElementById ('overlay').className = 'hidden';
                }
            })


            // document.getElementById('madlib').style.color = 'red';

            
        
        })();

        madlib.innerHTML = myText
     })
    

}());