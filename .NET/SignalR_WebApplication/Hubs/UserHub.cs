using Microsoft.AspNetCore.SignalR;
using Microsoft.CodeAnalysis.CSharp;

namespace SignalR_WebApplication.Hubs
{
    public class UserHub: Hub
    {
        public static int TotalViews { get; set; } = 0;
        public async Task NewWindowLoaded()
        {
            TotalViews++;
            // send update to all client that total views have been updated
            await Clients.All.SendAsync("updateTotalViews",TotalViews);
        }
    }
}
