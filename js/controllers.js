angular.module('app.controllers', [])
  
.controller('telefoneCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$cordovaOauth', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaOauth) {
    $scope.loginFacebook = function() {
        $cordovaOauth.facebook('732538510230716', 'email,public_profile,user_friends').then(function(result) {
            window.localStorage.setItem("access_token", result.access_token);
            alert('retorno');
        }, function(error) {
            console.log(error);
        });
    };
}])
   
.controller('intruEsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('percursoCtrl', ['$scope', '$stateParams', 'CaronaService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, CaronaService) {
    
    console.log(CaronaService.items);
    
    $scope.gravar = function(carona) {
        carona.dataHora = new Date();
        CaronaService.addItem(carona);
    };

}])
   
.controller('companhiasCtrl', ['$scope', '$stateParams', '$filter', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $filter) {
    var companhias = [
        {
            nome: 'Camila Belo', 
            foto: 'https://avatars1.githubusercontent.com/u/6290749?v=3&s=400'
            
        },
        {
            nome: 'Thaís Kuga', 
            foto: 'https://fb-s-a-a.akamaihd.net/h-ak-xtf1/v/t1.0-9/11054358_10200302608203905_6077057933994442885_n.jpg?oh=11c95a6890183c997db4fe3cd9d85599&oe=58CEAC4A&__gda__=1489458048_bf10802db458147309465e5be66403a3'
            
        }
    ];
    
    $scope.carona = {
      origem: 'Estação Ana Rosa',
      destino: 'Rua Domingos de Morais, 20',
      data: new Date(),
      hora: $filter('date')(new Date(), 'HH:mm'),
      companhias: companhias
    };
}])
   
.controller('avaliaOCamilaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('avaliaOThaisCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('navegaOCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
t

}])
 