$(function(){
    //获取url中参数值得 根据参数名获取参数值 
    // 需要拿到传进来的分类 
    // 地址栏获取中文乱码 不能直接拿中文只能拿对应id 
   var categoryId = getQueryString("categoryid");
    getCategory(categoryId);
   var pageid = getQueryString("pageid");
    setProdcutList(categoryId, pageid);
    function getCategory(categoryId){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid=" +categoryId,
            success:function (data){
                console.log(data);
                $('#productList > .category-title > ol > li:last-child').html(data.result[0].category);
            }
        })
    }

    function setProdcutList(categoryId, pageid) {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getproductlist",
            data: {
                "categoryid": categoryId,
                "pageid": 1
            },
            success: function(data) {
                //console.log(data);
                // console.log(data.totalCount +"-----"+ data.pagesize);
                //页码数 用总条数 /  每页大小
                var page = data.totalCount / data.pagesize;
                // console.log(page);
                var pageli = "";
                for (var i = 0; i < page; i++) {
                    //循环生成 第几页的li标签
                    var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i + 1);
                    pageli += "<li><a href=" + url + ">第" + (i + 1) +  "页</a></li>";
                }
                $('#dLabel').html("第" + pageid + "页" + '<span class="caret"></span>');
                //如果当前页数已经到了第一页 给当前页面数变成2  2 -1 就只能 == 1
                if (pageid <= 1) {
                    pageid = 2;
                } else if (pageid >= page) {
                    //如果当前页数已经到了第最后一页 给当前页数变成最后一页 - 1  3+1 == 4
                    pageid = page - 1;
                }
                var prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
                var nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);
                $('.page-prev').attr("href", prevUrl);
                $('.page-next').attr("href", nextUrl);
                $('.dropdown-menu').html(pageli);
                var html = template("productListTmp", data);
                $('.product-list').html(html);
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
    
});