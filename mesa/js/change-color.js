    (function($) {

      //color changer is a plugin that allows you to use color names to change text color of any element
      $.colorChanger = function(element, options, errorHandler) {
        console.log(errorHandler);
        console.log(options);
          
          //these are the default colors to choose from
          var defaults = {

              red: '#ff0000',
              blue: '#0000ff',
              black: '#000000',
              green: '#008000', 
              white: '#ffffff',
          }

          var plugin = this;

          // hold the mapping from name to hex
          plugin.settings = {}

          var $element = $(element), // reference to the jQuery version of DOM element
               element = element;    // reference to the actual DOM element

          if(typeof errorHandler == 'undefined'){
            errorHandler = function(error){
              console.log('error ' + error);
            }
          }

          // the "constructor" method that gets called when the object is created
          plugin.init = function() {

            //allow the user of the plugin to extend the color mappings
              plugin.settings = $.extend({}, defaults, options);

              //user can an error handler in case color mapping does not exist
              //if there is no user defined error handler, default will be used
              plugin.errorHandler = errorHandler;

          }

          //this is the function to change the color of the text
          plugin.changeColor = function(colorName) {

            var hex = plugin.settings[colorName];

            //if hex for color doesn't exist, call errorHandler
            if(typeof hex == 'undefined'){
              return plugin.errorHandler(colorName + ' Does Not Exist');
            }

            $element.css("color", hex);

          }

          //initialize plugin
          plugin.init();

      }

      // add the plugin to jQuery and attach to elements
      $.fn.colorChanger = function(options, errorHandler) {

          // iterate through the DOM elements we are attaching the plugin to
          return this.each(function() {

              // if plugin has not already been attached to the element
              if (undefined == $(this).data('colorChanger')) {

                  // create a new instance of the plugin
                  // pass the DOM element and the user-provided options as arguments
                  var plugin = new $.colorChanger(this, options, errorHandler);

                  //associate plugin object with this element
                  $(this).data('colorChanger', plugin);
                } 
            });
        }
    })(jQuery);

    $(document).ready(function() {

      // attach the plugin to an element
      $('#sample-text').colorChanger(

      {
        magenta: '#ff00ff',
        purple: '#9932cc',
        orange: '#ffa500',
        silver: '#c0c0c0',
        gray: '#808080',
        grey: '#808080',
        lime: '#00ff00',
        aqua: '#00ffff',
        brown: '#a52a2a',
        indigo: '#4b0082',
        olive: '#808000',
        pink: ' #ffc0cb',
        turquoise: '#40e0d0',



      },
      //custom error handler
      function(error){
        $('#errorMessage').html(error);
        $('#errorMessage').removeClass('hidden');
      });

      //when button is clicked, invoke changeColor plugin method
      $('#button').click(function(){
        $('#errorMessage').addClass('hidden');
        var colorName = $('#color').val();
        $('#sample-text').data('colorChanger').changeColor(colorName);
      })
    });