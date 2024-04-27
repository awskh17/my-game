            var y;
            var x;
            var score={ wins : 0,loses : 0,equals : 0};
            function operate(z){
            x=z;
            y=parseInt(Math.random()*3+1);
            if(x==y)  equal();
            else if(x==1)
             {
                if(y==2)  lose();
                else  win();
             } 
             else if(x==2)
             {
                if(y==3)  lose();
                else  win();
             }
             else
             {
                if(y==1)  lose();
                else  win();
             }
             if(y==1) y="rock";
             else if(y==2) y="paper";
             else y="scissor";
             if(x==1) x="rock";
             else if(x==2) x="paper";
             else x="scissor";
             localStorage.setItem('score',JSON.stringify(score));
             refresh();
            }
            function equal()
            {
                score.equals++;
                document.getElementById("status").innerHTML='ties';
            }
            function lose()
            {
                score.loses++;
                document.getElementById("status").innerHTML='You Lose';
            }
            function win()
            {
                score.wins++;
                document.getElementById("status").innerHTML='You Win';
            }
            function reset()
            {
                score.wins=0;
                score.loses=0;
                score.equals=0;
                localStorage.removeItem('score');
                refresh();
                document.getElementById("result").innerHTML="";
                document.getElementById("status").innerHTML="";
            }
            function refresh()
            {
             score=JSON.parse(localStorage.getItem('score'))||{wins:0,loses:0,equals:0};
             document.getElementById("result").innerHTML='you'+`<img src="C:/Users/AWS/aws/game/my-game/${x}.jpg" class="moveicon U" >`+`<img src="C:/Users/AWS/aws/game/my-game/${y}.jpg" class="moveicon com">`+ 'computer';
             document.getElementById("wins").innerHTML=score.wins;
             document.getElementById("loses").innerHTML=score.loses;
             document.getElementById("equals").innerHTML=score.equals;
            }
            let isautoplay=0;
            let intervalid;
            function autoplay()
            {
             if(!isautoplay)
             {
                intervalid= setInterval(function(){operate(parseInt(Math.random()*3+1))},1000);
                 document.querySelector(".autoplaybut").innerHTML='stop auto playing';
                 isautoplay=1;
             }
             else 
             {
                clearInterval(intervalid);
                document.querySelector(".autoplaybut").innerHTML='autoplay';
                isautoplay=1;
             }
             
            }