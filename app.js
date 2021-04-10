document.getElementById('calcular').addEventListener('click', calcularTodo, false);
document.getElementById('reset').addEventListener('click',resetAll,false);
function calcularTodo(){
    
    var peaje = document.getElementById("peaje").value;
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    var cashBrut = document.getElementById("cashBrut").value;
    var cashHand = document.getElementById("cashHand").value;
    var gananciaNeto = cashBrut - peaje;
    var correspondencia = gananciaNeto / 2;
    var semana = document.getElementById("semana").value;
    console.log(peaje, nombre, apellido, cashBrut, cashHand);
    
    if(nombre == null || cashBrut == 0 || cashHand === 0){
        document.getElementById('resultados').innerHTML=`
                <div id="resultados">
                <div class="card-body" style="background-color: lightseagreen;">
                    Por favor completa todos los campos antes de intentar calcular.
                    </div>
                    </div>`
    }else {balanceo(correspondencia, cashHand);}
        function balanceo(correspondencia, cashHand) {
            if(correspondencia > cashHand) {
                var balanc = correspondencia - cashHand;
                document.getElementById('resultados').innerHTML=`
                <div id="resultados">
                    <div class="card-body" style="background-color: lightseagreen;">
                        Los resultados de la ${semana} son:<br>
                        Debo pasarle a ${nombre} la suma de $${balanc}.
                    </div>
                </div>`
            } else if(correspondencia == cashHand){
                document.getElementById('resultados').innerHTML=`
                <div id="resultados">
                <div class="card-body" style="background-color: lightseagreen;">
                    Los resultados de la ${semana} son: <br>
                    Ambos estan saldados por que recibieron lo que les correspondia.
                    </div>
                    </div>`
            }else {
                var balanc = cashHand - correspondencia;
                document.getElementById('resultados').innerHTML=`
                <div id="resultados">
                <div class="card-body" style="background-color: lightseagreen;">
                    Los resultados de la ${semana} son: <br>
                    ${nombre} debe pasarme la suma de $${balanc}.
                    </div>
                    </div>`
                
            }
        }
}
function resetAll(){
    document.getElementById("myForm").reset();
    document.getElementById('resultados').innerHTML=``
}


