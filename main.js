$(document).ready(function () {
    $("#enviarfor").click(function(){

        var destino = "proceso.php";

        $.ajax({
            type: "POST",
            url: destino,
            data: $("#formulario").serialize(),
            //dataType: "json",
            success: function (data) {
                $("#datosenviados").html(data);
            }
        });
        return false;
    });
});