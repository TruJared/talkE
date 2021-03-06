(function() {
    function Message($firebaseArray, Room) {
        this.chatMessage = null;
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;


        Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.

            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };

        Message.send = function(newMessage) {

            messages.$add(newMessage);
        };

        return Message;

    }


    angular
        .module('talke')
        .factory('Message', ['$firebaseArray', 'Room', Message]);
})();
