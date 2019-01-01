// Window object
// 18-12-2018

    //Window methods/object/property

        window.console.log(123);

    //Alert
        window.alert('Hello world');

    //Prompt
        const input = prompt();
        alert(input);

    // confirm

        if(confirm('Are you sure')){
        console.log('yes');
        }else{
        console.log('No');
        }

    let val;

    //Outer height and width
        val = window.outerHeight;
        val = window.outerWidth;

    //Inner height and width
        val = window.innerHeight;
        val = window.innerWidth;

    // Scroll points
        val = window.scrollY;
        val = window.scrollX;

    //Location Object
        val = window.location;
        val = window.location.hostname;
        val = window.location.port;
        val = window.location.href;
        val = window.location.search;

    //Redirect
        window.location.href = 'http://google.com'

    //Relod
        window.location.reload();

    //History Object
        window.history.go('https://www.google.com/');
        window.history.go(-2);

        val = window.history.length;

    //Navigator Object
        val = window.navigator.appName;
        val = window.navigator.appVersion;
        val = window.navigator.userAgent;
        val = window.navigator.platform;
        val = window.navigator.vendor;
        val = window.navigator.languages;

    console.log(val);
