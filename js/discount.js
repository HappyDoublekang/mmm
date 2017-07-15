$(function () {
    var productid = getQueryString("productid");
    getDiscountProduct(productid);
    function getDiscountProduct(productid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getdiscountproduct",
            data:{
                 "productid": productid
            },
                success:function (data) {
                    var html = template("discountProduct",data);
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