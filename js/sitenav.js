$(function(){
    setSiteNav();
    function setSiteNav(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getsitenav",
            success:function(data){
                var html = template('siteNav',data);
                $('.site-nav').html(html);
            }
        })
    }
})