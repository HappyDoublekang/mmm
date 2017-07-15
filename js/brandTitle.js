$(function() {
     getBrandTitle();
    function getBrandTitle() {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getbrandtitle",
            success: function(data) {
                var html = template("brandTitleTmp", data);
                $('.brand-title').html(html);
            }
        })
    }
});