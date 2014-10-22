$(document).ready(retrieveData);

function submitData() {
    $.post("/sprz", {
        author: $("#author").val(),
        trash: $("#trash").is(":checked"),
        wipe: $("#wipe").is(":checked"),
        takeout: $("#takeout").is(":checked"),
        dish: $("#dish").is(":checked"),
        hoover: $("#hoover").is(":checked")
    }, "json").done(retrieveData);
}

function retrieveData() {
    $.ajax("/sprz")
        .done(function(data) {
            $("#data").html(data.map(function(row) {
                var id = row.id;
                row = row.value;
                return "<tr><td>" + (new Date(Number(id))) + "</td><td>" + row.author + "</td><td>" + row.takeout + "</td><td>" + row.hoover + "</td><td>" + row.dish + "</td><td>" + row.wipe + "</td><td>" + row.trash + "</td><td></tr>";
            }).join(""));
        });
}