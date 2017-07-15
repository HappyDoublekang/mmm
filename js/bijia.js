$(function() {
    var productid = getQueryString("productid");
    // console.log(productid);
    getProduct(productid);

    function getProduct(productid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getproduct",
            data: {
                "productid": productid
            },
            success: function(data) {
                // console.log(data);
                var html = template("productInfoTmp", data);
                $('.product-info').html(html);
                //获取评论的时候等商品先出来了再获取评论 
                getProductCom(productid);
            }
        })
    }

    function getProductCom(productid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getproductcom",
            data: {
                "productid": productid
            },
            success: function(data) {
                // console.log(data);
                var html = template("productComTmp", data);
                // console.log($('.product-com-list'));
                $('.product-com-list').html(html);
            }
        })
    }
    //是用来获取url中的参数的值的 根据参数名获取参数值
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
});