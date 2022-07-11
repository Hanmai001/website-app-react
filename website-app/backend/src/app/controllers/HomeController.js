const Film = require('../models/Film')
const { mutipleMongooseToObject } = require ("../../util/mongoose")

class HomeController {
    index(req, res, next){
        Film.find((err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("hello");
            console.log(result);
            console.log("hello");
          }
        })

          .then((film) => {
            res.render("home", {
              film: mutipleMongooseToObject(film),
            });
          })
          .catch(function (err) {
            console.log(err);
          });
    }

}

module.exports = new HomeController()
