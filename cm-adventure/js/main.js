var Shuffle = window.shuffle;

var myShuffle = new Shuffle(document.querySelector('.shuffle-container'), {
  itemSelector: '.gallery-item',
  sizer: '.js-shuffle-sizer', 
  gutterWidth: 15,
});