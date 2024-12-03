//랜덤번호를 입력한다
//유저가 번호를 입력한다 그리고 go라는 버튼을 누른다
//만약 유저 랜덤번호를 맞추면, 맞추었습니다.
//랜덤번호가 < 유저번호보다(적다)  Down !!!
//랜덤번호가 > 유저번호보다(크다)  Up !!
//Reset 버튼을 누르면 게임이 종료된다
//5번의 기회를 다쓰면 게임이 종료된다 ( 더 이상 추측이 불가, 버튼이 disable 
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.


let computerNum = 0;
let playButton = document.getElementById("play-button");  //getElementByClassName:    또는 qeurySelector:id,  또는 class태그 등 다양한 방법이 있다 
let userInput = document.getElementById("user-input");
// console.log(playButton);
let resultArea = document.getElementById("result area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click", play);  // 아래의 play함수를 변수로 가져온다. 함수를 변수로 사용시 ()는 사용치 않는다
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=""})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100+1);  //0~99까지 숫자가 나오므로 1을 더한다.  이 함수는 랜덤번호..
    console.log("정답", computerNum);
}

function play(){
    console.log("시작게임")
    let userValue = userInput.value
    console.log(userValue);

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100 사이 숫자을 입력해 주세요"
        return;
       }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
        return;
       }
    
    chances  --; //한번씩 줄어든다
    console.log("chance",chances);
    // console.log("chances",`${chances}번`);

    chanceArea.textContent = `남은기회 : ${chances}번`;  //동적으로 넣을때 ``표와 ${}를 사용한다
 
    if (userValue < computerNum){
        resultArea.textContent = "UP!!!"
        // console.log("UP!!!");    
    }else if (userValue > computerNum){
        resultArea.textContent = "DOWN!!!"
        console.log("DOWN !!!");
    }else {
        resultArea.textContent = "맞추셨습니다"
        // console.log("맞추셨습니다!!!");
        gameOver=true;
    }

    history.push(userValue);
    console.log(history);
    // console.log("history", `${[history]}`);


    if(chances <1){
        gameOver=true
    }

    if (gameOver == true){
        playButton.disabled = true;
    }

}

//마우스를 올리고 클릭하면 지워진다
// function focusInput() {
//     userInput.value = "";
//   }

function reset(){
    //user input창이 깨끗하게 정리되고
    userInput.value = "";
    //새로운 번호가 생성되게
    pickRandomNum();
     
    resultArea.textContent="결과값이 나옵니다";

}

pickRandomNum(); 