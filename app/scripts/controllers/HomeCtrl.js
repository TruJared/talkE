(function() {
    function HomeCtrl() {
        console.log('works')
        this.name = 'jared'
    }

    angular
        .module('talke')
        .controller('HomeCtrl', HomeCtrl);
})();
