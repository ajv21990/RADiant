using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RADiantWebApp.Models.Domain
{
    public class User
    {
        public int user_id { get; set; }

        [Required(ErrorMessage = "Enter a value for first name")]
        [StringLength(50)]
        public string first_name { get; set; }

        [Required(ErrorMessage = "Enter a value for last name")]
        [StringLength(50)]
        public string last_name { get; set; }

        [Required(ErrorMessage = "Enter a value for email address")]
        [StringLength(128)]
        public string email { get; set; }

        [Required(ErrorMessage = "Enter a value for password")]
        [StringLength(50)]
        public string password { get; set; }

        public int usage_id { get; set; }
    }
}