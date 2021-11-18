class billetes
{
  constructor (v, c)
  { 
     this.valor = v; 
     this.cantidad = c; 
  }
}

var efectivo = [];
efectivo.push (new billetes (50, 3));
efectivo.push (new billetes (20, 2));
efectivo.push (new billetes (10, 2));

function entregarEfectivo ()
{
  for (var bi of efectivo)
  {  
    if(dinero > 0)
    {
      div = Math.floor (dinero/bi.valor);
      if (div > bi.cantidad)
      { 
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push (new billetes (bi.valor, bi.cantidad));
      dinero -= (bi.valor * bi.cantidad);
    }
   
  }
}       



var entregado = [];
var div = 0;
var dinero;
var t = document.getElementById("heart");
t.addEventListener("click", entregarEfectivo);

var o = document.getElementById("ojo");
var lienzo = o.getContext("2d");

document.addEventListener("keydown", instrucciones);

function instrucciones (evento)
{
   console.log(evento);
}

function dibujarLinea (color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.lineWidth = 2;
  lienzo.stroke (); 
  lienzo.closePath();
}