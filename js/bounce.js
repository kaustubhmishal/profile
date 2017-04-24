$.fn.exBounce = function(){
    var self = this;
    (function runEffect(){
        self.effect("bounce", { times:3 }, 300, runEffect);
    })();
   return this;

};
$(document).ready(function(){
    $(".navbar-brand").exBounce();
});