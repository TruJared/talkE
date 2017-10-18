(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        console.log(rooms);
        rooms.$add(room);


    };

    return Room;
  }

  angular
    .module('talke')
    .factory('Room', ['$firebaseArray', Room]);
})();
