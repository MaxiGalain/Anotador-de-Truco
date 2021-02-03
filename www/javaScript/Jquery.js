$(document).ready(function(){
    //PANTALLA 1
    $('#Btn_Val_24').on('click', Btn_24);
    $('#Btn_Val_30').on('click', Btn_30);
    $('#iniciar').on('click', Btn_Inicio);
    //PANTALLA 2
    $('#fin').on('click', Btn_Fin);
    $('#suma1').on('click', puntos);
    $('#resta1').on('click', resta30);
    $('#suma2').on('click', puntos_Equipo2);
    $('#rest2').on('click', resta_Equipo2);
    //VARIABLES GLOBALES
    var Cont_Click_Btn_24=0;   
    var Valor_Btn_30;
    var Valor_Btn_24;
    var Cmp_Nombre1;
    var Cmp_Nombre2;
    var error;
    var Contador_Equipo1=0;
    var Contador_Equipo2=0;
    //PANTALLA 1
    //MIS FUNCIONES
        function Btn_Inicio (){
            Cmp_Nombre1 = $('#equipo1').val();
            Cmp_Nombre2 = $('#equipo2').val();
            if (Cmp_Nombre1 == "" && Cmp_Nombre2 == ""){
                alert('Ingrese nombres de los equipos');
                error++;
            }else if (Cmp_Nombre1 == ""){
                alert('Ingrese nombre del equipo 1');
                error++;
            }else if (Cmp_Nombre2 == ""){
                alert('Ingrese nombre del equipo 2');
                error++;
            }
            else{
            $('#ne1').val(Cmp_Nombre1);
            $('#ne2').val(Cmp_Nombre2);
            }
            if ($('#Btn_Val_30').hasClass('colorVerde')){
            Valor_Btn_30   = $('#Btn_Val_30').val();
            $('#max').val(Valor_Btn_30);
            }else if($('#Btn_Val_24').hasClass('colorVerde')){
             Valor_Btn_24 = $('#Btn_Val_24').val();
            $('#max').val(Valor_Btn_24);
            }else{
            alert('Seleccione un tipo de juego');
            error++;                                              
            }
        if(error==0){
            $('#sect1').hasClass('pantalla-1')
            $('#sect2').removeClass('pantalla-2').addClass('pantalla-1');
            $('#sect1').addClass('pantalla-2'); 
        }
        else{
            error=0;
        }
        }
        //TIPO DE JUEGO
        function Btn_24(){
                $('#Btn_Val_24').hasClass('colorGris')
                $('#Btn_Val_24').removeClass('colorGris').addClass('colorVerde');
                $('#Btn_Val_30').removeClass('colorVerde').addClass('colorGris');
                Cont_Click_Btn_24++;
                console.log('hola'+Cont_Click_Btn_24);
        }
        function Btn_30(){
                $('#Btn_Val_30').hasClass('colorGris')
                $('#Btn_Val_30').removeClass('colorGris').addClass('colorVerde');
                $('#Btn_Val_24').removeClass('colorVerde').addClass('colorGris')
        }
        //PANTALLA NUMERO 2
        //CONTADOR Y BOTONES INTERACTIVOS DEL EQUIPO 1
        function puntos(){
            Contador_Equipo1++;
                console.log(Contador_Equipo1);
                 switch(Contador_Equipo1){
                    case 1:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/1.png');
                        break;
                    case 2:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/2.png');
                        break;
                    case 3:
                       $('#Img_Equipo1_Fosforo_5').attr('src','img/3.png');
                        break;
                    case 4:
                       $('#Img_Equipo1_Fosforo_5').attr('src','img/4.png');
                        break;
                    case 5:
                       $('#Img_Equipo1_Fosforo_5').attr('src','img/5.png');
                        break;
                    case 6:
                      $('#Img_Equipo1_Fosforo_10').attr('src','img/1.png');
                        break;
                    case 7:
                       $('#Img_Equipo1_Fosforo_10').attr('src','img/2.png');
                        break;
                    case 8:
                       $('#Img_Equipo1_Fosforo_10').attr('src','img/3.png');
                        break;
                    case 9:
                       $('#Img_Equipo1_Fosforo_10').attr('src','img/4.png');
                        break;
                    case 10:
                        $('#Img_Equipo1_Fosforo_10').attr('src','img/5.png');
                        break;
                    case 11:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/1.png');
                        break;
                    case 12:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/2.png');
                        break;
                    case 13:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/3.png');
                        break;
                    case 14:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/4.png');
                        break;
                    case 15:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/5.png');
                    break;
                    case 16:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/1.png');
                        break;
                    case 17:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/2.png');
                        break;
                    case 18:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/3.png');
                        break;
                    case 19:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/4.png');
                        break;
                    case 20:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/5.png');
                        break;
                    case 21:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/1.png');
                        break;
                    case 22:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/2.png');
                        break;
                    case 23:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/3.png');
                        break;
                    case 24:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/4.png');
                        break;
                    case 25:
                        //Lo que hara esto es controlar si el boton "24" fue presionado, si fuese cierto
                        //reseteara el contador de equipos 1 a 0 y las imagenes tambien.
                        if(Cont_Click_Btn_24>=1){
                        console.log('Hasta aca llegas');
                        Contador_Equipo1=0;
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_10').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
                        Cont_Click_Btn_24=0;
                    }else{
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/5.png');
                    }
                        break;
                    case 26:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/1.png');
                        break;
                    case 27:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/2.png');
                        break;
                    case 28:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/3.png');
                        break;
                    case 29:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/4.png');
                        break;
                    case 30:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/5.png');
                        break;
                            default:
                        //Una vez pasado los 30, si queremos presionar una vez mas, se reseteara el contador
                        //y se borraran las imagenes.

                        Contador_Equipo1 = 0;
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_10').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/0.png');
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
                } 
            $('#puntos1').val(Contador_Equipo1);
        }
        function resta30(){
            Contador_Equipo1--
            console.log(Contador_Equipo1);
            switch(Contador_Equipo1){
                    case 0:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/0.png');
                        break;
                    case 1:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/1.png');
                        break;
                    case 2:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/2.png');
                        break;
                    case 3:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/3.png');
                        break;
                    case 4:
                        $('#Img_Equipo1_Fosforo_5').attr('src','img/4.png');
                        break;
                    case 5:
                        $('#Img_Equipo1_Fosforo_10').attr('src','img/0.png');
                        break;
                    case 6:
                        $('#Img_Equipo1_Fosforo_10').attr('src','img/1.png');
                        break;
                    case 7:
                            $('#Img_Equipo1_Fosforo_10').attr('src','img/2.png');
                        break;
                    case 8:
                            $('#Img_Equipo1_Fosforo_10').attr('src','img/3.png');
                        break;
                    case 9:
                            $('#Img_Equipo1_Fosforo_10').attr('src','img/4.png');
                        break;
                    case 10:
                            $('#Img_Equipo1_Fosforo_15').attr('src','img/0.png');
                        break;
                    case 11:
                            $('#Img_Equipo1_Fosforo_15').attr('src','img/1.png');
                        break;
                    case 12:
                            $('#Img_Equipo1_Fosforo_15').attr('src','img/2.png');
                    break;
                    case 13:
                            $('#Img_Equipo1_Fosforo_15').attr('src','img/3.png');
                        break;
                    case 14:
                        $('#Img_Equipo1_Fosforo_15').attr('src','img/4.png');
                        break;
                    case 15:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/0.png');
                        break;
                    case 16:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/1.png');
                        break;
                    case 17:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/2.png');
                        break;
                    case 18:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/3.png');
                        break;
                    case 19:
                        $('#Img_Equipo1_Fosforo_20').attr('src','img/4.png');
                        break;
                    case 20:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/0.png');
                        break;
                    case 21:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/1.png');
                        break;
                    case 22:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/2.png');
                        break;
                    case 23:
                        $('#Img_Equipo1_Fosforo_25').attr('src','img/3.png');
                        break;
                    case 24:
                            $('#Img_Equipo1_Fosforo_25').attr('src','img/4.png');
                        break;
                    case 25:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
                        break;
                    case 26:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/1.png');
                        break;
                    case 27:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/2.png');
                        break;
                    case 28:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/3.png');
                        break;
                    case 29:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/4.png');
                        break;
                    case 30:
                        $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
                        break;
                            default:
        }       
        $('#puntos1').val(Contador_Equipo1);
    }
    //BOTON DONDE LOS DOS EQUIPOS PUEDEN INTERACTUAR
    function Btn_Fin (){
        Nmr_Puntos_Equipo1 = $('#puntos1').val();
        Nmr_Puntos_Equipo2 = $('#puntos2').val();
        //Dependiendo de que equipo gane, se resetearan los contadores y se mostrara una alerta con el equipo
        //ganador
        if(Nmr_Puntos_Equipo1>Nmr_Puntos_Equipo2){
            alert('GANO EL EQUIPO NUMERO 1');
            $('#puntos1').val(0);
            $('#puntos2').val(0);
            Contador_Equipo1=0;
            Contador_Equipo2=0;
        }else if(Nmr_Puntos_Equipo2>Nmr_Puntos_Equipo1){
            alert('GANO EL EQUIPO NUMERO 2');
            $('#puntos1').val(0);
            $('#puntos2').val(0);
            Contador_Equipo1=0;
            Contador_Equipo2=0;
            $('#Img_Equipo1_Fosforo_5').attr('src','img/0.png');
            $('#Img_Equipo1_Fosforo_10').attr('src','img/0.png');
            $('#Img_Equipo1_Fosforo_15').attr('src','img/0.png');
            $('#Img_Equipo1_Fosforo_20').attr('src','img/0.png');
            $('#Img_Equipo1_Fosforo_25').attr('src','img/0.png');
            $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_5').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_10').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_15').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_20').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_25').attr('src','img/0.png');
            $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
            $('#sect2').hasClass('pantalla-1')
            $('#sect1').removeClass('pantalla-2').addClass('pantalla-1');
            $('#sect2').addClass('pantalla-2');
            $('#Btn_Val_30').removeClass('colorVerde').addClass('colorGris');
            $('#Btn_Val_24').removeClass('colorVerde').addClass('colorGris');
        }
        //En caso de que no se cumpla ninguna de estas condiciones y no se haya anotado nada
        //Se reseteara y nos mandara a la pantalla 1
        $('#Img_Equipo1_Fosforo_5').attr('src','img/0.png');
        $('#Img_Equipo1_Fosforo_10').attr('src','img/0.png');
        $('#Img_Equipo1_Fosforo_15').attr('src','img/0.png');
        $('#Img_Equipo1_Fosforo_20').attr('src','img/0.png');
        $('#Img_Equipo1_Fosforo_25').attr('src','img/0.png');
        $('#Img_Equipo1_Fosforo_30').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_5').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_10').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_15').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_20').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_25').attr('src','img/0.png');
        $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
        $('#sect2').hasClass('pantalla-1')
        $('#sect1').removeClass('pantalla-2').addClass('pantalla-1');
        $('#sect2').addClass('pantalla-2');
        $('#Btn_Val_30').removeClass('colorVerde').addClass('colorGris');
        $('#Btn_Val_24').removeClass('colorVerde').addClass('colorGris');
    }

        //CONTADOR Y BOTONES INTERACTIVOS DEL EQUIPO 2
        function puntos_Equipo2(){
            Contador_Equipo2++;
            console.log(Contador_Equipo2);
            switch(Contador_Equipo2){
                case 1:
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/1.png');
                    break;
                case 2:
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/2.png');
                    break;
                case 3:
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/3.png');
                    break;
                case 4:
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/4.png');
                    break;
                case 5:
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/5.png');
                    break;
                case 6:
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/1.png');
                    break;
                case 7:
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/2.png');
                    break;
                case 8:
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/3.png');
                    break;
                case 9:
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/4.png');
                    break;
                case 10:
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/5.png');
                    break;
                case 11:
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/1.png');
                    break;
                case 12:
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/2.png');
                break;
                case 13:
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/3.png');
                    break;
                case 14:
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/4.png');
                    break;
                case 15:
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/5.png');
                    break;
                case 16:
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/1.png');
                    break;
                case 17:
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/2.png');
                    break;
                case 18:
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/3.png');
                    break;
                case 19:
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/4.png');
                    break;
                case 20:
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/5.png');
                    break;
                case 21:
                    $('#Img_Equipo2_Fosforo_25').attr('src','img/1.png');
                    break;
                case 22:
                    $('#Img_Equipo2_Fosforo_25').attr('src','img/2.png');
                    break;
                case 23:
                    $('#Img_Equipo2_Fosforo_25').attr('src','img/3.png');
                    break;
                case 24:
                    $('#Img_Equipo2_Fosforo_25').attr('src','img/4.png');
                    break;
                case 25:
                        //Lo que hara esto es controlar si el boton "24" fue presionado, si fuese cierto
                        //reseteara el contador de equipos 2 a 0 y las imagenes tambien.
                    if(Cont_Click_Btn_24>=1){
                        console.log('Hasta aca llegas');
                        Contador_Equipo2=0;
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/0.png');
                        $('#Img_Equipo2_Fosforo_10').attr('src','img/0.png');
                        $('#Img_Equipo2_Fosforo_15').attr('src','img/0.png');
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/0.png');
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/0.png');
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
                        Cont_Click_Btn_24=0;
                    }else{
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/5.png');
                    }
                    break;
                case 26:
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/1.png');
                    break;
                case 27:
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/2.png');
                    break;
                case 28:
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/3.png');
                    break;
                case 29:
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/4.png');
                    break;
                case 30:
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/5.png');
                    break;
                        default:
                            //Si queremos seguir presionando una vez hallamos llegado al valor "30"
                            //Se reseteara el contador y las imagenes.
                    Contador_Equipo2 = 0;
                    $('#Img_Equipo2_Fosforo_5').attr('src','img/0.png');
                    $('#Img_Equipo2_Fosforo_10').attr('src','img/0.png');
                    $('#Img_Equipo2_Fosforo_15').attr('src','img/0.png');
                    $('#Img_Equipo2_Fosforo_20').attr('src','img/0.png');
                    $('#Img_Equipo2_Fosforo_25').attr('src','img/0.png');
                    $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
                    }
            $('#puntos2').val(Contador_Equipo2);
        }
        function resta_Equipo2(){
            Contador_Equipo2--
            console.log(Contador_Equipo2);
            switch(Contador_Equipo2){
                    case 0:
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/0.png');
                        break;
                    case 1:
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/1.png');
                        break;
                    case 2:
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/2.png');
                        break;
                    case 3:
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/3.png');
                        break;
                    case 4:
                        $('#Img_Equipo2_Fosforo_5').attr('src','img/4.png');
                        break;
                    case 5:
                        $('#Img_Equipo2_Fosforo_10').attr('src','img/0.png');
                        break;
                    case 6:
                        $('#Img_Equipo2_Fosforo_10').attr('src','img/1.png');
                        break;
                    case 7:
                            $('#Img_Equipo2_Fosforo_10').attr('src','img/2.png');
                        break;
                    case 8:
                            $('#Img_Equipo2_Fosforo_10').attr('src','img/3.png');
                        break;
                    case 9:
                            $('#Img_Equipo2_Fosforo_10').attr('src','img/4.png');
                        break;
                    case 10:
                            $('#Img_Equipo2_Fosforo_15').attr('src','img/0.png');
                        break;
                    case 11:
                            $('#Img_Equipo2_Fosforo_15').attr('src','img/1.png');
                        break;
                    case 12:
                            $('#Img_Equipo2_Fosforo_15').attr('src','img/2.png');
                        break;
                    case 13:
                            $('#Img_Equipo2_Fosforo_15').attr('src','img/3.png');
                        break;
                    case 14:
                        $('#Img_Equipo2_Fosforo_15').attr('src','img/4.png');
                        break;
                    case 15:
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/0.png');
                        break;
                    case 16:
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/1.png');
                        break;
                    case 17:
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/2.png');
                        break;
                    case 18:
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/3.png');
                        break;
                    case 19:
                        $('#Img_Equipo2_Fosforo_20').attr('src','img/4.png');
                        break;
                    case 20:
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/0.png');
                        break;
                    case 21:
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/1.png');
                        break;
                    case 22:
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/2.png');
                        break;
                    case 23:
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/3.png');
                        break;
                    case 24:
                        $('#Img_Equipo2_Fosforo_25').attr('src','img/4.png');
                        break;
                    case 25:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
                        break;
                    case 26:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/1.png');
                        break;
                    case 27:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/2.png');
                        break;
                    case 28:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/3.png');
                        break;
                    case 29:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/4.png');
                        break;
                    case 30:
                        $('#Img_Equipo2_Fosforo_30').attr('src','img/0.png');
                        break;
                            default:
        }
        $('#puntos2').val(Contador_Equipo2);
    }    
});