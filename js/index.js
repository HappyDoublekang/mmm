$(function(){
    
        getindexMenu();

    function getindexMenu() {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getindexmenu",
            success: function(data) {
                var html = template("menuTmp", data);
                $('#menu').html(html);
                $('#menu >.row > div:nth-child(8)').on('click', function() {
                    $('#menu >.row > div:nth-last-child(-n+4)').toggle(200);
                });
            }
        })
    }
    getRecommen();

    function getRecommen() {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getmoneyctrl",
            success: function(data) {
                var html = template('recommenTmp', data);
                $('.recommen-list').html(html);
            }
        })
    }
})

