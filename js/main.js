var quote = "";
var author = "";


function getQuote() {
	//credit: http://quotesondesign.com/
	$.ajax({
		url: "http://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
		success: function(data) {
			var post = data.shift(); // The data is an array of posts. Grab the first one.
			console.log(post);
			$("#quote").html(post.content);
			$("#author").text("-" + post.title);
			quote = post.content;
			quote = quote.replace("<p>", "");
			quote = quote.replace("</p>", "");
			author = post.title;

		},
		cache: false
	});
}

$(document).ready(function (){
	getQuote();
});

$("#newQuote").on("click", getQuote);

$("#tweet").on("click", function() {
	window.open("https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent(quote + "-" + author), "_blank");
});