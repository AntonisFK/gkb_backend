angular.module('adminApp')
.controller('announeCtrl', [
'$scope',
'$state',
'DataService',
'ModalService',
'$uibModal',
//injected the modal service  into controller 
function($scope,$state,DataService, ModalService, $uibModal){
  //Accordian config
  $scope.oneAtATime = true;
  var self = $scope
  DataService.getNews('annoucements',function(result){
    $scope.newsPosts = result;
    $scope.totalItems = $scope.newsPosts.length;
  })


  $scope.openNewContentForm = function(){
    
    var modalInstance = $uibModal.open({
      templateUrl: 'modals/_addContentModal.html',
      controller: [
        '$scope', '$uibModalInstance',  function($scope, $uibModalInstance) {
      
          // added data to change the dynamic html 
          $scope.data = {title: "Annoucments" };
          $scope.ok = function() {
            $uibModalInstance.close($scope.newsPost);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          $scope.accept = function(){
            $uibModalInstance.close();
          }
        }
      ]
    });

    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'annoucements';
      DataService.create(contentInfo, function(result){
        self.newsPosts.unshift(result['newContent']);
      });
    });
  };


  $scope.openRemoveConfirm = function(selected){
    // used a serivce to pass selected data into remove modal controller
    ModalService.setProperty(selected); 

    var modalInstance = $uibModal.open({
      templateUrl:'modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = ModalService.getProperty();
              
          $scope.ok = function() {
            $uibModalInstance.close($scope.newsPost);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          $scope.accept = function(){
            $uibModalInstance.close();
          }
        }
      ]
    })
    modalInstance.result.then(function () { 
      DataService.remove(selected.id, function(result){


       for(var i in  self.newsPosts){
          console.log(self.newsPosts[i])
          if( self.newsPosts[i].id=== result['content'].id){
            
            console.log('found', result['content'].id)            
            self.newsPosts.splice(i,1);
          }
       }

      });
    });
  };


  $scope.update = function(title, text, section,contentId) {
    DataService.update(title, text, section,contentId, function(result){
      console.log(result['content'])
       
       for(var i in  $scope.newsPosts){
          console.log($scope.newsPosts[i])
          if( $scope.newsPosts[i].id === result['content'].id){
            
            console.log('found', result['content'].id)            
            $scope.newsPosts[i] = result['content']

          }
       }
    })
  }


  //Pagination 
  $scope.viewby = 15;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 15;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

}]);

