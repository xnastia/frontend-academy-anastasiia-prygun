using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Fooseshoes.WebApi.Controllers
{
    public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
            base.OnActionExecuting(filterContext);
        }
    }
    public class data
    {
        public string email { get; set; }
    }
    [AllowCrossSiteJson]
    public class HomeController : Controller
    {
       
        [HttpPost]
        public ActionResult Create(FormCollection formData)
        {
            var email = formData.Get("email");
            if (!string.IsNullOrEmpty(email))
            {
                string path = Server.MapPath("~/App_Data/users_email.json");
                List <data> _data;
                try
                {
                    using (System.IO.StreamReader r = new System.IO.StreamReader(path))
                    {
                        string json_data = r.ReadToEnd();
                        _data = JsonConvert.DeserializeObject<List<data>>(json_data);
                    }
                }
                catch (Exception ex)
                {
                    _data = new List<data>();
                }


                _data.Add(new data()
                {

                    email = email
                });

                string json = JsonConvert.SerializeObject(_data.ToArray());

                //write string to file
                System.IO.File.WriteAllText(path, json);
            }
            return Content("ok");
        }        
    }
}