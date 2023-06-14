using Microsoft.EntityFrameworkCore;
using WebApplication1._1_.Models;

namespace WebApplication1._1_
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> opt) : base(opt) { }
        public DbSet<Login> Login { get; set; }
        public DbSet<Cadastro> Cadastro { get; set; }



        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    // Configure a string de conexão com o SQL Server
        //    optionsBuilder.UseSqlServer("Server=201.55.32.20;Database=Geek ;Id=pw_tarde;Password=aluno123;");
        //}
 
    }
}
