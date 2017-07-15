$(function () {
    var productid = getQueryString("productid");
    getMoneyProduct(productid);
    function getMoneyProduct(productid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getmoneyctrlproduct",
            data:{
                 "productid": productid
            },
                success:function (data) {
                    var html = template("moneyProduct",data);
                    $("#section").html(html);
                }
        });
    }
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
});

  