$(".pokaziKdo").click(function() {
    $(".skritiKdo").slideDown("slow");
    $(".skrijKdo").show();
    $(this).hide();
});

$(".skrijKdo").click(function() {
    $(".skritiKdo").slideUp("slow");
    $(".pokaziKdo").show();
    $(this).hide();
});

$(".pokaziKaj").click(function() {
    $(".skritiKaj").slideDown("slow");
    $(".skrijKaj").show();
    $(this).hide();
});

$(".skrijKaj").click(function() {
    $(".skritiKaj").slideUp("slow");
    $(".pokaziKaj").show();
    $(this).hide();
});