using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bowling.Data;

public partial class MatchGame
{
    [ForeignKey("MatchId")]
    public int MatchId { get; set; }
    public TourneyMatch Match { get; set; }
    [Key]
    [Required]
    public short GameNumber { get; set; }

    public int? WinningTeamId { get; set; }

}
