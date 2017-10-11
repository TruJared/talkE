(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.newRoom = '';

        this.rules = {
            ruleOne: 'one',
            ruleTwo: 'two',
            ruleThree: 'three'
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
