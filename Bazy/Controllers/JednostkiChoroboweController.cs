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
    public class JednostkiChoroboweController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<JednostkiChorobowe>>> Get()
        {
            var results = new List<JednostkiChorobowe>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                await connection.OpenAsync();
                SQLiteCommand command2 = new SQLiteCommand($"Select * from JednostkiChorobowe", connection);
                SQLiteDataReader reader = command2.ExecuteReader();
                while (reader.Read())
                {
                    results.Add(new JednostkiChorobowe()
                    {
                        Id = reader[0],
                        Choroba = reader[1] as string
                    });
                }
            }

            return results;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(JednostkiChorobowe jednostkaChorobowa)
        {
            var results = new List<JednostkiChorobowe>();
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command2 = new SQLiteCommand($"INSERT INTO JednostkiChorobowe (Choroba) VALUES ('{jednostkaChorobowa.Choroba}')", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201,results);
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put(JednostkiChorobowe jednostkaChorobowa)
        {
        
            var connectionString = "Data Source=D:\\bazy\\Bazy\\ff.db";
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                
                SQLiteCommand command = new SQLiteCommand($"UPDATE JednostkiChorobowe SET Choroba='{jednostkaChorobowa.Choroba}' WHERE id = {jednostkaChorobowa.Id}", connection);
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

                SQLiteCommand command2 = new SQLiteCommand($"DELETE FROM JednostkiChorobowe Where Id = {id}", connection);
                await connection.OpenAsync();
                command2.ExecuteNonQuery();
                connection.Close();
            }

            return StatusCode(201);
        }
    }
}
