//store the moves in an array
let boxs = ['', '', '', '', '', '', '', '', ''];
let playerX = 'X';
let playerO = 'O';
let player = false;
let counter = 1;
let isWin = [false, ""];
let scoreT= 0;

const play = function (event) {
   //if the counter odd = playerx , counter even =player o 
    if (player == true && counter % 2 === 1) {
        //take place from id
        const position = $(event.target).attr('id');
        boxs[position] = playerX
       //change the text in box with player value x or o symbol
        $(event.target).text(playerX);
       // show who turn now 
        $('.turn').text('Player X turn');
        // fot test it on console
        console.log('Player X played');
    } else if (player == false && counter % 2 === 0) {
        const position = $(event.target).attr('id');
        boxs[position] = playerO
        $(event.target).text(playerO);
        $('.turn').text('Player O turn');
        console.log('Player O played');
    } else if (player == false && counter % 2 === 1) {
        const position = $(event.target).attr('id');
        boxs[position] = playerX
        $(event.target).text(playerX);
        $('.turn').text('Player X turn');
        console.log('Player X played');
    }
    console.log(counter);
    counter++
    // do not allow to choose the same box twice
    $(event.target).off('click');
    // check winner function
    checkWinner();
}
$('.box').on('click', play);


const checkWinner = function () {
    // min move to get winner is 5 and i put condition 
    if (counter > 5) {
     // 8 posibilites 
        if (boxs[0] === boxs[1] && boxs[1] === boxs[2] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            // if there is match same symbol
            isWin[0] = true;
           //store winner
            isWin[1]=boxs[0];
            //change color of winner
            $('#0').css('color', '#61DDD7') ; $('#1').css('color', '#61DDD7') ;$('#2').css('color', '#61DDD7');
            //prevent to chosse any box and put a symbol
            $('.box').off('click');
        } else if (boxs[3] === boxs[4] && boxs[4] === boxs[5] && boxs[3] !== "") {
            $('.turn').text('Player ' + boxs[3] + ' Wins');
            console.log('Player ' + boxs[3] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[3]; 
            $('#3').css('color', '#61DDD7') ; $('#4').css('color', '#61DDD7') ;$('#5').css('color', '#61DDD7');
            $('.box').off('click'); 
        } else if (boxs[6] === boxs[7] && boxs[7] === boxs[8] && boxs[6] !== "") {
            $('.turn').text('Player ' + boxs[6] + ' Wins');
            console.log('Player ' + boxs[6] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[6];
            $('#6').css('color', '#61DDD7') ; $('#7').css('color', '#61DDD7') ;$('#8').css('color', '#61DDD7');
            $('.box').off('click'); 
        } else if (boxs[0] === boxs[3] && boxs[3] === boxs[6] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[0];
            $('#0').css('color', '#61DDD7') ; $('#3').css('color', '#61DDD7') ;$('#6').css('color', '#61DDD7');
            $('.box').off('click');
        } else if (boxs[1] === boxs[4] && boxs[4] === boxs[7] && boxs[1] !== "") {
            $('.turn').text('Player ' + boxs[1] + ' Wins');
            console.log('Player ' + boxs[1] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[1];
            $('#1').css('color', '#61DDD7') ; $('#4').css('color', '#61DDD7') ;$('#7').css('color', '#61DDD7');
            // $('.box').off('click');
        } else if (boxs[2] === boxs[5] && boxs[5] === boxs[8] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins');
            console.log('Player ' + boxs[2] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[2];
            $('#2').css('color', '#61DDD7') ; $('#5').css('color', '#61DDD7') ;$('#8').css('color', '#61DDD7');
            $('.box').off('click');
        } else if (boxs[0] === boxs[4] && boxs[4] === boxs[8] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[0]
            $('#0').css('color', '#61DDD7') ; $('#4').css('color', '#61DDD7') ;$('#8').css('color', '#61DDD7');
            $('.box').off('click');
        } else if (boxs[2] === boxs[4] && boxs[4] === boxs[6] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins');
            console.log('Player ' + boxs[2] + ' Wins');
            isWin[0] = true;
            isWin[1]=boxs[2];
            $('#2').css('color', '#61DDD7') ; $('#4').css('color', '#61DDD7') ;$('#6').css('color', '#61DDD7');
            $('.box').off('click');
        }
    }
    
    if (isWin[0]){
        winSound();
        swal.fire({
            title:"YOU Are A Winner",
            text: "Player  " +   isWin[1]   + "  Wins!",
            icon:"success",
            butoon:"ok"
        });
    } else if (counter >9){
        tieSound();
        $('.turn').text("Tie");
        $('.t').text(++ scoreT)
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Tie NO a Winner!',

        });
        console.log("Tie");   
    } 



const reset = function () {
    // boxs = ['', '', '', '', '', '', '', '', ''];
    // counter = 1;
    // $('.box').text('');
    // $('.box').off('click');
    // $('.box').on('click', play);
    // $('.turn').text('Player X turn');
    // isWin = [false, ""];
    // console.log('Reset to new game');

    // $('#3').css('color', '#61DDD7') ; $('#4').css('color', '#61DDD7') ;$('#5').css('color', '#61DDD7');   for change the color but i brefer th chosse below method

    location.reload();

}
$('.button').on('click', reset);

}

const winSound = function(){
    $('.win')[0].play();
    }
    
    const tieSound = function(){
        $('.tie')[0].play();
    }



