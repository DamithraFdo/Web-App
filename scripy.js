$(document).ready(function () {
    // code goes here
    var scores = {
        red: 0,
        blue: 0
      }
      var won = false
      // Caching document selector in a variable (good method for optimizing performance when lots of elements are queried).
      var $taps = $('.tap')
      
      // When someone taps an element with the class "tap", run the function.
      $taps.on('touchstart mousedown', function (e) {
        if (!won) {
          // The element that was clicked:
          var $this = $(this)
          // Grabs the second item of the class attribute, which is red or blue respectively.
          var type = $this.attr('class').split(' ')[1]
          // Increments the score.
          scores[type] += 1
          // Change the text.
          $this.text('Your score is ' + scores[type])
          // Add condition for finishing the game.
          if (scores[type] >= 100) {
            // Change the game state.
            won = true
            // Reward the winner.
            $taps.text(type + ' won the game!')
            setTimeout(function () {
              // Reset scores
              scores = {
                red: 0,
                blue: 0
              }
              // Add back play message.
              $taps.text('Tap to play')
              // Reset game.
              won = false
            }, 3000) // setTimeout miliseconds.
          }
        }
        // Stop it from doing generic action.
        return false
      })
  })