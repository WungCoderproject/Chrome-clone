    //console.log(123123123);//숫자와 
    //console.log('123');//문자를 넣을 수 있음

    let a = 5
    let b = 10

    const amIFat =true// 이렇게 boolean 타입을 쓰는이유 ex) 사용자가 로그인

    const amISkinny = null;//means nothing 비어있음
    let something; //변수를 만들어줬지만 초기화는 해주지 않았다 이러면 뭐가 나올까? 
    console.log(amISkinny);
    console.log(something);//undefined 이 나오지 
    //컴퓨터 메모리에는 존재하지만 값이 들어가지 않음
    console.log(amIFat);//true 

    let myName = "ws"
    //const myName = "ws"
    myName ='miza'
    myName ='dolorus'
    myName ='factos'
    //이렇게 재정의 해도 let은 재정의가 가능하기 때문에 오류가 나지 않는다.


    console.log(a+b);//7
    console.log(a*b);
    console.log(a/b);
    console.log("king is "+ myName);


    ///////////////////////////////////////////////////////////////////////배열////////////////////////////////////////////////////////////////////////////// 
    //요일을 이렇게 하나하나 정의 해줘서 할수도 있겠지만 넘나 귀찮은 것
    /*const sun ="sun"
    const mon ="mon"
    const tue ="tue"
    const wed ="wed"
    const thr ="thr"
    const fri ="fri"
    const sat ="sat"
    */

    //const daysOfWeek = mon + tue +wed +thr + fri + sat + sun 
    //console.log(daysOfWeek);//이렇게 하면 어떻게돼?
    //montuewedthrfrisatsun 문자열이 다 더해져서 나와  그래서 배열이 필요한거야

    //그럼 어떻게해?
    //
    const daysOfWeek = ["mon", "tue", "wed", "thr",  "fri", "sat", "sun"] 
    console.log(daysOfWeek);

    const nonsense = [1,2,'secret',false,null,true,undefined,"웅자"]
    console.log(daysOfWeek);
    // 지금 뭐한거여? 데이터로 이뤄진 리스트 만든거야

    //daysOfWeek 하루 더 추가하고 싶어 그럼 어떻게 할까? 
    daysOfWeek.push("하이")
    console.log(daysOfWeek);



// 문제 1
// 해바라기라는 반이 있다. A에는 짱구 유리 철수 훈이 맹구가 있다. 근데 오늘 짱아가 전학이 왔다. 
//이 과정을 로직으로 구현해라

const 해바라기 = ["짱구","유리","철수","훈이","맹구"]
console.log(해바라기);

해바라기.push("짱아")
console.log(해바라기);
//해바라기.push([2] ,"가나다")
//console.log(해바라기);

const playerNickname ="미자"
const playerAge = 123123
const playerBeauty = true
const playerHeight = 167

