window.onload = function() {watch()};
function watch() {
    var btn = document.getElementById("btnstop");
    btnDisabled(btn); // Starts game with the stop button disabled
}

// function to roll dice and calculate who rolled the highest number
function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        // random 1-10 whole number 
        ranNum = Math.floor(Math.random()*(maximum - minimum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll(); // play dice sound

    for (i = 0; i < xArray.length; i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) {
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled  ["+pTwo+"]<br><br>";
        setTimeout(function() {writeMsg(txt1);}, 1000); // time delay
    }

    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function() { txt1 = txt1 + "Player 1 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function() { txt1 = txt1 + "Player 2 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    }
    // pass which player won the roll
    return first;
}

// start game, start roll, determine active player
function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") {
        activePlayer = rollForTurn(); // reroll in event of a tie
    }
    setTimeout(function() {hideGameMsg();}, 4000);

    // assign proper state of control buttons 
    var btn = document.getElementById("btnStart");
    btnDisabled(btn); // disable start button, game has already started
    var btn = document.getElementById("btnStop");
    stopEnabled(btn); // enable stop button, game has began

    // assign active player to bottom left console 
    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

// styles game buttons while they are disabled
function btnDisabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(214, 214, 194)";
    btn.style.backgroundColor = "rgb(214, 214, 194)";
    btn.disabled = true;
}

// styles game buttons while they are disabled 
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51)";
    btn.disabled = false;
}

// styles game buttons while they are disabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0, 153, 0)";
    btn.style.backgroundColor = "rgb(57, 230, 0)";
    btn.disabled = false;
}

// when button is selected, this function will stop the game and reset data
function stopGame() {
    hideGameMsg(); // hide message box, clear data
    var btn = document.getElementById("btnStart");
    startEnabled(btn); // enables start button
    var btn = document.getElementById("btnStop");
    btnDisabled(btn); // disable stop button
    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color = "red";

    // resets squares to how they began
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i = 0; i < arrayO.length; i++) {
        arrayO[i].style.transform = "translateY(-100%)";
    }
    for (var i = 0; i < arrayX.length; i++) {
        arrayX[i].style.transform = "translateY(100%)";
    }
    // clears log of all game moves
    document.getElementById("boardState").innerHTML = "";
}

// shows message console and any text it has
function showGameMsg() {
    document.getElementById("gameMsgBox").style.display = "block";
}

// hides message console from user
function hideGameMsg() {
    clearMsg(); // clear text from message console
    document.getElementById("gameMsgBox").style.display = "none"; // hide div
}

// write text to message console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById("gameMsg").innerHTML = txt;
}

//  clear text from message console
function clearMsg() {
    document.getElementById("gameMsg").innerHTML = "";
}

// for player config console, sets given avatar assignments, prevents the same choice
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
        alert("Error - Player 1 and Player 2 cannot both be assigned as: " + p1Selected[p1Index].text);
    } else {
        document.getElementById("p1Display").innerHTML = p1Selected[p1Index].text;
        document.getElementById("p2Display").innerHTML = p2Selected[p2Index].text;
    }
}

// returns currently assigned avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar,p2Avatar];
    return avatarArray;
}

// returns active player avatar 
function determineAvatar() {
    // determine correct avatar to paint for active player
    var avatarArray = getAvatars(); // returns array of both assigned avatars
    var active = document.getElementById("showPlayer").innerHTML; // get active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active == "Player 1") {
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar; // return correct avatar
}

// changes active player back and forth
function avatarPlaced() {
    var parseText = document.getElementById("gameMsg").innerHTML;
    var showPlayer = document.getElementById("showPlayer"); // select current element to memory
    // check if winner to stop game, otherwise continue
    if (parseText == "That's three in a row, Player 1 wins!" || parseText == "That's three in a row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color = "red";
    }
    activePlayer = showPlayer.innerHTML; // get the current player from the element
    if (activePlayer == "Player 1") { // changes active player after move is made
        showPlayer.innerHTML = "Player 2";
    }   else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie(); // checks if there was a tie game
}

// get array of current board, check move validity
function check(info,square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0); // comparing index of squares
        if (tempInfo == square) {
            return tempInfo;
        }
    }
}

// records new assigned squares with assigned avatar, functions check here for square validity
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById("boardState").innerHTML; // get boardState array
    var info = boardState.split(","); // separate string with commas to create an array
    verdict = check(info,square); // call function to see if proposed square is already occupied
    return verdict;
}

// gets previous moves list, concatenates the current move with it 
function recordMove(currentMove) {
    var target = document.getElementById("boardState");
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves + currentMove;
}

function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById("boardState");
    var info = target.innerHTML; // raw array with squares and avatars
    info = info.substring(1); // remove leading comma
    info = info.split(","); // separate string into an array
    info.sort();
    for (var i in info) {
        squareArray.push(info[i].charAt(0)); // new array with only squares
    }
    // call these functions to check for all win possibilities 
    checkWinCon1(info,squareArray);
    checkWinCon2(info,squareArray);
    checkWinCon3(info,squareArray);
    checkWinCon4(info,squareArray);
    checkWinCon5(info,squareArray);
    checkWinCon6(info,squareArray);
    checkWinCon7(info,squareArray);
    checkWinCon8(info,squareArray);

    check4Tie();

}

// check for board state for any ties and act accordingly
function check4Tie() {
    var boardState = document.getElementById("boardState").innerHTML;
    boardState = boardState.substring(1);
    boardState = boardState.split(",");
    var check = document.getElementById("gameMsg").innerHTML;
    if (boardState.length >= 9 && check != "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "Oh no! Nobody wins, it was a tie!";
        tieSound();
        writeMsg(txt1);
        setTimeout(function() {stopGame();}, 3000);
    }
}

// produces the winning process
function winner(winDetected,winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById("showPlayer").innerHTML;
        var txt2 = "That's three in a row, " + activePlayer + " wins!";
        writeMsg(txt2);
        var btn = document.getElementById("btnStart");
        startEnabled(btn);
        var btn = document.getElementById("btnStop");
        btnDisabled(btn);
        document.getElementById("showPlayer").innerHTML = "Game Stopped";
        glowBoard(winCon);
    }
}

// produces square celebration
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName("square")
    for (var i = 0; i < squares.length; i++) {
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function() {bg1.style.backgroundColor = "rgb(244,179,66)";}, 100);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(244,238,66)";}, 200);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(197,244,66)";}, 300);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(122,244,66)";}, 400);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(66,244,235)";}, 500);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(244,179,66)";}, 600);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(244,238,66)";}, 700);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(197,244,66)";}, 800);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(122,244,66)";}, 900);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(66,244,235)";}, 1000);
            setTimeout(function() {bg1.style.backgroundColor = "#d7f3f7";}, 1100);
        } else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function() {bg2.style.backgroundColor = "rgb(66,244,235)";}, 100);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(122,244,66)";}, 200);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(197,244,66)";}, 300);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(244,238,66)";}, 400);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(244,179,66)";}, 500);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(66,244,235)";}, 600);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(122,244,66)";}, 700);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(197,244,66)";}, 800);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(244,239,66)";}, 900);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(244,179,66)";}, 1000);
            setTimeout(function() {bg2.style.backgroundColor = "#d7f3f7";}, 1100);
        } else if (i == index2) {
            var bg3 = squares[i];
            setTimeout(function() {bg3.style.backgroundColor = "rgb(244,179,66)";}, 100);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(244,238,66)";}, 200);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(197,244,66)";}, 300);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(122,244,66)";}, 400);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(66,244,235)";}, 500);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(244,179,66)";}, 600);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(244,238,66)";}, 700);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(197,244,66)";}, 800);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(122,244,66)";}, 900);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(66,244,235)";}, 1000);
            setTimeout(function() {bg3.style.backgroundColor = "#d7f3f7";}, 1100);
        }
    }
    setTimeout(function() {stopGame();}, 1200);
}

function squareSound() {
    var sound = document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function() {sound.pause();}, 400);
    setTimeout(function() {sound.currentTime = 0;}, 500);
}

function tieSound() {
    var sound = document.getElementById("tieGame");
    var check = document.getElementById("gameMsg").innerHTML;
    setTimeout(function() {sound.play();}, 500);
}

function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function() {sound.play();}, 500);
    setTimeout(function() {sound.pause();}, 2700);
    setTimeout(function() {sound.currentTime = 0;}, 2800);
}

function diceRoll() {
    var sound = document.getElementById("diceRoll");
    sound.play;
}

function blink() {
    var body = document.getElementById("body");
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 100);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 200);
    setTimeout(function() {body.style.backgroundColor = "#94a6f7";}, 300);
    setTimeout(function() {body.style.backgroundColor = "#b094f7";}, 400);
    setTimeout(function() {body.style.backgroundColor = "#cc94f7";}, 500);
    setTimeout(function() {body.style.backgroundColor = "#c894f7";}, 600);
    setTimeout(function() {body.style.backgroundColor = "#f794d9";}, 700);
    setTimeout(function() {body.style.backgroundColor = "#f73881";}, 800);
    setTimeout(function() {body.style.backgroundColor = "#c6034e";}, 900);
    setTimeout(function() {body.style.backgroundColor = "#e00202";}, 1000);
    setTimeout(function() {body.style.backgroundColor = "#ffffff";}, 1100);
}

// These functions are the algorithms to find all win conditions
function checkWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon1 = [0,1,2];
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 0,1,2
    if (match0Avatar != undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win";
            winner(winDetected, winCon1);
            return;
        }
    }
    winner(winDetected,winCon1);
}

function checkWinCon2(info,squareArray) {
    var winDetected = "on";
    var winCon2 = [3,4,5];
    for (var i in info) {
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 3,4,5
    if (match3Avatar != undefined && match4Avatar != undefined && match5Avatar != undefined) {
        if (match3Avatar == match4Avatar && match3Avatar == match5Avatar) {
            winDetected = "win";
            winner(winDetected, winCon2);
            return;
        }
    }
    winner(winDetected,winCon2);
}

function checkWinCon3(info,squareArray) {
    var winDetected = "on";
    var winCon3 = [6,7,8];
    for (var i in info) {
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "7") {
            var match7Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 6,7,8
    if (match6Avatar != undefined && match7Avatar != undefined && match8Avatar != undefined) {
        if (match6Avatar == match7Avatar && match6Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon3);
            return;
        }
    }
    winner(winDetected,winCon3);
}

function checkWinCon4(info,squareArray) {
    var winDetected = "on";
    var winCon4 = [0,3,6];
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 0,3,6
    if (match0Avatar != undefined && match3Avatar != undefined && match6Avatar != undefined) {
        if (match0Avatar == match3Avatar && match0Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon4);
            return;
        }
    }
    winner(winDetected,winCon4);
}

function checkWinCon5(info,squareArray) {
    var winDetected = "on";
    var winCon5 = [1,4,7];
    for (var i in info) {
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "7") {
            var match7Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 1,4,7
    if (match1Avatar != undefined && match4Avatar != undefined && match7Avatar != undefined) {
        if (match1Avatar == match4Avatar && match1Avatar == match7Avatar) {
            winDetected = "win";
            winner(winDetected, winCon5);
            return;
        }
    }
    winner(winDetected,winCon5);
}

function checkWinCon6(info,squareArray) {
    var winDetected = "on";
    var winCon6 = [2,5,8];
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 2,5,8
    if (match2Avatar != undefined && match5Avatar != undefined && match8Avatar != undefined) {
        if (match2Avatar == match5Avatar && match2Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon6);
            return;
        }
    }
    winner(winDetected,winCon6);
}

function checkWinCon7(info,squareArray) {
    var winDetected = "on";
    var winCon7 = [2,4,6];
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 2,4,6
    if (match2Avatar != undefined && match4Avatar != undefined && match6Avatar != undefined) {
        if (match2Avatar == match4Avatar && match2Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon7);
            return;
        }
    }
    winner(winDetected,winCon7);
}

function checkWinCon8(info,squareArray) {
    var winDetected = "on";
    var winCon8 = [0,4,8];
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1);
        }
    }
    // activates only if there is a win for index 0,4,8
    if (match0Avatar != undefined && match4Avatar != undefined && match8Avatar != undefined) {
        if (match0Avatar == match4Avatar && match0Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon8);
            return;
        }
    }
    winner(winDetected,winCon8);
}

// for each click event possible on all 9 boxes
function square1Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "0";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[0];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square2Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "1";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[1];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square3Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "2";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[2];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square4Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "3";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[3];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square5Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "4";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[4];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square6Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "5";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[5];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square7Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "6";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[6];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square8Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "7";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[7];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

function square9Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "8";
        // check if proposition is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName(paintAvatar)[8];
            if (paintAvatar == "O") {
                animateO(selected);
            } else if (paintAvatar == "X") {
                animateX(selected);
            }

            var  currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon();
            avatarPlaced(square,paintAvatar);
            squareSound();
        }
    }
}

// perform O animation
function animateO(selected) {
    selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translate(0%)" : "translateY(-100%)";
}

// perform X animation 
function animateX(selected) {
    selected.style.transform = (selected.style.transform == "translateY(100%)" || null) ? "translateY(0%)" : "translateY(100%)";
}