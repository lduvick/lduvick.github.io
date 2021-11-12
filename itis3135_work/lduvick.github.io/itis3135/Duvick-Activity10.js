$(document).ready(function() {
// set up the event handlers for each link
        $("#image_list a").click(function (evt) {

                // get the image URL and caption for each image and animate the caption
                var imageURL = $(this).attr("href");
                var img = $("#image").attr("src", imageURL)
                $("#image").fadeOut(3000);//, function(){//$("#image").next().fadeIn(3000);//});
                $("#image").fadeIn(3000);//img.next().fadeIn(3000);//,function(){//});
                var imgTitle = $(this).attr("title");
                var imgCaption = $("#caption").text(imgTitle)
                $("#caption").fadeOut(3000);
                $("#caption").next().fadeIn(3000);


                callback(img, imgCaption);

                // cancel the default action of each link
                evt.preventDefault();
        });
        callback = function (img, imgCaption) {
                img.fadeOut(3000);
                imgCaption.fadeOut(3000);
                img.next().fadeIn(3000);
                imgCaption.next().fadeIn(3000)
        }
}); // end ready