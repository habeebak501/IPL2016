angular.module('myApp').service('iplService',function(){

     var team;
        return {
        setTeam: function(teamName) {
          console.log(teamName);
            this.team = teamName.replace(/\s/g, '');
            console.log(this.team);
            return this.team
        },
        getTeam: function() {
          console.log(this.team);
            return this.team;
        }
      }
});
