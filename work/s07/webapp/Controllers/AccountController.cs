using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]/{number}")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; 
        }

        [HttpGet]
        public string Get(int number)
        {
            var account = AccountService.GetAccount(number);
            if(account==null){
                return "{'Succes' : 'error', 'message' : 'Unable to find requested number in database'}";
            }
            return account.ToString();
        }
    }
}
