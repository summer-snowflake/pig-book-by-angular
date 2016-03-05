PlacesController = (SettingsFactory, $scope, IndexService, $modal) ->
  'ngInject'
  vm = this
  vm.add_field = false

  vm.newPlace = () ->
    vm.add_field = true

  vm.updatePlace = (index) ->
    place = vm.places[index]
    SettingsFactory.patchPlace(place.id, { name: place.edit_name }).then () ->
      SettingsFactory.getPlaces().then (res) ->
        vm.places = res.places
      place.edit_field = false

  vm.destroyPlace = (index) ->
    place = vm.places[index]
    modalInstance = $modal.open(
      templateUrl: 'confirm-destroy'
      controller: 'ConfirmDestroyPlaceController'
      controllerAs: 'confirm_destroy'
      resolve: { place_id: place.id }
    )
    modalInstance.result.then () ->
      SettingsFactory.getPlaces().then (res) ->
        vm.places = res.places
      return

    return

  vm.submit = () ->
    vm.sending = true
    params = { name: vm.new_name }
    SettingsFactory.postPlace(params).then((res) ->
      SettingsFactory.getPlaces().then (res) ->
        vm.places = res.places
      vm.new_name = ''
      vm.add_field = false
      vm.sending = false
    ).catch (res) ->
      vm.errors = res.error_messages
      vm.sending = false
    return

  IndexService.loading = true
  SettingsFactory.getPlaces().then((res) ->
    vm.places = res.places
    IndexService.loading = false
  ).catch (res) ->
    IndexService.loading = false

  return

ConfirmDestroyPlaceController = (SettingsFactory, place_id, $modalInstance) ->
  'ngInject'
  vm = this

  vm.ok = () ->
    SettingsFactory.deletePlace(place_id).then (res) ->
      $modalInstance.close()

  vm.cancel = () ->
    $modalInstance.dismiss()

  return

angular.module 'newAccountBook'
  .controller('ConfirmDestroyPlaceController', ConfirmDestroyPlaceController)
  .controller('PlacesController', PlacesController)
