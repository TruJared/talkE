(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.newRoom = '';
        this.minChar = 3;
        this.maxChar = 10;



        this.rules = {
            ruleOne: 'Room must be 3 to 10 characters in length.',
            //ruleTwo: 'Room can not be a duplicate name. (not currently implemented).'      ?????how to implement?????//
        };


        this.ok = function(newRoom) {
            $uibModalInstance.close(Room.add(this.newRoom));
        };

        this.cancel = function() {
            $uibModalInstance.close();
        };


    }



    angular
        .module('talke')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
