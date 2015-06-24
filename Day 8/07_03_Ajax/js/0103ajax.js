function setArticle() {
    $("#content").load("data/" + $(this).attr("article") + "html");
}
$(function(){
    $(".navItem").click(setArticle);
});