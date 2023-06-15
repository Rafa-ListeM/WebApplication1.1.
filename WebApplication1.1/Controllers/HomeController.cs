using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebApplication1._1_.Models;

namespace WebApplication1._1_.Controllers
{
    public class HomeController : Controller
    {
        private readonly Contexto _dbContext;

        public HomeController(Contexto dbContext)
        {
            _dbContext = dbContext;
        }

        //Action Result devolve uma tela (Html)
        public IActionResult Index()
        {
            return View();
        }

        //Mais uma tela no sistema
        public IActionResult Produto()
        {
            return View();
        }
        public IActionResult Produto2()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastro(Cadastro cadastro)
        {
            if (cadastro.Senha != cadastro.ConfirmSenha)
            {
                // Senha e confirmação de senha não correspondem
                ViewBag.ErrorMessage = "A senha e a confirmação de senha não correspondem.";
                return View();
            }

            // Adicionar o novo cliente à tabela "Customers"
            _dbContext.Cadastro.Add(cadastro);
            _dbContext.SaveChanges();

            // Redirecionar para a página de login ou fazer outra ação
            return RedirectToAction("Pessoa", "Home");
        }

        public IActionResult Login(string Login, string Senha)
        {
            var existingUser = _dbContext.Login.FirstOrDefault(u => u.Email == Login
            && u.Senha == Senha);

            if (existingUser != null)
            {
                // Usuário autenticado com sucesso
                return RedirectToAction("Pessoa", "Home");
            }
            else
            {
                // Autenticação falhou
                ViewBag.ErrorMessage = "Credenciais inválidas.";
                return View();
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }
        
        public IActionResult Pessoa()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}