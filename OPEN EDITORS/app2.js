const calculator ={
    add: function(a,b){
    console.log(a+b);
    },
    minus:function(c,d){
        console.log(c-d);
    },
    divide: function(e,f){
        console.log(e-f);
    },
    square:function(x,y){
        console.log(x**y);
    }
    }
    
    
    
    
    calculator.square(10,40)
    calculator.divide(10,2)
    calculator.minus(3,9)
    calculator.add(3,9)//console.log(object); 랑 같은걸 만든 것 같다고 니코가그러네ㅋㅋ
    // 그치 calculator안에있는 add를 호출한거야
    
    
    //#2 한국나이 계산기 
    const age = 96
    function caculateKrAge(ageOfForeigner){
    ageOfForeigner+2;
    }