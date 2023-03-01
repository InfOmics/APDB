// filter columns
$(document).ready(function(){
    // not checked hide 
    $("input:checkbox:not(:checked)").each(function() {
        var column = "table ." + $(this).attr("name");
        $(column).hide();    
    })
});

$(document).ready(function(){
    // hide columns
    $("input:checkbox:not(:checked)").each(function() {
        var column = "table ." + $(this).attr("name");
        $(column).hide();
    });
    // show columns
    $("input:checkbox").click(function(){
        var column = "table ." + $(this).attr("name");
        $(column).toggle();
    }); 
});


// filter columns of modified table 
$(document).ready(function(){
    $("table").bind("DOMSubtreeModified", function() {
        // not checked hide 
        $("input:checkbox:not(:checked)").each(function() {
            var column = "table ." + $(this).attr("name");
            $(column).hide();   
        });
        $("input:checkbox").click(function(){
            var column = "table ." + $(this).attr("name");
            $(column).toggle();
        }); 
    });
});


$(document).ready(function(){
    $("table").bind("DOMSubtreeModified", function() {
        // hide columns of modified table 
        $("input:checkbox:not(:checked)").each(function() {
            var column = "table ." + $(this).attr("name");
            $(column).hide();
        });
        // show columns of modified table
        $("input:checkbox").click(function(){
            var column = "table ." + $(this).attr("name");
            $(column).toggle();
        }); 
    });
});
