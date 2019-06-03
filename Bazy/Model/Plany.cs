using System;

namespace Bazy.Model
{
    public class Plany
    {
        public object Id { get; set; }
        public string  ImieDietetyk { get; set; }
        public string NazwiskoDietetyk { get; set; }
        public string  ImiePacjent { get; set; }
        public string NazwiskoPacjent { get; set; }
        public object Kalorycznosc { get; set; }
        public object Data_stworzenia { get; set; }
        public object Data_wyslania { get; set; }
    }
}