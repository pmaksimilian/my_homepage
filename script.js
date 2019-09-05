$(".naslovna-efekt").fadeIn(4000);

$(".naslovna-tekst").fadeIn(2500);

$(".naslovna-tekst").animate({
  left: '+=70%',
}, 3000, function() {
    // Animation complete.
});

$(".pokaziKdo").click(function() {
    $(".skritiKdo").slideDown("slow");
    $(".desni").show("slide", { direction: "right" }, 1500);
    $(".levi").show("slide", { direction: "left" }, 1500);
    $(".skrijKdo").show();
    $(this).hide();
});

$(".skrijKdo").click(function() {
    $(".skritiKdo").slideUp("slow");
    $(".desni").hide();
    $(".levi").hide();
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