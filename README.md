# Calculadora Leyendas
### Conversor de Puntos de Desarrollo a porecentaje de Habilidad


<p><a href="https://raw.githack.com/Pyroster/LeyCalc/main/LeyCalc.html" title="Title">
Versión 1.0</a></p>

<html>
  <head>
    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  
	  <style>
	html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 100%;
  font-weight: 300;
  line-height: 1;
 align-items: center;
  background-image: linear-gradient(236deg, #74ebd5, #acb6e5);
  display: flex;
  height: 100vh;
  justify-content: center;

}
/*calculadora leyendas*/
.calculator {
  background: rgb(207, 245, 13, 0.4);
  border-radius: 5%;
  box-shadow: 1px 1px 2px 2px black;
  padding: 5px;
  width: 200px;
}

.calculator-screen,
.topscreen {
  border-radius: 10px;
  font-family: Trebuchet MS;
  width: 93%;
  font-size: 5rem;
  height: 80px;
  border: none;
  background-color: #252525;
  color: #fff;
  text-align: right;
}
.topscreen {
  color: cyan;
}
.screen {
  border-radius: 10px;
  border: none;
  background-color: #252525;
  color: #fff;
}
.onscreen {
  width: 50%;
  font-size: 1rem;
  border: none;
  background-color: #252525;
  margin-left: 50px;
  color: rgb(251, 228, 60, 0.6);
  text-align: center;
}
.clcbtn {
  background: rgb(220, 175, 31);
  cursor: pointer;
  border-radius: 30%;
  box-shadow: 1px 1px 1px 1px blue;
  font-family: papyrus;
  font-weight: 900;
  font-size: 250%;
  width: 1.5em;
}

button:hover {
  background-color: #eaeaea;
}

.all-clear {
  width: 1.5em;
  cursor: pointer;
  border-radius: 20%;
  font-family: papyrus;
  font-weight: 900;
  font-size: 250%;
  background-color: #f0595f;
  border-color: #b0353a;
  color: #fff;
}

.all-clear:hover {
  background-color: #f17377;
}

.convert {
  width: 1.5em;
  cursor: pointer;
  border-radius: 20%;
  font-family: papyrus;
  font-weight: 900;
  font-size: 250%;
  background-color: green;
  border-color: #b0353a;
  color: #fff;
}
.convert:hover {
  color: black;
}
.calculator-keys {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  padding: 5px;
  place-content: center;
  place-items: center;
}
	</syle>
	  
    <title>Calculadora Leyendas</title>
	
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
