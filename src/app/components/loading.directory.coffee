LoadingController = (IndexService, $scope) ->
  'ngInject'
  vm = this

  $scope.$watch ( ->
    IndexService.loading
  ), ->
    vm.loading = IndexService.loading

  $scope.$watch ( ->
    IndexService.modal_loading
  ), ->
    vm.modal_loading = IndexService.modal_loading

  return

loadingDirective = () ->
  directive =
    restrict: 'E'
    scope:
      target: '@'
    templateUrl: 'app/components/loading.html'
    controller: 'LoadingController'
    controllerAs: 'loading'
    bindToController: true

angular.module 'newAccountBook'
  .controller('LoadingController', LoadingController)
  .directive('loadingDirective', loadingDirective)