import template from './serversEdit.template';

const serversEdit = {
  template: template(),
  controller: [
    'Server',
    '$stateParams',
    '$state',
    'NotificationService',
    function(Server, $stateParams, $state, NotificationService) {
      if ($stateParams.id) {
        this.server = Server.get({id: $stateParams.id});
      } else {
        this.server = new Server();
      }
      this.save = function() {
        this.server.$save(function() {
          NotificationService.showSuccess('Сервер сохранен');
          $state.go('servers', {}, {reload: true});
        });
      };
    }],
};

export {serversEdit};
