package com.shashwat.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

@Path("/hostinfo")
public class HostInfo {
	@GET
	@Produces("application/json")
	public Response getHostName() {
		JSONObject jsonObject = new JSONObject();
		
		String hostName = System.getenv("USERDOMAIN");
		jsonObject.put("Host name", hostName);
		
		String osName = System.getProperty("os.name");
		jsonObject.put("OS name", osName);
		
		String arch = System.getenv("PROCESSOR_ARCHITECTURE");
		jsonObject.put("Architecture", arch);
		
		String noOfProcessor = System.getenv("NUMBER_OF_PROCESSORS");
		jsonObject.put("Number of Processors", noOfProcessor);
		
		return Response.status(200).entity(jsonObject.toString()).build();
	}
}
