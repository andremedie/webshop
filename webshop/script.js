$(document).ready(function(){
    $.getJSON('huvudkategorier.json', function(data){
        webshop = data; 
        LoopHead();
        $.getJSON('underkategorier.json', function(data){
            undercat = data;
            $.getJSON('produkt.json', function(data){
                products = data;
                LoopUnder();
            });

        });
    });

    user = "admin"
    password = "admin"

    if(sessionStorage.saveUser != null ){
        }else{
    
            $("#login").click(function(){
         
                //Om password och username stämmer loggas användare in och sparas i sessionstorage
                if( $("#user").val() == user && $("#password").val() == password) {
    
                    thisUserIsLoggedIn();
                    sessionStorage.saveUser = user;
    
    
                //annars visas glömt lösenord
                    }else{
                        $(".formWrap").hide();
                        $("#Lost").show();
                    }
                
            
            });
        }

          //loggar ut användare
    $("#logout").click(function(){
        sessionStorage.removeItem("saveUser");
        //location.reload();
        document.location.href = "index.html";
        $("#logout").hide();

    });
    function thisUserIsLoggedIn(){
        //$("#login").("");
        document.location.href = "admin.html";
     $("#logout").show();

    }
    
   
    $("#rightPassword2").hide();
    user2 = "kund"
    password2 = "password"

    if(sessionStorage.saveUser != null ){
        thisUserIsLoggedIn2();
        $("#buyBtn").show();
        }else{
    
            $("#login").click(function(){
                
                //Om password och username stämmer loggas användare in och sparas i sessionstorage
                if( $("#user").val() == user2 && $("#password").val() == password2) {
    
                    thisUserIsLoggedIn2();
                    sessionStorage.saveUser = user;
                    $("#buyBtn").show();
    
    
                //annars visas glömt lösenord
                    }else{
                        $(".formWrap").hide();
                        $("#Lost").show();
                    }
                
            
            });
        }

          //loggar ut användare
    $("#logout1").click(function(){
        sessionStorage.removeItem("saveUser");
        location.reload();


    });

    function thisUserIsLoggedIn2(){
        $("#rightPassword2").show();
        $("#logout1").show();
        $("#prodList").show();
        $("#custom").show();
        $("#inlogg").hide();
        $("#please").hide();
        $("#buyBtn").show();
    }

    
    function LoopHead() {
        
        for(i = 0; i < 3; i++) { 
     
            $("#webshop").append('<li class="slicknaw_item.slicknaw_row"><a href="#" role="menuitem" tabindex="0">'+webshop[i].category+'</a></li>');
        }
        
    }
    
    function LoopUnder() {
        var html = '<h1>Choose your Clothing:</h1>';
        for(var i = 0; i < undercat.length; i++) {
            html += '<div class="col-md-3">';
            html += '<h3 onclick="visaProdukter('+undercat[i].id+')">'+undercat[i].name+'</h3><ul>';
            for(var j = 0; j < products.length; j++) {
                if(undercat[i].id == products[j].underKat) html += '<li onclick="visaProdukt('+products[j].id+')">'+products[j].prodName+'</li>';
            }
            html += '</ul></div>';
        }
        $('#subcategories').html(html);

    }
    
    $.getJSON('produkt.json', function(data){
        
        
        products = data;
        LoadProducts();
        var json_str = JSON.stringify(webshop);
        sessionStorage.lists = json_str;
        
        function LoadProducts() {
            for(i = 0; i < 4; i++){

                    $("#product").append('<div> <a href="#" id="text ' + [i] + '">' + products[i].prodName + '   </a></div>')

                    
                }
                for(i = 4; i < 8; i++){                  
                        $("#product").append('<a href="#" id="text ' + [i] + '">' + products[i].prodName + '   </a>')
        
                    }
            }
            

        });
        
    }); 
    
    
    function visaProdukter(nr) {
        $("#clothing").empty();
    if (nr==1) {
        LoadWinter();}

        if (nr==2) {
            
            LoadSpring();}

            if (nr==3) {
              
                LoadSummer();}
    
            
        if (nr==4) {
           
            LoadAutumn();}
        
    }
    
    function visaProdukt(nr) {
       var i;
       nr = nr - 1;
       $("#clothing").empty();
    switch (nr)
    {
    }
        
    $('<h1 class="card" style="align-middle width: 25rem;">' + products[nr].id + '</h1>')
        .append('<img class="card-img-top" src=' + products[nr].prodPic + ' alt="Card image cap"> </img>')
        .append('<div class="card-block">')
        .append('<h1 class="card-title">' + products[nr].prodName + '</h1>')
        .append('<p class="card-text">' + products[nr].prodDesc + '</p>')
        .append('<a href="#" onclick="addCart(' + products[nr].id + ');" class="btn btn-primary">' + products[nr].prodPrice + " SEK" + '</a>')
        .append('</div> </div>')
        .appendTo($("#clothing"));
    }

    function LoadWinter() {
        $("#clothing").empty();
        for(i = 0; i < 4; i++){
          
                $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
                    .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
                    .append('<div class="card-block">')
                    .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
                    .append('<p class="card-text">' + products[i].prodDesc + '</p>')
                    .append('<a href="#" onclick="addCart(' + products[i].id + ');" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
                    .append('</div> </div>')
                .appendTo($("#clothing"));
              
        }
        
        
        
    }
    
    function LoadSpring() {
        $("#clothing").empty();
        for(i = 4; i < 8; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" onclick="addCart(' + products[i].id + ');" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
    
    function LoadSummer() {
        $("#clothing").empty();
        for(i = 8; i < 12; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" onclick="addCart(' + products[i].id + ');" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
    
    function LoadAutumn() {
        $("#clothing").empty();
        for(i = 12; i < 16; i++){
            $('<div class="card" style="align-middle width: 20rem;">' + products[i].id + '</div>')
            .append('<img class="card-img-top" src=' + products[i].prodPic + ' alt="Card image cap"> </img>')
            .append('<div class="card-block">')
            .append('<h4 class="card-title">' + products[i].prodName + '</h4>')
            .append('<p class="card-text">' + products[i].prodDesc + '</p>')
            .append('<a href="#" onclick="addCart(' + products[i].id + ');" class="btn btn-primary">' + products[i].prodPrice + " SEK" + '</a>')
            .append('</div> </div>')
        .appendTo($("#clothing"));
            
        }
        
        
        
    }
  
    

