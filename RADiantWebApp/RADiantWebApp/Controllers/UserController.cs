using RADiantWebApp.Models.Requests;
using RADiantWebApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RADiantWebApp.Controllers
{
    public class UserController : ApiController
    {
        [RoutePrefix("api/User")]
        public class WorkerController : ApiController
        {
            [HttpGet(), Route("echo")]
            public IHttpActionResult EchoTest()
            {
                return Ok("Echo Success");
            }

            UserService svc = new UserService();

            [HttpGet(), Route()]
            public IHttpActionResult Get()
            {
                var status = svc.AllRecords();
                if (status == null)
                {
                    return BadRequest();
                }
                else
                {
                    return Ok(status);
                }
            }

            [HttpGet(), Route("{id:int}")]
            public IHttpActionResult Get(int id)
            {
                var status = svc.RecordById(id);
                if (status == null)
                {
                    return BadRequest();
                }
                else
                {
                    return Ok(status);
                }
            }

            [HttpPost(), Route()]
            public IHttpActionResult Post(UserAddRequest model)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                else
                {
                    var status = svc.AddRecord(model);
                    return Ok("User " + status + " has been added");
                }
            }

            [HttpPut(), Route("{id:int}")]
            public IHttpActionResult Put(UserEditRequest model)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                else
                {
                    var status = svc.EditRecord(model);
                    return Ok("User " + status + " had been updated");
                }
            }

            [HttpDelete(), Route("{id:int}")]
            public IHttpActionResult Delete(int id)
            {
                var status = svc.RemoveRecord(id);
                if (status == 0)
                {
                    return NotFound();
                }
                else
                {
                    return Ok("User " + status + " has been removed");
                }
            }
        }
    }
}
