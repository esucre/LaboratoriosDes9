const APP = {
    data: {},
    methods: {
      init() {  
          var n1 = 5, n2 =4;
          let val1 = "hola ", val2 = "como estas"
          const c1 = "a",c2 = NaN;
          console.log(` Suma :  ${this.suma(n1,n2)}`);
          console.log(` Resta :  ${this.resta(n1,n2)}`);
          console.log(` Multiplicacion :  ${this.multiplicacion(n1,n2)}`);
          console.log(` Division :  ${this.division(n1,n2)}`);
          console.log(` Concatenacion : ${this.concatenacion(val1,val2)}`);
          const data = this.tipodato(c1,c2);
          console.log(` Tipo de dato :  variable 1 : ${data.dato1}, variable 2 : ${data.dato2}`);
          let objeto = this.objetos();
          console.log(`Objetos con sus llaves y valores \
          \nEntero : ${objeto.entero}\n String : ${objeto.str}\nBooleano : ${objeto.bol}\nObjeto : ${objeto.objc}`);

      },
      suma(n1,n2) {
        return (n1+n2);
      },
      resta(n1,n2) {
        return (n1-n2);
      },
      multiplicacion(n1,n2) {
        return (n1*n2);
      },
      division(n1,n2) {
        return (n1/n2);
      },
      concatenacion(val1,val2){
        return (val1+val2);
      },
      tipodato(c1,c2){
        return(datos = {
          dato1 : typeof(c1),
          dato2 : typeof(c2),
        });
      },
      objetos(){
        return (obj = {
          entero : typeof(1),
          str : typeof("a"),
          bol : typeof(true),
          objc : typeof(ob = {}),
        });
      },
    }
  };
  
  APP.methods.init();