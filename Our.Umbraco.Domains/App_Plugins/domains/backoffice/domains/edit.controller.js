(function () {
    'use strict';

    function controller($location) {

        var vm = this;
        vm.page = {};
        vm.showBackButton = true;
        

        vm.back = back;

        
        function back() {
            $location.path("settings/domains/dashboard");
        }
        
    }

    angular.module('umbraco')
        .controller('Domains.EditController', controller);
})();