(function() {
    function HomeCtrl(Room, Message, $uibModal, $filter, $cookies) {
        this.roomsList = Room.all;
        this.messageList = null;
        this.currentUser = 'Cookie-Jared' //$cookies.get('TalkeCurrentUser');


        this.currentRoom = null,
        this.currentRoomId = null;

        // loads ng UI library and modal controller -- used to add rooms
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',

            });
        };

        // set currentRoom load room messages
        this.setRoom = function(room) {

            // set currentRoom for header title
            this.currentRoom = $filter('uppercase')(room.$value);

            //set currentRoomId for reply function
            this.currentRoomId = room.$id

            // get data from room to popualte chat box
            this.messageList = Message.getByRoomId(room.$id);



        };

        this.reply = function(chatMessage) {
            var chatMessageBundle = {
                "roomId": this.currentRoomId,
                "message": chatMessage,
                "username": this.currentUser
            };


            Message.send(chatMessageBundle);




        }

    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$filter', '$cookies', HomeCtrl]);
})();
