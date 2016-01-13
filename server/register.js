ReactionCore.registerPackage({
  label: "Fundeezee",
  name: "fundeezee-package",
  icon: "fa fa-bar-chart-o",
  autoEnable: true,
  settings: {
    public: {
    }
  },
  registry: [
    {
      provides: "dashboard",
      label: "Fundeezee",
      description: "Fundraiser Management with Fundeezee",
      route: "dashboard/fundeezee",
      icon: "fa fa-bar-chart-o",
      cycle: "3",
      container: "dashboard"
    }, {
      label: "Fundeezee Settings",
      route: "dashboard/fundeezee",
      template: "fundeezeeDashboard",
      provides: "settings",
      template: "fundeezeeSettings"
    }
  ],
  permissions: [
    {
      label: "Fundeezee",
      permission: "dashboard/fundeezee",
      group: "Shop Settings"
    }
  ]
});