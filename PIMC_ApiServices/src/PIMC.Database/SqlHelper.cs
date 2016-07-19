using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace PIMC.Database
{
    public class SqlHelper
    {
        static string connectStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        public static DataTable ExecuteSQL(string sql)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");
            DataTable retTable = new DataTable();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataAdapter ada = new SqlDataAdapter(cmd);
            try
            {
                conn.Open();
                ada.Fill(retTable);
                return retTable;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        //To get tables from a stored procedure which includes multiple selects
        public static DataSet ExecuteSQLToDataset(string sql)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");
            DataSet retDataset = new DataSet();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataAdapter ada = new SqlDataAdapter(cmd);
            try
            {
                conn.Open();
                ada.Fill(retDataset);
                return retDataset;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        public static DataRow ExecuteDataRow(string sql)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");
            DataTable retTable = new DataTable();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataAdapter ada = new SqlDataAdapter(cmd);
            try
            {
                conn.Open();
                ada.Fill(retTable);
                if (retTable != null && retTable.Rows.Count > 0)
                    return retTable.Rows[0];
                else
                    return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        public static void ExecuteNonQuery(string sql, int commandTimeout = 0)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");
            DataTable retTable = new DataTable();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);
            try
            {
                conn.Open();
                if (commandTimeout > 0)
                    cmd.CommandTimeout = commandTimeout;
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        public static void ExecuteNonQuery(string sql, List<SqlParameter> parameters, int commandTimeout = 0)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");


            DataTable retTable = new DataTable();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);

            if (parameters != null)
            {
                foreach (var parameter in parameters)
                {
                    cmd.Parameters.AddWithValue(parameter.ParameterName, parameter.Value);
                }
            }

            try
            {
                conn.Open();
                if (commandTimeout > 0)
                    cmd.CommandTimeout = commandTimeout;
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }

        }

        public static object ExecuteScalar(string sql)
        {
            if (connectStr == string.Empty)
                throw new Exception("No connection string is defined. Please specify which SQLServer DB you want to connect.");
            DataTable retTable = new DataTable();
            SqlConnection conn = new SqlConnection(connectStr);
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataAdapter ada = new SqlDataAdapter(cmd);
            try
            {
                conn.Open();
                ada.Fill(retTable);
                if (retTable != null && retTable.Rows.Count > 0)
                    return retTable.Rows[0][0];
                else
                    return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        public static void ExecuteStoredProcedure(string name, SqlParameter[] parameters, bool useTransaction = false)
        {
            SqlConnection conn = new SqlConnection(connectStr);
            SqlTransaction tran = null;
            SqlCommand comm;

            try
            {
                conn.Open();

                if (useTransaction)
                {
                    tran = conn.BeginTransaction();
                    comm = new SqlCommand(name, tran.Connection, tran);
                }
                else
                {
                    comm = new SqlCommand(name, conn);
                }

                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.AddRange(parameters);
                comm.ExecuteNonQuery();

                if (useTransaction)
                {
                    tran.Commit();
                }

            }
            catch (Exception ex)
            {
                if (tran != null)
                {
                    try
                    {
                        tran.Rollback();
                        throw ex;
                    }
                    catch
                    {
                        throw ex;
                    }
                }
            }
            finally
            {
                if (conn != null)
                {
                    conn.Close();
                }
            }
        }
    }
}
