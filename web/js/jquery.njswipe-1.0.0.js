/*
*
* njSwipe - version 1  
* Jquery
* Copyright (c) 2015, Ninjoe
* Dual licensed under the MIT or GPL Version 2 licenses.
* https://en.wikipedia.org/wiki/MIT_License
* https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*
*/
jQuery.fn.extend({
    njSwipe: function (direction, callback) {
    
        /* Adding custom events to DOM element */
        $(this).on(direction, callback);

        var _this = this;

        this.direction = direction;
        this.startX;
        this.startY;
        this.startTime;
        this.allowedTime = 300;
        this.threshold = 150;
        this.restraint = 100;

        /* Add touch events to DOM element */
        this.bindEvents = function () { 
            $(this).on('touchstart', this.touchStart);

            $(this).on('touchmove', this.touchMove);

            $(this).on('touchend', this.touchEnd);
        };

        /* Function on touchstart event */
        this.touchStart = function (e) {
            e.preventDefault();

            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            _this.startX = touch.pageX; // Get X pos of touchstart
            _this.startY = touch.pageY; // Get Y pos of touchstart
            _this.startTime = new Date().getTime(); // Get time 
        };

        /* Function on touchmove event */
        this.touchMove = function (e) {
            e.preventDefault();
        };

        /* Function on touchend event */
        this.touchEnd = function (e) {
            e.preventDefault();

            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var distX = touch.pageX - _this.startX; // Get X pos of touchend 
            var distY = touch.pageY - _this.startY; // Get Y pos of touchend
            var endTime = new Date().getTime() - _this.startTime; // Get time in between of touch start and end
            var direction;

            /* Check the time between touch start and end is within the allowed time */ 
            if ( endTime <= _this.allowedTime ) {
                /* Get the direction */
                if ( Math.abs(distX) >= _this.threshold && Math.abs(distY) <= _this.restraint ) {
                    direction = distX < 0 ? 'swipeleft' : 'swiperight';
                } else if ( Math.abs(distY) >= _this.threshold && Math.abs(distX) <= _this.restraint ) {
                    direction = distY < 0 ? 'swipeup' : 'swipedown';
                }
            }
            
            /* Trigger only if its the same direction */
            if (_this.direction == direction) {
                _this.triggerEvent(direction);
            }
        };

        this.triggerEvent = function (direction) {
            if (direction != '' && typeof direction != 'undefined' && direction != null) {
                /* Trigger custom event */
                $(_this).trigger(direction);
            }
        };

        this.bindEvents();
    }
});


    