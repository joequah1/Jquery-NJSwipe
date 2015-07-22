# Jquery-NJSwipe

Super Lightweight Jquery Swipe Events.

## Installation 

### Using with RawGit CDN 

#### Version 1.0.0

    <script src="https://cdn.rawgit.com/joequah1/Jquery-NJSwipe/master/web/js/jquery.njswipe-1.0.0.min.js"></script> 
    
#### Version 1.0.01

    <script src="https://cdn.rawgit.com/joequah1/Jquery-NJSwipe/master/web/js/jquery.njswipe-1.0.01.min.js"></script> 
    
For more infomation bout RawGit, please visit [FAQ](https://rawgit.com/faq)

## Definitions

### swiperight

Triggered when user swipe in right direction over the element

### swipeleft

Triggered when user swipe in left direction over the element

### swipeup

Triggered when user swipe in up direction over the element

### swipedown

Triggered when user swipe in down direction over the element

## Usage 

Swipe Right 

    $('#swipe_area').njSwipe('swiperight', function () {
    
    });
    
Swipe Left 

    $('#swipe_area').njSwipe('swipeleft', function () {
    
    });
    
Swipe Up 

    $('#swipe_area').njSwipe('swipeup', function () {
    
    });
    
Swipe Down 
    
    $('#swipe_area').njSwipe('swipedown', function () {
    
    });
    
## Demo 

[JSFiddle](http://jsfiddle.net/joequah1/7y10k4o0/2/)

## References
Javascript Touch Events
- http://www.javascriptkit.com/javatutors/touchevents2.shtml

jQuery.fn.extend() 
- http://api.jquery.com/jquery.fn.extend/

.trigger()
- http://api.jquery.com/trigger/