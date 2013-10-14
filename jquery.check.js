(function($)  {
  $.fn.extend({
    check : function()  {
      return this.filter(":radio, :checkbox").attr("checked", true);
    },
    uncheck : function()  {
      return this.filter(":radio, :checkbox").removeAttr("checked");
    },
    checked : function(value) {
      if(value === true || value === false) {
        // Set the value of the checkbox
        return $(this).each(function(){ this.checked = value; });
      } 
      else if(value === undefined || value === 'toggle') {
        // Toggle the checkbox
        return $(this).each(function(){ this.checked = !this.checked; });
      }
    }
  });
}(jQuery));