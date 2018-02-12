package templates;

import java.io.IOException;
import java.io.StringWriter;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.json.JSONObject;

public class GroupCards {

	
	public GroupCards() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getGroupCards() throws IOException {
		  VelocityEngine ve = new VelocityEngine();
	        ve.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
	        ve.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
	        ve.init();
	        	
	        /*  next, get the Template  */
	        Template t = ve.getTemplate( "template/group_card.vm" );
	        /*  create a context and add data */
	        HttpUtils httpUtils = new HttpUtils();
	        String responseData = httpUtils.makeHttpCall("http://127.0.0.1:8080/istar/rest/group/all/3", "GET");
	        VelocityContext context = new VelocityContext();
	        context.put("data", new JSONObject(responseData) );
	        /* now render the template into a StringWriter */
	        StringWriter writer = new StringWriter();
	        t.merge( context, writer );
	        /* show the World */
	        System.out.println( writer.toString() );
	        return writer.toString();
	}
	public String getGroupHeader() throws IOException {
		 VelocityEngine ve = new VelocityEngine();
	        ve.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
	        ve.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
	        ve.init();
	        	
	        /*  next, get the Template  */
	        Template t = ve.getTemplate( "template/group_header.vm" );
	        /*  create a context and add data */
	        HttpUtils httpUtils = new HttpUtils();
	        String responseData = httpUtils.makeHttpCall("http://127.0.0.1:8080/istar/rest/group/all/3", "GET");
	        VelocityContext context = new VelocityContext();
	        context.put("data", new JSONObject(responseData) );
	        /* now render the template into a StringWriter */
	        StringWriter writer = new StringWriter();
	        t.merge( context, writer );
	        /* show the World */
	        System.out.println( writer.toString() );
	        return writer.toString();
		
	}
	
	
	
	
	
}
