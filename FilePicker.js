Uploads = new Mongo.Collection("uploads");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.uploads.helpers({
    uploads: function () {
      return Uploads.find({});
    }
  });

  Template.upload.events({
    'click button': function () {
      filepicker.pickMultiple(
        function(Blobs){        
          $.each(Blobs, function(i, val) {
            console.log(val.url);
            Uploads.insert(val);
          });
        }
      );
    }
  });

  Meteor.startup(function() {
    loadFilePicker('AfHziRzeWRCWVGlpEO4Guz');
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
