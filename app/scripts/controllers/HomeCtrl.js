(function() {
    function HomeCtrl(Room, Message, $uibModal, $filter) {
        this.roomsList = Room.all;
        this.messageList = 'null';

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
            this.currentRoom = $filter('uppercase')(room.$value);

            this.messageList = Message.getByRoomId(room.$id);


        };

    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$filter', HomeCtrl]);
})();
