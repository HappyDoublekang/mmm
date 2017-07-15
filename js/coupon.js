$(function (){
	setCoupon();
	function setCoupon(){
		$.ajax({url:"http://182.254.146.100:3000/api/getcoupon",success:function (data) {
			var html = template('couponTitle',data);
			$('.coupon-title').html(html);
		}})
	}
});