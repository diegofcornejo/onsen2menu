ons.platform.select('android');
ons.bootstrap()
    .controller('AppController', function () {

        this.title = 'Sales';

        this.loginMenu = false;

        var options = {
            animation: 'slide'
        };

        this.login = function () {
            this.loginMenu = true;
            appNavigator
                .resetToPage("modules/home/template.html", options)
                .then(function () {
                
                });
        };

        this.logout = function () {
            this.loginMenu = false;
            appNavigator
                .resetToPage("modules/login/template.html", {animation:'fade-md'})
                .then(function () {
                    
                });
        };

        //Usar esta función para ir a una página ==> usar app.goToPage('productos');
        this.goToPage = function (page) {
            this.loginMenu = false;
            appNavigator
                .pushPage("modules/"+page+"/template.html", options)
                .then(function () {
                    
                });
        };

    });

ons.ready(function () {
    console.log("Onsen UI is ready!");
});