
$(function() {
    var brandtitleid = getQueryString("brandtitleid");
    getBrandList(brandtitleid);
    getBrandProduct(brandtitleid);

    function getBrandList(brandtitleid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbrand",
            data: {
                "brandtitleid": brandtitleid
            },
            success: function(data) {
                var html = template("brandListTmp", data);
                $('.brand-list').html(html);
            }
        })
    }

    function getBrandProduct(brandtitleid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbrandproductlist",
            data: {
                "brandtitleid": brandtitleid,
                "pagesize": 4
            },
            success: function(data) {
                var html = template("brandProductTmp", data);
                $('.product-list').html(html);
                //等商品出来了再加载商品评论
                getBrandProductCom(data.result[0]);
            }
        })
    }

    function getBrandProductCom(product) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getproductcom",
            data: {
                "productid": product.productId
            },
            success: function(data) {
                data = {
                    "productImg": product.productImg,
                    "productName": product.productName,
                    "result": data.result
                };
                // console.log(data);
                var html = template("brandProductComTmp", data);
                $('.product-com').html(html);
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
