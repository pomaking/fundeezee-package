Router.map(function() {
  return this.route("dashboard/fundeezee", {
    controller: ShopAdminController,
    path: "dashboard/fundeezee",
    template: "fundeezeeDashboard",
    waitOn: function() {
      return ReactionCore.Subscriptions.Packages;
    }
  });
});