using RADiantWebApp.Models.Domain;
using RADiantWebApp.Models.Requests;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace RADiantWebApp.Services
{
    public class UserService
    {
        public List<User> AllRecords()
        {
            using (var conn = GetConnection())
            {
                List<User> userList = null;
                if (conn.State == ConnectionState.Open)
                {
                    using (var cmd = new SqlCommand("User_SelectAll", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                        userList = new List<User>();

                        while (reader.Read())
                        {
                            userList.Add(new User()
                            {
                                user_id = (int)reader["user_id"],
                                first_name = (string)reader["first_name"],
                                last_name = (string)reader["last_name"],
                                email = (string)reader["email"],
                                password = (string)reader["password"],
                                usage_id = (int)reader["usage_id"]
                            });
                        }
                    }
                }
                else
                {
                    badConn();
                }
                return userList;
            }
        }

        public User RecordById(int id)
        {
            using (var conn = GetConnection())
            {
                User user = null;
                if (conn.State == ConnectionState.Open)
                {
                    using (var cmd = new SqlCommand("User_SelectById", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@user_id", id);
                        SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                        if (reader.Read())
                        {
                            user = new User()
                            {
                                user_id = (int)reader["user_id"],
                                first_name = (string)reader["first_name"],
                                last_name = (string)reader["last_name"],
                                email = (string)reader["email"],
                                password = (string)reader["password"],
                                usage_id = (int)reader["usage_id"]
                            };

                        }
                    }
                }
                else
                {
                    badConn();
                }
                return user;
            }
        }

        public int AddRecord(UserAddRequest model)
        {
            using (var conn = GetConnection())
            {
                int id = 0;
                if (conn.State == ConnectionState.Open)
                {
                    using (var cmd = new SqlCommand("User_Create", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@first_name", model.first_name);
                        cmd.Parameters.AddWithValue("@last_name", model.last_name);
                        cmd.Parameters.AddWithValue("@email", model.email);
                        cmd.Parameters.AddWithValue("@password", model.password);
                        cmd.Parameters.AddWithValue("@usage_id", model.usage_id);
                        cmd.Parameters.AddWithValue("@user_Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                        cmd.ExecuteNonQuery();

                        id = (int)cmd.Parameters["@user_id"].Value;
                    }
                }
                else
                {
                    badConn();
                }
                return id;
            }
        }

        public int EditRecord(UserEditRequest model)
        {
            using (var conn = GetConnection())
            {
                int id = 0;
                if (conn.State == ConnectionState.Open)
                {
                    using (var cmd = new SqlCommand("User_Update", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@user_id", model.user_id);
                        cmd.Parameters.AddWithValue("@first_name", model.first_name);
                        cmd.Parameters.AddWithValue("@last_name", model.last_name);
                        cmd.Parameters.AddWithValue("@email", model.email);
                        cmd.Parameters.AddWithValue("@password", model.password);
                        cmd.Parameters.AddWithValue("@usage_id", model.usage_id);

                        cmd.ExecuteNonQuery();

                        id = (int)cmd.Parameters["@user_id"].Value;
                    }
                }
                else
                {
                    badConn();
                }
                return id;
            }
        }

        public int RemoveRecord(int id)
        {
            using (var conn = GetConnection())
            {
                if (conn.State == ConnectionState.Open)
                {
                    using (var cmd = new SqlCommand("User_Delete", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@user_id", id);
                        id = (int)cmd.Parameters["@user_id"].Value;
                        cmd.ExecuteNonQuery();
                    }
                }
                else
                {
                    badConn();
                }
                return id;
            }
        }

        string badConn()
        {
            return "Error: Db Connection failed!!";
        }

        SqlConnection GetConnection()
        {
            var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DbConn"].ConnectionString);
            conn.Open();
            return conn;
        }
    }
}