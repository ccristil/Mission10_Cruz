using Bowling.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

namespace Bowling.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;

        public BowlingController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {

            var BowlerData = _bowlingRepository.Bowlers
                .Where(x => x.Team.TeamName == "Sharks" || x.Team.TeamName == "Marlins")
                .ToArray();

            return BowlerData;
        }
    }
}
