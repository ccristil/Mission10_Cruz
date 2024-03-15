﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Bowling.Data;

public partial class ZtblWeek
{
    [Key]
    [Required]
    public DateOnly WeekStart { get; set; }

    public DateOnly? WeekEnd { get; set; }
}
