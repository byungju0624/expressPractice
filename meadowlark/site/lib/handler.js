const { query } = require("express");
const fortune = require("./fortune");
exports.home = (req, res) => res.render("home");
exports.about = (req, res) =>
  res.render("about", { fortune: fortune.getFortune() });
exports.notFound = (req, res) => res.render("404");
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render("500");
exports.sectionTest = (req, res) => res.render("section-test");

exports.newletterSignup = (req, res) => {
  res.render("newsletter-signup", { csrf: "CSRF token goes here" });
};
exports.newletterSignupProcess = (req, res) => {
  console.log("Form(from querystring): " + req, query.form);
  console.log(`CSRF token (from hidden form field): ${req.body._csrf}`);
  console.log(`Name (from visible form field): ${req.body.name}`);
  console.logO(`Email (from visible form field): ${req.body.email}`);
  res.redirect(303, "/newsletter-signup-thank-you");
};
exports.newsletterSignupThankYou = (req, res) => {
  res.render("newsletter-signup-thank-you");
};

exports.newsletter = (req, res) => {
  res.render("newsletter", { csrf: "CSRF token goes here" });
};
exports.api = (req, res) => {
  console.log(`CSRF token (from hidden form field): ${req.body._csrf}`);
  console.log(`Name (from visible form field): ${req.body.name}`);
  console.log(`Email (from visible form field): ${req.body.email}`);
  res.send({ result: "success" });
};
/* eslint-enable no-unused-vars */
exports.vacationPhotoContest = (req, res) => {
  const now = new Date();
  res.render("contest/vacation-photo", {
    year: now.getFullYear(),
    month: now.getMonth(),
  });
};
exports.vacationPhotoContestProcess = (req, res, fields, files) => {
  console.log(`field data: ${fields}`);
  console.log(`files: ${files}`);
  res.redirect(303, "/contest/vacation-photo-thank-you");
};
