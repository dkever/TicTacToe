$(function() {

  var turn = 0;
  var x = x;
  var o = o;

  $('td').on('click', function() {
   // X GOES FIRST
    if (turn % 2 === 0 ) {
      $(this).text(x).css({
        'background-image': 'url(./images/x.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
      });
      $('')
      checkForWinner();

    } else {
      $(this).text(o).css({
        'background-image': 'url(./images/o.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
      });
      checkForWinner();
    }
    turn++;
    if (turn === 9 ) {
     alert('Everyone is a winner :(')
    }
  })

  function checkForWinner() {
    //top row
    if ($('#1').text() != '') {
      if ($('#1').text() == $('#2').text() &&
        $('#2').text() == $('#3').text()) {
        alert('winner!');
      }
    };
    //middle row
    if ($('#4').text() != '') {
      if ($('#4').text() == $('#4').text() &&
        $('#5').text() == $('#6').text()) {
         alert('winner!');
      }
    };
    //bottom row
    if ($('#7').text() != '') {
      if ($('#7').text() == $('#8').text() &&
        $('#8').text() == $('#9').text()) {
         alert('winner!');
      }
    };
    //tdone
    if ($('#1').text() != '') {
      if ($('#1').text() == $('#4').text() &&
        $('#4').text() == $('#7').text()) {
         alert('winner!');
      }
    };
    //tdtwo
    if ($('#2').text() != '') {
      if ($('#2').text() == $('#5').text() &&
        $('#5').text() == $('#8').text()) {
         alert('winner!');
      }
    };
    //td3
    if ($('#3').text() != '') {
      if ($('#3').text() == $('#6').text() &&
        $('#6').text() == $('#9').text()) {
        alert('winner!');
      }
    };
    //1-5-9
    if ($('#1').text() != '') {
      if ($('#1').text() == $('#5').text() &&
        $('#5').text() == $('#9').text()) {
         alert('winner!');
      }
    };
    //3-5-7
    if ($('#3').text() != '') {
      if ($('#3').text() == $('#5').text() &&
        $('#5').text() == $('#7').text()) {
         prompt('winner!');
      }
    }

  };
  $('#newGame').on('click', function() {
    location.reload();
  });

});
