using Microsoft.AspNetCore.Mvc;

namespace WebApplication1._1_.Controllers
{
    public class UsuariosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Cadastro()
        {
            return View();
        }
    }

}
