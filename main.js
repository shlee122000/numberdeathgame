let computerNum = 0;
let playButton = document.getElementById("play-button");  //getElementByClassName:    또는 qeurySelector:id,  또는 class태그 등 다양한 방법이 있다 
let userInput = document.getElementById("user-input");
// console.log(playButton);
let resultArea = document.getElementById("result area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

playButton.addEventListener("click", play);  // 아래의 play함수를 변수로 가져온다. 함수를 변수로 사용시 ()는 사용치 않는다
resetButton.addEventListener("click",reset);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100+1);  //0~99까지 숫자가 나오므로 1을 더한다.  이 함수는 랜덤번호..
    console.log("정답", computerNum);
}

function play(){
    console.log("시작게임")
    let userValue = userInput.value
    console.log(userValue);
    
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
    }


    if(chances <1){
        gameOver=true
    }

    if (gameOver == true){
        playButton.disabled = true;
    }

}

function reset(){
    //user input창이 깨끗하게 정리되고
    userInput.value = "";
    //새로운 번호가 생성되게
    pickRandomNum();
     
    resultArea.textContent="결과값이 나옵니다";

}

pickRandomNum(); 