$(document).ready(function() {

  var entity = document.querySelector('#water-sound');
  var script = document.querySelector('#script');
  var taco = entity.getComputedAttribute('sound');
  var fogValue = document.querySelector('#fog');
  console.log('taco', taco);
  console.log('entity', entity);

//for script
  script.pause();
  function playScript() {
    script.play();
  }

  setTimeout(playScript, 25000);

  //to transition to end scene
  function nextScene() {
    document.getElementById('scene2').setAttribute('visible', 'false');
    document.getElementById('scene1').setAttribute('visible', 'true');
  }

  setTimeout(nextScene, 115000);

  //For instructions
  function hideInstructions() {
    document.getElementById('instructions').setAttribute('visible', 'false');
  }

  setTimeout(hideInstructions, 24000);

  //Water audio
  entity.pause();
  var setSound1 = function() {
    entity.setAttribute('sound', {
      volume: '1.5'
    });
    fogValue.setAttribute('fog', {
      density: '.2'
    });
    console.log('fogvalue', fogValue);
  };
  setTimeout(setSound1, 25000);

  var setSound2 = function() {
    entity.setAttribute('sound', {
      volume: '2.0'
    });
    fogValue.setAttribute('fog', {
      density: '.4'
    });
    console.log('fogvalue', fogValue);
  };
  setTimeout(setSound2, 41000);

  var setSound3 = function() {
    entity.setAttribute('sound', {
      volume: '2.5'
    });
    fogValue.setAttribute('fog', {
      density: '.5'
    });
    console.log('fogvalue', fogValue);
  };
  setTimeout(setSound3, 57000);

  var setSound4 = function() {
    entity.setAttribute('sound', {
      volume: '3.0'
    });
    fogValue.setAttribute('fog', {
      density: '.6'
    });
    console.log('fogvalue', fogValue);
  };
  setTimeout(setSound4, 81000);

  var setSound5 = function() {
    entity.setAttribute('sound', {
      volume: '4'
    });
    fogValue.setAttribute('fog', {
      density: '.8'
    });
    console.log('fogvalue', fogValue);
  };
  setTimeout(setSound5, 97000);

});
