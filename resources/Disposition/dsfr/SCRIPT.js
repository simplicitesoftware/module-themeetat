/* Specific client script */
(function($) {
    $(document).on("ui.loaded", function() {
        console.warn(">>> DSFR disposition - onload <<<");
        let indexSearchbar = $(".header .index .searchbox input.completion");
        indexSearchbar.attr("placeholder", "Rechercher");
    });

    $(document).on("ui.ready", function() {
        console.warn(">>> DSFR disposition - ready <<<");
    });
    
    
    $(document).on("ui.beforeunload", function() {
        // window will be unloaded
    });
    
    $(document).on("ui.unload", function() {
        // window is unloaded
    });
})(jQuery);