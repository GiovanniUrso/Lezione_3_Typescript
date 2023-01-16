// Classi astratte, interfacce, enum, generics
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    return Persona;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(nome, cognome, nomeazienda, dataassunzione) {
        var _this = _super.call(this, nome, cognome) || this;
        _this.nome = nome;
        _this.cognome = cognome;
        _this.nomeazienda = nomeazienda;
        _this.dataassunzione = dataassunzione;
        return _this;
    }
    return Lavoratore;
}(Persona));
var Mesi;
(function (Mesi) {
    Mesi[Mesi["gennaio"] = 0] = "gennaio";
    Mesi[Mesi["febbraio"] = 1] = "febbraio";
    Mesi[Mesi["marzo"] = 2] = "marzo";
    Mesi[Mesi["aprile"] = 3] = "aprile";
})(Mesi || (Mesi = {}));
function eta(anno) {
    return anno;
}
