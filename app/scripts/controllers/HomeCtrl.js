(function() {
    function HomeCtrl(Room, Message, $uibModal, $filter, $cookies) {

        this.roomsList = Room.all;
        this.messageList = null;
        this.currentRoom = 'select a room';
        this.currentRoomId = null;

        // loads ng UI library and modal controller -- used to add rooms
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                keyboard: true,
                backdrop: 'static'

            });
        };

        // set currentRoom load room messages
        this.setRoom = function(room) {

            // set currentRoom for header title
            this.currentRoom = $filter('uppercase')(room.$value);

            //set currentRoomId for reply function
            this.currentRoomId = room.$id;

            // get data from room to popualte chat box
            this.messageList = Message.getByRoomId(room.$id);

        };

        // chat message replies

        this.reply = function(chatMessage) {

            // creates object to properly enter info into database
            var chatMessageBundle = {
                "roomId": this.currentRoomId,
                "message": chatMessage,
                "username": $cookies.get('TalkeUser')
            };

            Message.send(chatMessageBundle);

            // Clear input
            document.getElementById('modal-input').value = '';

        };

        //needs to be converted to angular using ng-toggle
        // controls aside
        var sidebar = document.getElementById("aside-small");
        var toggler = document.getElementById("room-list-menu");

        this.menuToggle = function() {

            if (toggler.style.display === "none") {
                return (toggler.style.display = "block");
            }

            toggler.style.display = "none";
        };


    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$filter', '$cookies', HomeCtrl]);
})();
