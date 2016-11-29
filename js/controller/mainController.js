function mainController($scope,$timeout) {

    $scope.period = 'annuel';
    $scope.salaire = {};
    $scope.info = {};
    $scope.info.mois = 12;
    $scope.info.temps = 35;
    $scope.info.charges = 20;


    $scope.changePeriod = function(period) {
        $scope.period = period;
    }

    function changeSalaireNet(salaire) {
        $scope.salaire.net = salaire - (salaire * 20 / 100);
    }

    // ================= BRUT FUNCTIONS
    // ================= ==============
    $scope.changeBrut = function(salaire) {
        $scope.showBrut = true;
        $scope.salaire.brut = salaire;
        changeSalaireNet(salaire);
    }

    $scope.updateBrut = function() {
        $scope.showBrut = false;
        $scope.brut = $scope.salaire.brut;
        $timeout(function () {
          $('#brut').focus();
        },100)
    }
    // ================= END BRUT FUNCTIONS
    // ================= ==================


    // ================= MONTH FUNCTIONS
    // ================= ===============
    $scope.changeMois = function(mois) {
      console.log(mois);
        $scope.showMois = true;
        $scope.info.mois = mois;
        changeSalaireNet(salaire);
    }

    $scope.updateMois = function() {
        $scope.showMois = false;
        $scope.mois = $scope.info.mois;
        $timeout(function () {
          $('#mois').focus();
        },100)
    }
    // ================= END MONTH FUNCTIONS
    // ================= ===================


    // ================= HOURS FUNCTIONS
    // ================= ===============
    $scope.changeTemps = function(temps) {
        $scope.showTemps = true;
        $scope.info.temps = temps;
        changeSalaireNet(salaire);
    }

    $scope.updateTemps = function() {
        $scope.showTemps = false;
        $scope.temps = $scope.info.temps;
        $timeout(function () {
          $('#temps').focus();
        },100)
    }
    // ================= END HOURS FUNCTIONS
    // ================= ===================


    // ================= CHARGES FUNCTIONS
    // ================= =================
    $scope.changeCharges = function(charges) {
        $scope.showCharges = true;
        $scope.info.charges = charges;
        changeSalaireNet(salaire);
    }

    $scope.updateCharges = function() {
        $scope.showCharges = false;
        $scope.charges = $scope.info.charges;
        $timeout(function () {
          $('#charges').focus();
        },100)
    }
    // ================= END CHARGES FUNCTIONS
    // ================= =====================

};
