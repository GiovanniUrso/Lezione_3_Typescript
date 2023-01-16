// Classi astratte, interfacce, enum, generics


abstract class Persona {
    nome:string;
    cognome:string;
    constructor(nome:string,cognome:string){    //Una classe astratta non può essere istanziata, mi serve per definire proprietà che PUO' avere una classe che eredita da essa
        this.nome = nome;
        this.cognome = cognome
    }
}
interface Dipendente{
    nomeazienda : string; // L'interfaccia è una classe astratta che non può essere istanziata quindi. La classe che IMPLEMENTA un interfaccia DEVE avere tutte le proprietà descritte nell'interfaccia
    dataassunzione:Date;
}

class Lavoratore extends Persona implements Dipendente{
    nome:string;
    cognome:string;
    nomeazienda:string;   // Questa classe EREDITA da una classe astratta e allo stesso tempo IMPLEMENTA un'interfaccia
    dataassunzione :Date;
    constructor(nome:string,cognome:string,nomeazienda:string,dataassunzione:Date){
        super(nome,cognome);
        this.nome = nome;
        this.cognome = cognome;
        this.nomeazienda = nomeazienda;
        this.dataassunzione = dataassunzione;
    }
}

enum Mesi{
    gennaio,
    febbraio,
    marzo,
    aprile
}

function eta <t> (anno:t):t {
    return anno 
}