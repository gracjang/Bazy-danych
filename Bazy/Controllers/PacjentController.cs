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
    public class PacjentController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Pacjent>>> Get()
        {
            var results = new List<Pacjent>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                SQLiteCommand command2 = new SQLiteCommand($"Select * from Pacjent", connection);
                SQLiteDataReader reader = command2.ExecuteReader();
                while (reader.Read())
                {
                    results.Add(new Pacjent()
                    {
                        Id = reader[0],
                        Imie = reader[1] as string,
                        Nazwisko = reader[2] as string,
                        Telefon = reader[3] as string,
                        Mail = reader[4] as string,
                        Cel = reader[5] as string
                    });
                }
            }

            return results;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pacjent>>> Get(int id)
        {
            var results = new List<Pacjent>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                SQLiteCommand command2 = new SQLiteCommand($"Select * from Pacjent Where id = {id}", connection);
                
                SQLiteDataReader reader = command2.ExecuteReader();
                while (reader.Read())
                {
                    results.Add(new Pacjent()
                    {
                        Id = reader[0],
                        Imie = reader[1] as string,
                        Nazwisko = reader[2] as string,
                        Telefon = reader[3] as string,
                        Mail = reader[4] as string,
                        Cel = reader[5] as string


                    });
                }
                connection.Close();
            }

            return results;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(Pacjent pacjent)
        {
            var results = new List<Pacjent>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command2 = new SQLiteCommand($"INSERT INTO Pacjent (Imie, Nazwisko, Mail, Telefon, Cel) VALUES ('{pacjent.Imie}', '{pacjent.Nazwisko}', '{pacjent.Mail}', '{pacjent.Telefon}', '{pacjent.Cel}' )", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201,results);
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put(Pacjent pacjent)
        {
        
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command = new SQLiteCommand($"UPDATE Pacjent SET Imie='{pacjent.Imie}', Nazwisko='{pacjent.Nazwisko}', Mail='{pacjent.Mail}', Telefon='{pacjent.Telefon}', Cel='{pacjent.Cel}' WHERE id = {pacjent.Id}", connection);
                await connection.OpenAsync();
                command.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var results = new List<Pacjent>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {

                SQLiteCommand command2 = new SQLiteCommand($"DELETE FROM Pacjent Where id = {id}", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }
    }
}
