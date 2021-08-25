document.getElementById('enviar1').addEventListener('click', function(e) {
    e.preventDefault()
    
    var rentabilidad = document.getElementById("rentabilidad").value 
    var rentabilidad1 = document.getElementById("rentabilidad2").value 
    var fecha = document.getElementById("fecha").value
    var genero = document.getElementById("genero").value
    var edad = document.getElementById("edad").value
    var edadjubilacion = document.getElementById("edadjubilacion").value
    var sueldo = document.getElementById("sueldo").value
    var fondos = document.getElementById("fondos").value
    var apv = document.getElementById("apv").value


        if (edad == ""){
            alert('Debe ingresar Edad Actual  Afiliado');
            edad.focus();
            return false;
            }
            else if(isNaN(edad.replace(',','').replace(',','').replace(',',''))){
            alert('La edad del afiliado sólo aceptan valores numéricos');
            edad.focus();
            return false;
            }

        if (edadjubilacion != ""){
            if(edad >= edadjubilacion){
                alert('La edad de Jubilacion debe ser mayor que la edad actual');
                edad.focus();
                return false;
                }
           }    

        if (sueldo == ""){
            alert('Debe ingresar Sueldo Actual  Afiliado');
            sueldo.focus();
            return false;
            }
            else if(isNaN(sueldo.replace(',','').replace(',','').replace(',',''))){
            alert('El Sueldo del afiliado sólo aceptan valores numéricos');
            sueldo.focus();
            return false;
            }

        if (fondos == ""){
            fondos = 0
            }
            else if(isNaN(fondos.replace(',','').replace(',','').replace(',',''))){
            alert('El fondo del afiliado sólo aceptan valores numéricos');
            fondos.focus();
            return false;
            }  
            
        if (apv == ""){
            apv = 0
            }
            else if(isNaN(apv.replace(',','').replace(',','').replace(',',''))){
            alert('El apv sólo acepta valores numéricos');
            fondos.focus();
            return false;
            }  

        if (fecha == ""){
            alert('Debe seleccionar la fecha actual');
            fecha.focus();
            return false;
            }
        
        if(rentabilidad1 != ""){
            rentabilidad = rentabilidad1/100
        }
        else{
            if (rentabilidad == ""){
                alert('Debe seleccionar una opcion de AFP');
                rentabilidad.focus();
                return false;
                }
                if(rentabilidad == "A" || rentabilidad == "B" || rentabilidad == "C" || rentabilidad == "D" || rentabilidad == "E"){
                    if(rentabilidad == "A"){
                        rentabilidad = 7.27/100
                    }
                    if(rentabilidad == "B"){
                        rentabilidad = 6.18/100
                    }
                    if(rentabilidad == "C"){
                        rentabilidad = 4.74/100
                    }
                    if(rentabilidad == "D"){
                        rentabilidad = 2.57/100
                    }
                    if(rentabilidad == "E"){
                        rentabilidad = 1.43/100
                    }
    
                    }
        }
    
        if (genero == ""){
            alert('Debe seleccionar su genero');
                genero.focus();
                return false;
                }  
                else if(edadjubilacion == ""){
                    if(genero == "Hombre"){
                        edadjubilacion = 65
    
                    }
                    if(genero == "Mujer"){
                        edadjubilacion = 60
                    }
                }
        
        var Date = fecha;
        var elem = Date.split('-');
        anoActual = elem[0];
        mesActual = elem[1];
        diaActual = elem[2];

        var fondoTotal = parseFloat(apv) + parseFloat(fondos);
        
        console.log(fondoTotal)
                
        for (var i = 0; i < (parseInt(edadjubilacion) - parseInt(edad)); i++) {
            fondoTotal += ( (parseFloat(sueldo)*0.1) * Math.pow(1 + parseFloat(rentabilidad), 12))
        }

        console.log(fondoTotal)
        
        

    var parrafo = document.getElementById("parrafo")
    parrafo.innerHTML = "Su fondo total es de " + Math.round(fondoTotal) + " Con una pension mensual de " + Math.round(fondoTotal/180)
})