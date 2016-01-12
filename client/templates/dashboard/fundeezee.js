Template.fundeezeeSettings.helpers({
  packageData: function() {
    return ReactionCore.Collections.Packages.findOne({
      name: 'reaction-fundeezee'
    });
  },

  checkboxAtts: function () {
    return {
      class: "checkbox-switch"
    }
  }
});


AutoForm.hooks({
  "fundeezee-update-form": {
    onSuccess: function(operation, result, template) {
      Alerts.removeSeen();
      return Alerts.add("Fundeezee settings saved.", "success", {
        autoHide: true
      });
    },
    onError: function(operation, error, template) {
      Alerts.removeSeen();
      return Alerts.add("Fundeezee settings update failed. " + error, "danger");
    }
  }
});