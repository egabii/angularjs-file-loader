angular
.module('challenge.directive.fileLoader', [])
.directive('fileLoader', FileLoaderDirective);

function FileLoaderDirective() {

return {
    restrict: 'A',
    scope: {
        size: '=fileSize',
        extentions: '=fileExtensions',
        maxlenght: '=fileMaxLength',
        rules: '=fileRules'
    },
    template: '<input class="sr-only" type="file" id="fileElem" multiple accept="text/plain" />'
        +'<label for="fileElem"> Please click on the box to add file </label>',
    link: function($scope, element) {
        element.addClass('box text');
        element.find('#fileElem').on('change', $scope.vm.handleFiles);
    },
    controller: function FileLoaderController() {
        vm = this;
        vm.handleFiles = function(event) {
            console.log(event.target);
        }

    },
    controllerAs: 'vm',
};
}