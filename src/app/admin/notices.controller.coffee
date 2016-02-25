NoticesController = (AdminFactory, $modal, $translate, toastr) ->
  'ngInject'
  vm = this

  vm.offset = 0
  vm.clickPaginate = (offset) ->
    vm.offset = offset
    AdminFactory.getNotices(vm.offset).then (res) ->
      vm.notices = res.notices
      vm.total_count = res.total_count
      total_array = []
      for i in [0..vm.total_count]
        total_array.push(i)
      vm.offset_numbers = total_array.filter (x) ->
        return x % 20 == 0

  AdminFactory.getNotices(vm.offset).then (res) ->
    vm.notices = res.notices
    vm.total_count = res.total_count
    total_array = []
    for i in [0..vm.total_count]
      total_array.push(i)
    vm.offset_numbers = total_array.filter (x) ->
      return x % 20 == 0

  vm.newNotice = () ->
    modalInstance = $modal.open(
      templateUrl: 'new-notice'
      controller: 'AdminNoticeController'
      controllerAs: 'new_notice'
      backdrop: 'static'
    )
    modalInstance.result.then () ->
      toastr.success $translate.instant('MESSAGES.CREATE_NOTICE')
      AdminFactory.getNotices(vm.offset).then (res) ->
        vm.notices = res.notices
        vm.total_count = res.total_count
        total_array = []
        for i in [0..vm.total_count]
          total_array.push(i)
        vm.offset_numbers = total_array.filter (x) ->
          return x % 20 == 0

  vm.destroyNotice = (index) ->
    notice = vm.notices[index]
    modalInstance = $modal.open(
      templateUrl: 'confirm-destroy'
      controller: 'ConfirmDestroyNoticeController'
      controllerAs: 'confirm_destroy'
      resolve: { notice_id: notice.id }
    )
    modalInstance.result.then () ->
      AdminFactory.getNotices().then (res) ->
        vm.notices = res.notices
      return

    return

  vm.showNotice = (index) ->
    notice = vm.notices[index]
    modalInstance = $modal.open(
      templateUrl: 'notice'
      controller: 'AdminShowNoticeController'
      controllerAs: 'notice'
      resolve: { notice: notice },
      backdrop: 'static'
    )
    modalInstance.result.then () ->
      toastr.success $translate.instant('MESSAGES.UPDATE_NOTICE')
      AdminFactory.getNotices(vm.offset).then (res) ->
        vm.notices = res.notices
        vm.total_count = res.total_count
        total_array = []
        for i in [0..vm.total_count]
          total_array.push(i)
        vm.offset_numbers = total_array.filter (x) ->
          return x % 20 == 0
    return

  return

AdminNoticeController = ($modalInstance, AdminFactory) ->
  'ngInject'
  vm = this
  vm.date_picker_open = true
  vm.post_at = new Date()

  vm.cancel = () ->
    $modalInstance.dismiss()

  vm.submit = () ->
    params =
      post_at: vm.post_at
      title: vm.title
      content: vm.content
    AdminFactory.postNotice(params).then (res) ->
      $modalInstance.close()

  return

AdminShowNoticeController = ($modalInstance, AdminFactory, notice) ->
  'ngInject'
  vm = this
  vm.notice = notice
  vm.edit_field = false

  vm.post_at = new Date(notice.post_at)
  vm.title = notice.title
  vm.content = notice.content

  vm.cancel = () ->
    $modalInstance.dismiss()

  vm.submit = () ->
    params =
      post_at: vm.post_at
      title: vm.title
      content: vm.content
    AdminFactory.patchNotice(vm.notice.id, params).then (res) ->
      $modalInstance.close()

  return

ConfirmDestroyNoticeController = (notice_id, AdminFactory, $modalInstance) ->
  'ngInject'
  vm = this

  vm.ok = () ->
    AdminFactory.deleteNotice(notice_id).then ->
      $modalInstance.close()

  vm.cancel = () ->
    $modalInstance.dismiss()

  return

angular.module 'newAccountBook'
  .controller('AdminNoticeController', AdminNoticeController)
  .controller('AdminShowNoticeController', AdminShowNoticeController)
  .controller('ConfirmDestroyNoticeController', ConfirmDestroyNoticeController)
  .controller('NoticesController', NoticesController)
