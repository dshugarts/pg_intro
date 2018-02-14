$(document).ready(onReady);

function onReady(){
  console.log('Hello');

  addSong({
    artist: 'John Rule', 
    track: 'Always on Time', 
    published: '1/1/1999', 
    rank: 2
  });

  function addSong(song) {
    $.ajax({
      type: 'POST',
      url: '/songs/add',
      data: song
    })
    .done(function(response){
      $('#out-songs').text(response);
    })
    .fail(function(error){
      console.log(error);
    })
  }

}

function updateSongRating(id, newRating) {
  $.ajax({
    type: 'PUT',
    url: `/songs/${id}`,
    data: {rating: newRating}
  })
  .done(function(response) {
    console.log('Updated song rating');
  })
  .fail(function(error) {
    console.log('Error on update');
  })
}

function deleteSong(id) {
  $.ajax({
    type: 'DELETE',
    url: `/songs/${id}`,
  })
  .done(function(response){
    console.log('deleted');
  })
  .fail(function(error){
    console.log('error');
  })
}