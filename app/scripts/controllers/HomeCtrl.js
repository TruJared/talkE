(function() {
    function HomeCtrl(Room, $uibModal) {
        this.roomsList = Room.all;
        this.roomsListArray = [];

        // loads ng UI library and modal controller -- used to add rooms
        this.addRoom = function() {
            $uibModal.open ({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',


            });
        };

    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
