$('.getImage').click(function (event) {
    var imgSrc = ($(this).find('img').attr('src'));
    //alert(imgSrc);
    $('#modalImage').attr("src", imgSrc);
});

$('#myModal').modal(options)