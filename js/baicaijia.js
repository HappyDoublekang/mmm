$(function() {
    getbaicaijiaTitle();
     

    function getbaicaijiaTitle() {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbaicaijiatitle",
            success: function(data) {
                var html = template("baicaijiaTitleTmp", data);
                $('.bcj-title ').html(html)
                $('.bcj-title').find('.ul-wapper > ul > li').eq(0).addClass("active");
                $('.ul-wapper li').on('click',function(){ 
                    // alert(1)
                    $('.bcj-title').find('.ul-wapper > ul > li').removeClass("active");
                    $(this).addClass("active");
                    var thisTitleId = $(this).data('titleid');
                    getbaicaijiaProduct(thisTitleId);
                })
            }
        })
    }
    getbaicaijiaProduct(0);
function getbaicaijiaProduct(titleid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbaicaijiaproduct",
            data:{
                "titleid":titleid
            },
            success: function(data) {
                var html = template('baicaijiaProductTmp', data);
                $('.bcj-list').html(html);
            }
        })
    }
function  getUrlParam(name) {
            var reg = new RegExp("(^|&)" +
                name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }

})