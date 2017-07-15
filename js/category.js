$(function(){
    setCategoryTitle();
    function setCategoryTitle(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorytitle",
            success:function(data){
                var html = template ("categoryTitleTmp",data);
                $("#category>.panel-group").html(html);
                var categoryTitle = $("#category > .panel-group > .panel-default > .panel-heading > h4 > a")
                categoryTitle.on("click", function(e) {
                   //测试有没有获取 id  console.log($(this).data("titleid"));
                   var titleId = $(this).data("titleid");
                   $.ajax({
                       url:"http://182.254.146.100:3000/api/getcategory?titleid="+titleId,
                       success:function(data){
                           //测试console.log(data);
                           var html = template("categoryTmp",data);
                           console.log(e.target);
                           var panelBody= $(e.target).parent().parent().parent().find(".panel-collapse").find('.panel-body');
                           panelBody.html(html);
                        //    var categoryList = panelBody.find('.row > div');
                        //     var count = categoryList.length % 3 || 3;
                        //     panelBody.find(".row > div:nth-last-child(-n+" + count + ")").css("border-bottom", "0");
                       }
                   })
                });
            }
        })
    }
})