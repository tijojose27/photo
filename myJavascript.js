$('.getImage').click(function (event) {
    var imgSrc = $(this).find('img').attr('src');
    //alert(imgSrc);
    $('#modalImage').attr("src", imgSrc);
    var imgSaying = $(this).parent().find('.saying').html();
    console.log(imgSaying);
    $('#modalSaying').text(imgSaying);
});