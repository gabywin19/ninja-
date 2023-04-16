class Ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad= velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        return(this.nombre)
    }
    
    showStats(){
        return(this)
    }

    drinkSake(){
        this.salud += 10;
    }
}

const said = new Ninja('Said', 90, 3,3)
console.log(said.sayName());
console.log(said.showStats());
said.drinkSake();
console.log(said);