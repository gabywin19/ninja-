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



class Sensei extends Ninja{
    constructor(nombre, salud, velocidad, fuerza, sabiduria){

        super(nombre , salud, velocidad, fuerza);
        this.sabiduria= sabiduria;

    }

    showStats(){
        return(this)
    }

    speaksWindsdom() {
        
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        this.drinkSake();
        
    }
}


const superSensei =  new Sensei ("Master Splinter", 200, 10, 10, 10)
superSensei.speaksWindsdom();
console.log(superSensei.showStats());
