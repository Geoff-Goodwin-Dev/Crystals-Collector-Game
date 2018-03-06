$(document).ready(function() {
  // VARIABLE DECLARATIONS
  var targetNumber;
  var userNumberCounter = 0;
  var numberOptions = [];
  var wins = 0;
  var losses = 0;

  // SELECTOR VARIABLE DECLARATIONS
  var crystals = $("#crystals");
  var userNumberDisplay = $("#userNumberCounter");
  var imageCrystal = $("<img>");

  // CREATING 4 CRYSTAL GLYPHS
  for (var i = 0; i < 4; i++) {
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    switch (i) {
      case 0:
        imageCrystal.attr("src", "assets/images/crystal_1.png");
        break;
      case 1:
        imageCrystal.attr("src", "assets/images/crystal_2.png");
        break;
      case 2:
        imageCrystal.attr("src", "assets/images/crystal_3.png");
        break;
      case 3:
        imageCrystal.attr("src", "assets/images/crystal_4.png");
        break;
      default:
        break;
    }
    imageCrystal.attr("id", ("crystal" + i));
    crystals.append(imageCrystal);
  }

  newRound();

  crystals.on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userNumberCounter += crystalValue;
    userNumberDisplay.text(userNumberCounter);

    if (userNumberCounter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      console.log("You win! Wins count increased to", wins);
      newRound();
    }

    else if (userNumberCounter >= targetNumber) {
      losses++;
      $("#losses").text(losses);
      console.log("You Lost! Loss count increased to", losses);
      newRound();
    }
  });

  function newRound() {
    targetNumber = (Math.floor(Math.random() * 102)) + 19;
    $("#targetNumber").text(targetNumber);
    buildCrystalValueArray();
    assignCrystalValues();
    userNumberCounter = 0;
    userNumberDisplay.text(userNumberCounter);

    console.log('wins:', wins);
    console.log('losses:', losses);
    console.log('User Number Counter:', userNumberCounter);
  }

  function buildCrystalValueArray() {
    for (var i = 0; i < 4; i++) {
      numberOptions[i] = (Math.floor(Math.random() * 12)) + 1;
      console.log("number added to array:", numberOptions[i]);
    }
  }

  function assignCrystalValues() {
    $("#crystal0").attr("data-crystalvalue", numberOptions[0]);
    $("#crystal1").attr("data-crystalvalue", numberOptions[1]);
    $("#crystal2").attr("data-crystalvalue", numberOptions[2]);
    $("#crystal3").attr("data-crystalvalue", numberOptions[3]);
    console.log(numberOptions);
  }
});

function openInstructions() {
  $("#modalInstruction").css("display", "block");
}

function closeInstructions() {
  $("#modalInstruction").css("display", "none");
}