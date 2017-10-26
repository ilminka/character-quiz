var char1 = 0;
var char2 = 0;
var char3 = 0;
var char4 = 0;

$(document).ready(function() {
  $("#quiz").submit(function(event) {
  var q1 = parseInt($("#selections1").val());
  var q2 = parseInt($("#selections2").val());
  var q3 = parseInt($("#selections3").val());
  var q4 = parseInt($("#selections4").val());

  if (q1 = 1) {
    char1 += 1;
  } else if (q1 = 2) {
    char2 += 1;
  }  else if (q1 = 3) {
    char3 += 1;
  }  else if (q1 = 4) {
    char4 += 1;
  }

  if (q2 = 1) {
    char1 += 1;
  } else if (q2 = 2) {
    char2 += 1;
  }  else if (q2 = 3) {
    char3 += 1;
  }  else if (q2 = 4) {
    char4 += 1;
  }

  // if (q3=1) {
  //   char1+=1;
  // } else if (q3=2) {
  //   char2+=1;
  // }  else if (q3=3) {
  //   char3+=1;
  // }  else if (q3=4) {
  //   char4+=1;
  // }

  // if (q4=1) {
  //   char1+=1;
  // } else if (q4=2) {
  //   char2+=1;
  // }  else if (q4=3) {
  //   char3+=1;
  // }  else if (q4=4) {
  //   char4+=1;
  // }

  console.log(char1);
    if (char1 >= char2 && char1 >= char3 && char1 >= char4) {
      $("#summer").show();
    }
    else if (char2 >= char1 && char2 >= char3 && char2 >= char4) {
      $("#jerry").show();
    // }  else if (char3 >= char1, char2, char4) {
    //   $("#beth").show();
    // }  else if (char4 >= char1, char2, char3) {
    //   $("#meeseeks").show();
    // }

    event.preventDefault();
  });
});
  debugger;
