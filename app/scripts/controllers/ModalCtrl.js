(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.newRoom = '';

        this.rules = {
            ruleOne: 'Room name can be no less than 3 characters',
            ruleTwo: 'Room name can be no more than 10 characters.',
            ruleThree: 'Room can not be a duplicate name.' // not case sens. how to impliment??
        };

        this.ok = function(newRoom) {
            $uibModalInstance.close(Room.add(this.newRoom));
        };

        this.cancel = function() {
            $uibModalInstance.close(console.log('nope'));
        };
    }



    angular
        .module('talke')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
