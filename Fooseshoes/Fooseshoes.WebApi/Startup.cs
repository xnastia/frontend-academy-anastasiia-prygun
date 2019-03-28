using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Fooseshoes.WebApi.Startup))]
namespace Fooseshoes.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
          
        }
    }
}
