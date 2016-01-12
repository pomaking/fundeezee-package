Template.reactionFundeezee.onCreated(function() {
  var _self;
  _self = this;
  return this.autorun(function() {
    var subscription;
    subscription = _self.subscribe("Packages");
    if (subscription.ready()) {
      return _self.fundeezeeSettings = ReactionCore.Collections.Packages.findOne({
        name: 'reaction-fundeezee'
      }).settings["public"];
    }
  });
});

Template.reactionFundeezee.helpers({
  settings: function() {
    var ref;
    return (ref = Template.instance()) != null ? ref.fundeezeeSettings : void 0;
  },
  fundeezeeTemplates: function() {
    var app, i, len, ref, ref1, fundeezeeSettings, templates;
    templates = [];
    Template.instance().fundeezeeSettings = $.extend(true, {}, Template.instance().fundeezeeSettings, Template.currentData());
    fundeezeeSettings = (ref = Template.instance()) != null ? ref.fundeezeeSettings : void 0;
    if (fundeezeeSettings.apps) {
      ref1 = fundeezeeSettings != null ? fundeezeeSettings.appsOrder : void 0;
      for (i = 0, len = ref1.length; i < len; i++) {
        app = ref1[i];
        if ((fundeezeeSettings.apps[app] != null) && fundeezeeSettings.apps[app].enabled) {
          templates.push(app);
        }
      }
    }
    return templates;
  }
});