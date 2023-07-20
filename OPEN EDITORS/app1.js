function sayHello(nameOfPerson){
    console.log(nameOfPerson)
    //console.log('nameOfPerson')
    // 'nameOfPerson' 는 이 문자열을 출력해달라는 말이야 
    }
    
    //function은 내가 계속 반복해서 사용할수있는 코드 조각이라고 생각하면됨
    //어떤이름이든 hello를 해주는 function을 작성할거야
    // {} 안에 작성하는 것이 sayHello를 실행할때마다 실행될 것 이다
    
    sayHello("wung");// sayHello 함수 호출
    sayHello("miza");
    sayHello("아빠");
    // sayHello() 함수를 호출을 하는데 
    //인수로 wung,miza,아빠를 넘겨줘라 
    // 그 인수를 함수가 받아서 
    //console.log(nameOfPerson) 이 예약어로 출력
    
    //#2 파라미터로 받아주기
    function sayHelloAll(nameOfPerson,age){
        console.log(nameOfPerson,age)
        console.log("안녕! 나는"+nameOfPerson+"이고","나는"+age+"살이야 반가워")
        }
    
        sayHelloAll("wung",27)
        sayHelloAll("miza",25)
        //이렇게 인자를 두개 넘겨줄수도 있어 
        //근데 두개를 넘겨 주려면 두개를받아줘야지? 
    
    
        //#3 이 개념 활용해서 계산기 만들기
    
        function plus(firstNumber,secondNumber) {
            console.log("더하기는"+firstNumber+secondNumber);
        }
        
        function divide(a,b){
            console.log("나누기는"+a/b);
        }
    
        /*function minus(c,d){
            console.log("빼기는"+c-d);
        }*/
        //plus() //undefined undefined 인자로 넘겨주지 않으니까 
        plus(1,4)
        divide(6,3)
        //minus(6,2)
    
    
        //#4 
        const player = {
            name:'미자',
            age:20,
            sex:"W",
        sayHello: function(otherpersonname,lastname){
            console.log("안녕!"+otherpersonname,lastname);
        } // 함수도 객체에 들어갈 수 있다.
        }
    
        console.log(player.name);
        console.log(player.age);
        //player.sayHello()// player객체리터럴에 있는 sayHello함수를 호출
        // 근데 이건 다른 객체들과 소통할 수 없잖아
        player.sayHello("웅지","니어")