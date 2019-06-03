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
    public class DietetykController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Dietetyk>>> Get()
        {
            var results = new List<Dietetyk>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                SQLiteCommand command2 = new SQLiteCommand($"Select * from Dietetyk", connection);
                SQLiteDataReader reader = command2.ExecuteReader();
                while (reader.Read())
                {
                    results.Add(new Dietetyk()
                    {
                        Id = reader[0],
                        Imie = reader[1] as string,
                        Nazwisko = reader[2] as string,
                        Mail = reader[3] as string,
                        Telefon = reader[4] as string


                    });
                }
            }

            return results;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Dietetyk>>> Get(int id)
        {
            var results = new List<Dietetyk>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                SQLiteCommand command2 = new SQLiteCommand($"Select * from Dietetyk Where id = {id}", connection);
                
                SQLiteDataReader reader = command2.ExecuteReader();
                while (reader.Read())
                {
                    results.Add(new Dietetyk()
                    {
                        Id = reader[0],
                        Imie = reader[1] as string,
                        Nazwisko = reader[2] as string,
                        Mail = reader[3] as string,
                        Telefon = reader[4] as string


                    });
                }
                connection.Close();
            }

            return results;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(Dietetyk dietetyk)
        {
            var results = new List<Dietetyk>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command2 = new SQLiteCommand($"INSERT INTO Dietetyk (Imie, Nazwisko, Mail, Telefon) VALUES ('{dietetyk.Imie}', '{dietetyk.Nazwisko}', '{dietetyk.Mail}', '{dietetyk.Telefon}' )", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201,results);
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put(Dietetyk dietetyk)
        {
        
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command = new SQLiteCommand($"UPDATE Dietetyk SET Imie='{dietetyk.Imie}', Nazwisko='{dietetyk.Nazwisko}', Mail='{dietetyk.Mail}', Telefon='{dietetyk.Telefon}' WHERE id = {dietetyk.Id}", connection);
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
            var results = new List<Dietetyk>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {

                SQLiteCommand command2 = new SQLiteCommand($"DELETE FROM Dietetyk Where id = {id}", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }
    }
}
