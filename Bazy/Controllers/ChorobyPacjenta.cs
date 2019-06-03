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
    public class ChorobyPacjentaController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<ChorobyPacjenta>>> Get()
        {
            var results = new List<ChorobyPacjenta>();
            var x = new List<object>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                
                SQLiteCommand command2 = new SQLiteCommand($"Select ChorobyPacjenta.id, Pacjent.Imie, Pacjent.Nazwisko, JednostkiChorobowe.Choroba from ChorobyPacjenta INNER JOIN Pacjent ON ChorobyPacjenta.Id_pacjenta = Pacjent.id INNER JOIN JednostkiChorobowe ON ChorobyPacjenta.Id_jednostki = JednostkiChorobowe.Id", connection);
                SQLiteCommand command = new SQLiteCommand($"SELECT DISTINCT Id_pacjenta from ChorobyPacjenta ", connection);
                SQLiteDataReader reader2 = command.ExecuteReader();
                while(reader2.Read()) {
                    x.Add(reader2[0]);
                }
                SQLiteDataReader reader = command2.ExecuteReader();
                foreach(var xx in x) {

                }
                while (reader.Read())
                {
                    results.Add(new ChorobyPacjenta()
                    {
                        Id = reader[0],
                        Imie = reader[1] as string,
                        Nazwisko = reader[2] as string,
                        Choroba = reader[3] as string
                    });
                }
               

            }

            return results;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(ChorobyPacjenta Choroba)
        {
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            object id_pacjent = 0;
            object id_choroba = 0;
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                 SQLiteCommand commandPacjent = new SQLiteCommand($"Select id from Pacjent Where Imie = '{Choroba.Imie}' AND Nazwisko = '{Choroba.Nazwisko}'", connection);
                 SQLiteCommand commandJednostka = new SQLiteCommand($"Select Id from JednostkiChorobowe Where Choroba = '{Choroba.Choroba}'", connection);
                
                await connection.OpenAsync();
                SQLiteDataReader readerPacjent = commandPacjent.ExecuteReader();
                SQLiteDataReader readerJednostka = commandJednostka.ExecuteReader();
                
                while (readerPacjent.Read())
                {
                    id_pacjent= readerPacjent[0];
                }
                while (readerJednostka.Read()) {
                    id_choroba = readerJednostka[0];
                }
                SQLiteCommand command2 = new SQLiteCommand($"INSERT INTO ChorobyPacjenta (Id_pacjenta, Id_jednostki) VALUES ('{id_pacjent}', '{id_choroba}')", connection);
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put(ChorobyPacjenta Choroba)
        {
            object id_pacjent = 0;
            object id_choroba = 0;
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                SQLiteCommand commandPacjent = new SQLiteCommand($"Select id from Pacjent Where Imie = '{Choroba.Imie}' AND Nazwisko = '{Choroba.Nazwisko}'", connection);
                SQLiteCommand commandJednostka = new SQLiteCommand($"Select Id from JednostkiChorobowe Where Choroba = '{Choroba.Choroba}'", connection);
                
                await connection.OpenAsync();
                SQLiteDataReader readerPacjent = commandPacjent.ExecuteReader();
                SQLiteDataReader readerJednostka = commandJednostka.ExecuteReader();
                
                while (readerPacjent.Read())
                {
                    id_pacjent= readerPacjent[0];
                }
                while (readerJednostka.Read()) {
                    id_choroba = readerJednostka[0];
                }

                SQLiteCommand command = new SQLiteCommand($"UPDATE ChorobyPacjenta SET Id_jednostki='{id_choroba}' WHERE id = '{Choroba.Id}'", connection);
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

                SQLiteCommand command2 = new SQLiteCommand($"DELETE FROM ChorobyPacjenta Where id= {id}", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }
    }
}