using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1._1_.Models;

namespace WebApplication1._1_.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
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

        public IActionResult Login()
        {
            return View();
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