

!(function(){

    // Make console.log behave itself on browsers that do not support console.

    (function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
    (function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());



    // Lazy library loader (by means of chain.js and load.js)


    load('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
         'js/underscore.js',
         'js/backbone.js'
    ).thenRun(function () {
         console.log('Ready loading assets');
    });




})()