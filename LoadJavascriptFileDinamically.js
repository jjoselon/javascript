/* Load js files inside <head> with appendChild() as last child */
// One file
(function(h,o,t){
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t;
    a.appendChild(r);
})(window,document,'myjs.js');

// Other file
(function(h,o,t){
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t;
    a.appendChild(r);
})(window,document,'myjs2.js');
