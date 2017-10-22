(function() {
    function ModalCtrl(Room, $uibModalInstance, $filter, $timeout, $cookies) {
        this.newRoom = null;
        this.roomsList = Room.all;
        this.minChar = 3;
        this.maxChar = 10;

        // check if newRoom in roomsList else add newRoom
        this.ok = function(newRoom) {

            this.newRoomLower = $filter('lowercase')(this.newRoom);
            for (i = 0; i < this.roomsList.length; i++) {

                if (this.newRoomLower === this.roomsList[i].$value) {
                    return;

                }
            }

            $uibModalInstance.close(Room.add(this.newRoomLower));

        };

        // cancel Modal don't add new room
        this.cancel = function() {
            $uibModalInstance.close();
        };

        this.loginok = function(username) {
            $cookies.put('TalkeUser', username);
            $uibModalInstance.close();
        };


    }

    angular
        .module('talke')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$filter', '$timeout', '$cookies', ModalCtrl]);
})();
