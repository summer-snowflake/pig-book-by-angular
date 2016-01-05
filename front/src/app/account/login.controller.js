(function() {
  'use strict';

    angular
      .module('accountBook')
      .controller('LoginController', LoginController);

    function LoginController(IndexFactory) {
      var vm = this;

      vm.submit = function() {
        var params = {
          email: vm.email,
          password: vm.password
        };

        IndexFactory.postSession(params).catch(function(res) {
          vm.errors = res.error_messages;
        });
      }
      vm.clearErrors = function() {
        vm.errors = '';
      }
    }

})();
