# Calculadora Leyendas
### Conversor de Puntos de Desarrollo a porecentaje de Habilidad


<p><a href="https://raw.githack.com/Pyroster/LeyCalc/main/LeyCalc.html" title="Title">
Versión 1.0</a></p>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Leyendas</title>
	    <link href="https://github.com/Pyroster/LeyCalc/blob/6e40285391030ba25c227a29923137185631de57/LeyCalc.css" rel="stylesheet" type="text/css">
  </head>
  <body>

<!--- calculadora leyendas --->
<div class="calculator">

  <div class="screen">

    <div class="onscreen">Porcentaje</div>
    <div id="perc-display" name="perc-display" type="text" maxlength="5" class="topscreen" disabled value="0">0</div>

    <input id="calc-screen" type="text" class="calculator-screen" disabled value="0" />
    <div class="onscreen">PDesarrollo</div>

  </div>

  <div class="calculator-keys">

    <button class="clcbtn" type="button" value="7">7</button>
    <button class="clcbtn" type="button" value="8">8</button>
    <button class="clcbtn" type="button" value="9">9</button>
    <button class="clcbtn" type="button" value="4">4</button>
    <button class="clcbtn" type="button" value="5">5</button>
    <button class="clcbtn" type="button" value="6">6</button>
    <button class="clcbtn" type="button" value="1">1</button>
    <button class="clcbtn" type="button" value="2">2</button>
    <button class="clcbtn" type="button" value="3">3</button>
    <button class="clcbtn" type="button" value="0">0</button>

    <button type="button" class="convert" value="convert">C</button>

    <button type="button" class="all-clear" value="all-clear" id="all-clear">R</button>

  </div>

</div>
   <script src="LeyCalc.js"></script>	
 </body>
</html>
