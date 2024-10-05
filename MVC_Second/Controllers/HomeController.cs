using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using MVC_Second.Models;
using System.Diagnostics;

namespace MVC_Second.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string GetData(string name, int age)
        {
            return $"{name}:{age}";
        }
    }
}
