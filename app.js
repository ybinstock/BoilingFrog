$(document).ready(function() {

  var entity = document.querySelector('#water-sound');
  var taco = entity.getComputedAttribute('sound');
  var fogValue = document.querySelector('#fog');
  console.log('taco', taco);
  console.log('entity', entity);

  function nextScene() {
    document.getElementById('scene2').setAttribute('visible', 'false');
    document.getElementById('scene1').setAttribute('visible', 'true');
  }
  setTimeout(nextScene, 50000);


  var setSound1 = function() {
    entity.setAttribute('sound', {
      volume: '2'
    });
    fogValue.setAttribute('fog', {
      density: '.2'
    });
    console.log('fogvalue',fogValue);
  };
  setTimeout(setSound1, 8000);


  var setSound2 = function() {
    entity.setAttribute('sound', {
      volume: '3'
    });
    fogValue.setAttribute('fog', {
      density: '.4'
    });
    console.log('fogvalue',fogValue);
  };
  setTimeout(setSound2, 16000);


  var setSound3 = function() {
    entity.setAttribute('sound', {
      volume: '4'
    });
    fogValue.setAttribute('fog', {
      density: '.5'
    });
    console.log('fogvalue',fogValue);
  };
  setTimeout(setSound3, 24000);


  var setSound4 = function() {
    entity.setAttribute('sound', {
      volume: '5'
    });
    fogValue.setAttribute('fog', {
      density: '.6'
    });
    console.log('fogvalue',fogValue);
  };
  setTimeout(setSound4, 32000);


  var setSound5 = function() {
    entity.setAttribute('sound', {
      volume: '6'
    });
    fogValue.setAttribute('fog', {
      density: '.8'
    });
    console.log('fogvalue',fogValue);
  };
  setTimeout(setSound5, 40000);

//what's wrong with the audio, why is there a clip at the end?
  //and is it increasing in volume?

});
