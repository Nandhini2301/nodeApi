module.exports = function (databaseBS, Sequelize) {
    var profileinfo = require('../module/profileinfo').UserDetial(databaseBS, Sequelize, "profileinfos");
    var profile = require('../module/profile').UserDetial(databaseBS, Sequelize, "profiles");
    var profileServiceObject = require('../service/profileService')(profileinfo);
    var login = require('../module/login').UserDetial(databaseBS, Sequelize, "logins");

    var profileController = {};

    profileController.viewVolunteer = function (req, res, next) {
        console.log("View volunteer profile");
        profileServiceObject.viewvolunteer(
            req,
            profile,
            profileinfo,
            Sequelize,
            res);
    };
    profileController.listofvolunteer = function (req, res, next) {
        console.log("hi listofvolunteer");
        profileServiceObject.listofvolunteer(
            req,
            profile,
            profileinfo,
            Sequelize,
            res);
    }
    profileController.listofmentor = function (req, res, next) {
        console.log("hi listof mentor");
        profileServiceObject.listofmentor(
            req,
            profile,
            profileinfo,
            Sequelize,
            res);
    }

    profileController.viewmentor = function (req, res, next) {
        console.log("View mentor profile");
        profileServiceObject.viewmentor(
            req,
            profile,
            profileinfo,
            Sequelize,
            res);
    };
    //fetch data from database to display in registration page for edit profile
    profileController.editreturn = function (req, res, next) {
        // console.log("hi listofvolunteer");
        profileServiceObject.editreturn(
            req,
            profile,
            profileinfo,
            Sequelize,
            res);
    };
// after editing to update the database
    profileController.editupdate = function (req, res, next) {
        // console.log("hi listofvolunteer");
        profileServiceObject.editupdate(
            req,
            profile,
            profileinfo,
            login,
            Sequelize,
            function (results) {
                res.send(results);
            });
    };
    return profileController;
}