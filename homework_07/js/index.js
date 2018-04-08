var rowCount = 15;
var playerFlag = 1;
var boardRecord = [];
var clicked = false;
for (var i = 0; i < rowCount; i++) {
  boardRecord[i] = [];
  for (var j = 0; j < rowCount; j++) {
    $("#board").append(
      "<div id = 'cross" +
        i +
        "r" +
        j +
        "c' class = 'cross' onclick = 'clickF(" +
        i +
        "," +
        j +
        ")'>\
  <i class = 'fa fa-circle' aria-hidden='true'></i>\
  <i class = 'fa fa-circle-thin' aria-hidden='true'></i>\
</div>"
    );
    boardRecord[i][j] = 0;
  }
  $("#board").append("<br>");
}
function clickF(ini, inj) {
  if (boardRecord[ini][inj] == 0) {
    boardRecord[ini][inj] = playerFlag;
    result(ini, inj, playerFlag);
    update();
    if (playerFlag == 1) {
      playerFlag = 2;
    } else {
      playerFlag = 1;
    }
  }
}
function update() {
  $("i").hide();
  for (i = 0; i < rowCount; i++) {
    for (j = 0; j < rowCount; j++) {
      if (boardRecord[i][j] == 1) {
        $("#cross" + i + "r" + j + "c .fa-circle").show();
      } else if (boardRecord[i][j] == 2) {
        $("#cross" + i + "r" + j + "c .fa-circle-thin").show();
      }
    }
  }
}
function restart() {}
function result(R, C, player) {
  var mlength = 0;
  var count = 0;
  for (i = 0; i < rowCount; i++) {
    if (boardRecord[i][C] == player) {
      count++;  
      if (count > mlength) {
        mlength = count;  
      }
    } else {
      count = 0;
    }
  }
  count = 0;
  for (i = 0; i < rowCount; i++) {
    if (boardRecord[R][i] == player) {
      count++;  
      if (count > mlength) {
        mlength = count;  
      }
    } else {
      count = 0;
    }
  }
  count = 0;
  for (i = 0; i < rowCount; i++) {
    if (R - C + i >= 0 && R - C + i < rowCount) {
      if (boardRecord[R - C + i][i] == player) {
        count++;
        if (count > mlength) {
          mlength = count;
        }
      } else {
        count = 0;
      }
    }
  }
  count = 0;
  for (i = 0; i < rowCount; i++) {
    if (R + C - i >= 0 && R + C - i < rowCount) {
      if (boardRecord[R + C - i][i] == player) {
        count++;
        if (count > mlength) {
          mlength = count;
        }
      } else {
        count = 0;
      }
    }
  }
  if (mlength >= 5) {
    if (player == 1) { 
      var winner = "BLACK";  
    } else {
      var winner = "WHITE";  
    }
    alert(winner + " PLAYER - WIN THIS GAME!!!");
  }
  
  restart();
}
update();
