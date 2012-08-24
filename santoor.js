
  this.Santoor = (function() {

    function Santoor() {
      this.name = 1;
    }

    return Santoor;

  })();

  this.SantoorSong = Backbone.View.extend({
    render: function() {
      return $("#main").html("Ritesh");
    }
  });
