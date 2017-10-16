(function() {
    function HomeCtrl(Room, $uibModal, $filter) {
        this.roomsList = Room.all;
        this.currentRoom = 'DEFAULT';


        // loads ng UI library and modal controller -- used to add rooms
        this.addRoom = function() {
            $uibModal.open ({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',

            });
        };

        // set currentRoom load room messages
        this.setRoom = function(room) {
            room = $filter('uppercase')(room.$value);
            this.currentRoom = room;
        };

    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', '$uibModal', '$filter', HomeCtrl]);
})();
