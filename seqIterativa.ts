seqIterativaForcaBruta()
  {
    let n: number;
    let contN: number = 20;
    let cont: number;
    let maiorContador: number = 1;
    let maiorInteiro: number = 0;

    while (contN > 0)
    {
      cont = 1;
      n = contN;
      //console.log("Novo Ciclo")
      while (n > 1)
      {

        if ((n % 2) == 0)
        {
          //console.log("par")
          console.log(n + "->" + (n / 2));
          n = (n / 2);
        }
        else
        {
          //console.log("impar")
          console.log(n + "->" + ((3 * n) + 1));
          n = ((3 * n) + 1);
        }
        cont++;
      }
      console.log("Ciclo: "+contN+" - Total Sequencia do Ciclo:" + cont);
      if (cont > maiorContador)
      {
        maiorContador = cont;
        maiorInteiro = contN;
      }
      contN--;
    }
    console.log("Numero de maior Sequencia " + maiorInteiro);
    console.log("Maior Sequencia " + maiorContador);
  }
