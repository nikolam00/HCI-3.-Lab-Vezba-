$(function() {
    var stari_text;
    var tekst = document.getElementById('tekst');
    $("#change").click(function() {
        stari_text = tekst.innerText;
        $('#tekst').summernote({ focus: true });
        $('#change').hide();
        $('#save').show();
        $('#quit').show();

    });

    // Bootbox
    $("#save").click(function() {
        bootbox.confirm("Save changes?", function(odgovor) {
            if (odgovor) {
                $('#tekst').summernote('destroy');
                $('#save').hide();
                $('#quit').hide();
                $('#change').show();
            }
        })
    })

    $('#quit').click(function() {
        $('#tekst').summernote('destroy');
        tekst.innerText = stari_text;

        $('#save').hide();
        $('#quit').hide();
        $('#change').show();
    })


})