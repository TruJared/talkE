(function() {
    function HomeCtrl(Room) {
        this.name = 'jared';
        this.roomsList = Room.all;
        console.log(Room.all);

    }

    angular
        .module('talke')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
