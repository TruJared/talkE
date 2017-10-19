(function() {
  function TalkeCookies($cookies, $uibModal) {
    this.currentUser = $cookies.get('TalkeUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                keyboard: false,
                backdrop: 'static'
      });
    }
  }

  angular
    .module('talke')
    .run(['$cookies', '$uibModal', TalkeCookies]);
})();
