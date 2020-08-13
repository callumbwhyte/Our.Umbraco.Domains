(function () {
    'use strict';

    function controller($location, languageResource, localizationService) {

        var vm = this;
        vm.labels = [];
        vm.page = {};
        vm.showBackButton = true;
        vm.availableLanguages = null;

        vm.domain = {};

        vm.back = back;


        init();

        function init() {
            vm.loading = true;

            var labelKeys = [
                "default_addDomain"
                ];
           
            localizationService.localizeMany(labelKeys).then(function (values) {
                vm.labels.addDomain = values[0];
                // set page name
                vm.page.name = vm.labels.addDomain;
            });
            

            languageResource.getAll().then(function (languages) {
                vm.availableLanguages = languages;

                vm.loading = false;
            });

            vm.loading = false;

        }



        function back() {
            $location.path("settings/domains/dashboard");
        }

    }

    angular.module('umbraco')
        .controller('Domains.EditController', controller);
})();