import template from './serversView.template';

const serversView = {
  template: template(),
  controller: [
    'Server',
    '$stateParams',
    'NotificationService',
    'Charts',
    '$uibModal',
    '$http', // Инжектируем $http
    function (Server, $stateParams, NotificationService, Charts, $uibModal, $http) {
      this.server = Server.get({ id: $stateParams.id });
      this.charts = Charts.serverCharts({ serverId: $stateParams.id });

      this.showServerInfo = function () {
        $uibModal.open({
          component: 'showPayloadModal',
          size: 'lg',
          resolve: {
            payload: this.server,
          },
        }).result.catch(angular.noop);
      };

      this.start = function () {
        if (confirm('Вы хотите запустить сервер?')) {
          this.server.$start(function () {
            NotificationService.showSuccess('Сервер запущен');
          });
        }
      };

      this.stop = function () {
        if (confirm('Вы хотите остановить сервер?')) {
          this.server.$stop(function () {
            NotificationService.showSuccess('Сервер остановлен');
          });
        }
      };

      // Метод перезапуска сервера
      this.restart = function () {
        $http.get(`/servers/${this.server._id}/restart`)
          .then(response => {
            this.server = response.data;
            $.jGrowl('Сервер успешно перезапущен!', { life: 3000 });
          })
          .catch(error => {
            console.error('Ошибка при перезапуске сервера:', error);
            $.jGrowl('Ошибка при перезапуске сервера', { life: 3000 });
          });
      };
    }
  ],
};

export { serversView };
