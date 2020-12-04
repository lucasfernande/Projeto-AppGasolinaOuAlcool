import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "resultado";

  calcular() {

    if(this.precoAlcool && this.precoGasolina) {
        
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      /* 
        (pAlcool/pGasolina)
        se o resultado for >= 0.7 = usar gasolina
        se não = usar alcool
      */

      var res = pAlcool/pGasolina;

      if(res >= 0.7) {
        this.resultado = "Melhor utilizar gasolina"
      }
      else {
        this.resultado = "Melhor utilizar álcool"
      }
    }
    else {
        this.resultado = "Preencha os campos"
    }

  }

}
