
// Basic Game Variables
var width = 6;
var mainTileCount = 3;
var subTileCount = 3;
var row = 0;
var gameOver = false;
var solution = Math.floor(Math.random() * fruitList.length);

window.onload = function(){
    createRow(row);
    populateList();
    startGuess();
}

function startGuess() {

    document.addEventListener("submit", async(event) => {

        event.preventDefault();

        let guess = document.getElementById("guessList").value;

        update(guess);
        if (gameOver) {
            return;
        }

        row += 1;
        createRow(row);

        document.getElementById("guessList").value = "null";

    })

}

function populateList() {
    for (let i = 0; i < fruitList.length; ++i) {
        let choice = document.createElement("option");
        choice.text = fruitList[i].user;
        choice.value = i;
        document.getElementById("guessList").appendChild(choice);
    }
}

function update(guess) {
    
    if (fruitList[guess].user == fruitList[solution].user) {
        let currTile = document.getElementById("(" + row.toString() +",0)");
        currTile.innerText = fruitList[guess].user;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() +",0)");
        currTile.innerText = fruitList[guess].user;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].fruit == fruitList[solution].fruit) {
        let currTile = document.getElementById("(" + row.toString() + ",1)");
        currTile.innerText = fruitList[guess].fruit;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",1)");
        currTile.innerText = fruitList[guess].fruit;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].canon == fruitList[solution].canon) {
        let currTile = document.getElementById("(" + row.toString() + ",2)");
        currTile.innerText = fruitList[guess].canon;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",2)");
        currTile.innerText = fruitList[guess].canon;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].type == fruitList[solution].type) {
        let currTile = document.getElementById("(" + row.toString() + ",3,1)");
        currTile.innerText = fruitList[guess].type;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",3,1)");
        currTile.innerText = fruitList[guess].type;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].subtype == fruitList[solution].subtype) {
        if (fruitList[guess].subtype == fruitList[guess].type) {
            let currTile = document.getElementById("(" + row.toString() + ",3,2)");
            currTile.innerText = "N/A";
            currTile.classList.add("correct");
        } else {
            let currTile = document.getElementById("(" + row.toString() + ",3,2)");
            currTile.innerText = fruitList[guess].subtype;
            currTile.classList.add("correct");
        }
    } else {
        if (fruitList[guess].subtype == fruitList[guess].type) {
            let currTile = document.getElementById("(" + row.toString() + ",3,2)");
            currTile.innerText = "N/A";
            currTile.classList.add("absent");
        } else {
            let currTile = document.getElementById("(" + row.toString() + ",3,2)");
            currTile.innerText = fruitList[guess].subtype;
            currTile.classList.add("absent");
        }
    }
    if (fruitList[guess].appearance == fruitList[solution].appearance) {
        let currTile = document.getElementById("(" + row.toString() + ",4,1)");
        currTile.innerText = fruitList[guess].appearance;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",4,1)");
        currTile.innerText = fruitList[guess].appearance;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].subappearance == fruitList[solution].subappearance) {
        let currTile = document.getElementById("(" + row.toString() + ",4,2)");
        currTile.innerText = fruitList[guess].subappearance;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",4,2)");
        currTile.innerText = fruitList[guess].subappearance;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].affiliation == fruitList[solution].affiliation) {
        let currTile = document.getElementById("(" + row.toString() + ",5,1)");
        currTile.innerText = fruitList[guess].affiliation;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",5,1)");
        currTile.innerText = fruitList[guess].affiliation;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].subaffiliation == fruitList[solution].subaffiliation) {
        let currTile = document.getElementById("(" + row.toString() + ",5,2)");
        currTile.innerText = fruitList[guess].subaffiliation;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",5,2)");
        currTile.innerText = fruitList[guess].subaffiliation;
        currTile.classList.add("absent");
    }
    if (fruitList[guess].position == fruitList[solution].position) {
        let currTile = document.getElementById("(" + row.toString() + ",5,3)");
        currTile.innerText = fruitList[guess].position;
        currTile.classList.add("correct");
    } else {
        let currTile = document.getElementById("(" + row.toString() + ",5,3)");
        currTile.innerText = fruitList[guess].position;
        currTile.classList.add("absent");
    }

    if (guess == solution) {
        gameOver = true;
        alert("Congratulations! It took you " + (row + 1).toString() + " guesses\nThe Character was " + fruitList[guess].user)
        return;
    }

    return false;
}

function createRow(a) {

    if (document.getElementById("board").style.height == "") {
        document.getElementById("board").style.height = "200px";
    } else {
        let boardHeight = document.getElementById("board").style.height;
        boardHeight = boardHeight.substring(0, boardHeight.length - 2);
        boardHeight = parseInt(boardHeight);
        boardHeight += 200;
        boardHeight = boardHeight.toString() + "px";
        document.getElementById("board").style.height = boardHeight;
    }


    for (let b = 0; b < width - mainTileCount; ++b) {

        let mainTile = document.createElement("span");
        mainTile.id = "(" + a.toString() + "," + b.toString() + ")";
        mainTile.classList.add("tile");
        mainTile.innerText = "?";
        document.getElementById("board").appendChild(mainTile);

    }

    for (let b = width - mainTileCount; b < width; ++b) {

        let mainsubTile = document.createElement("span");
        mainsubTile.id = "(" + a.toString() + "," + b.toString() + ",1)";
        mainsubTile.classList.add("tile");
        mainsubTile.innerText = "?";
        document.getElementById("board").appendChild(mainsubTile);

        let subTile = document.createElement("span");
        subTile.id = "(" + a.toString() + "," + b.toString() + ",2)";
        subTile.classList.add("subTile");
        subTile.innerText = "?";
        document.getElementById("board").appendChild(subTile);

    }

    let posTile = document.createElement("span");
    posTile.id = "(" + a.toString() + ",5,3)";
    posTile.classList.add("subTile");
    posTile.innerText = "?";
    document.getElementById("board").appendChild(posTile);

}