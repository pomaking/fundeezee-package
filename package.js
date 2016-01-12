Package.describe({
  summary: "Fundeezee - Fundraiser Management for Organizations, Businesses, and Members",
  name: "orgora:reaction-fundeezee",
  version: "0.0.1",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2");

  // meteor base packages
  api.use("standard-minifiers");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("mongo");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("spacebars");
  api.use("check");

  // meteor add-on packages

  api.use("templating");
  api.use("less");
  api.use("reactioncommerce:core@0.9.2");

  api.addFiles("server/register.js", ["server"]); // register as a reaction package
  api.addFiles("server/policy.js", ["server"]); // browser-policies

  api.addFiles([
    "common/routing.js",
    "common/schemas.js"   // Fundeezee App Config
  ], ["client", "server"]);

  api.addFiles([
    "client/templates/fundeezee.html",
    "client/templates/fundeezee.js",

    "client/templates/dashboard/fundeezee.html",
    "client/templates/dashboard/fundeezee.js",
	"client/templates/home/home.html"
  ], ["client"]);
});