using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;
using Bazy.Model;
using Microsoft.AspNetCore.Mvc;


namespace Bazy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanyController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Plany>>> Get()
        {
            var results = new List<Plany>();
            var x = new List<object>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                
                SQLiteCommand command2 = new SQLiteCommand($"Select Plany.id, Pacjent.Imie, Pacjent.Nazwisko, Dietetyk.Imie, Dietetyk.Nazwisko, Plany.Kalorycznosc, Plany.Data_Stworzenia, Data_wysłania from Plany INNER JOIN Dietetyk ON Plany.Id_Dietetyk = Dietetyk.id INNER JOIN Pacjent ON Plany.Id_Pacjent = Pacjent.id", connection);
                SQLiteCommand command = new SQLiteCommand($"SELECT DISTINCT Id_pacjenta from ChorobyPacjenta ", connection);
           
                SQLiteDataReader reader = command2.ExecuteReader();
         
                while (reader.Read())
                {
                    results.Add(new Plany()
                    {
                        Id = reader[0],
                        ImiePacjent = reader[1] as string,
                        NazwiskoPacjent = reader[2] as string,
                        ImieDietetyk = reader[3] as string,
                        NazwiskoDietetyk = reader[4] as string,
                        Kalorycznosc = reader[5],
                        Data_stworzenia = Convert.ToDateTime(reader[6]).ToString("yyyy-MM-dd"),
                        Data_wyslania = Convert.ToDateTime(reader[6]).ToString("yyyy-MM-dd")
                    }
                );
                }

            }

            return results;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(Plany plan)
        {
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            object id_pacjent = 0;
            object id_dietetyk = 0;
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                 SQLiteCommand commandPacjent = new SQLiteCommand($"Select id from Pacjent Where Imie = '{plan.ImiePacjent}' AND Nazwisko = '{plan.NazwiskoPacjent}'", connection);
                 SQLiteCommand commandDietetyk = new SQLiteCommand($"Select id from Dietetyk Where Imie = '{plan.ImieDietetyk}' AND Nazwisko = '{plan.NazwiskoDietetyk}'", connection);
                
                await connection.OpenAsync();
                SQLiteDataReader readerPacjent = commandPacjent.ExecuteReader();
                SQLiteDataReader readerDietetyk = commandDietetyk.ExecuteReader();
                
                while (readerPacjent.Read())
                {
                    id_pacjent= readerPacjent[0];
                }
                while (readerDietetyk.Read()) {
                    id_dietetyk = readerDietetyk[0];
                }
                SQLiteCommand command2 = new SQLiteCommand($"INSERT INTO Plany (Id_dietetyk, Id_Pacjent, Kalorycznosc, Data_stworzenia, Data_wysłania) VALUES ('{id_dietetyk}', '{id_pacjent}', '{plan.Kalorycznosc}', '{plan.Data_stworzenia}', '{plan.Data_wyslania}')", connection);
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put(Plany plan)
        {
            object id_pacjent = 0;
            object id_dietetyk = 0;
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                 SQLiteCommand commandPacjent = new SQLiteCommand($"Select id from Pacjent Where Imie = '{plan.ImiePacjent}' AND Nazwisko = '{plan.NazwiskoPacjent}'", connection);
                 SQLiteCommand commandDietetyk = new SQLiteCommand($"Select id from Dietetyk Where Imie = '{plan.ImieDietetyk}' AND Nazwisko = '{plan.NazwiskoDietetyk}'", connection);
                
                await connection.OpenAsync();
                SQLiteDataReader readerPacjent = commandPacjent.ExecuteReader();
                SQLiteDataReader readerDietetyk = commandDietetyk.ExecuteReader();
                
                while (readerPacjent.Read())
                {
                    id_pacjent= readerPacjent[0];
                }
                while (readerDietetyk.Read()) {
                    id_dietetyk = readerDietetyk[0];
                }

                SQLiteCommand command = new SQLiteCommand($"UPDATE Plany SET Id_Dietetyk='{id_dietetyk}', Kalorycznosc='{plan.Kalorycznosc}', Data_stworzenia='{plan.Data_stworzenia}', Data_wysłania='{plan.Data_wyslania}' WHERE id = '{plan.Id}'", connection);
                command.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var results = new List<Dietetyk>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {

                SQLiteCommand command2 = new SQLiteCommand($"DELETE FROM Plany Where id= {id}", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }
    }
}