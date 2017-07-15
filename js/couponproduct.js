$(function(){
    var couponid=getQueryString("couponid");
    setCouponList(couponid);
    function setCouponList(couponid) {
        $.ajax({
            url: 'http://182.254.146.100:3000/api/getcouponproduct',
            data: { 'couponid': couponid },
            success: function(data) {
                var html = template('couponList', data);
                $('.coupon-list').html(html);
            }
        })
    }
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
})