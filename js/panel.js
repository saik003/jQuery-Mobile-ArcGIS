
          $(document).bind('panelbeforeclose', function(e, data) {
    $(".ui-panel").scrollTop(0);
});

$(document).bind('panelbeforeopen', function(e, data) {
    top_pos = $(document).scrollTop();
    $(".ui-panel").css("top", top_pos);
});

$(document).bind('panelopen', function(e, data) {
    top_pos = $(document).scrollTop();

    if ((iOS && iOS <= 5.01)) {
        $(".ui-panel").css("overflow", "scroll");
        $(".ui-panel").css("-webkit-overflow-scrolling", "auto");
    } else {
        $(".ui-panel").css("overflow", "scroll");
        $(".ui-panel").css("-webkit-overflow-scrolling", "touch");
    }
    $(".ui-panel").height($(window).height() - $('.ui-page-active header').height());
    $(".ui-panel").css("top", 0);
    $(".ui-panel-content-wrap-open").css("overflow", "hidden");
    $(".ui-panel-content-wrap-open").height($(window).height() - $('.ui-page-active header').height());
    $(".ui-panel-content-wrap-open").scrollTop(top_pos);
    $(document).scrollTop(0);
});

$(document).bind('panelclose', function(e, data) {
    top_pos = $(".ui-panel-content-wrap-closed").scrollTop();
    $(".ui-panel").height('auto');
    $(".ui-panel-content-wrap-closed").height("auto");
    $(".ui-panel-content-wrap-closed").css("overflow", "auto");
    $(document).scrollTop(top_pos);
});