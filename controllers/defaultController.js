function DefaultController(){

}

DefaultController.prototype.index = function(req, res, next) {
  res.json({});
  // envoie une réponse JSON avec les en-têtes correspondant
    // termine l'exécution
};

module.exports = new DefaultController();