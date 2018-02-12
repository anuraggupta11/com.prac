package templates;

 
import java.io.IOException;
import java.io.StringWriter;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.json.JSONObject;

public class GroupDetail {
	
	public GroupDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getGroupDetail() throws IOException {
		VelocityEngine engine=new VelocityEngine();
		engine.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
		engine.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
		engine.init();
		
		 Template t = engine.getTemplate( "template/group_card.vm" );
		  HttpUtils httpUtils = new HttpUtils();
		 String responseData = httpUtils.makeHttpCall("http://127.0.0.1:8080/istar/rest/group/details/5300", "GET");
		 VelocityContext context = new VelocityContext();
		 context.put("data", new JSONObject(responseData) );
		 StringWriter writer = new StringWriter();
	     t.merge( context, writer );
	        /* show the World */
	        System.out.println( writer.toString() );
	        return writer.toString();
	}

}
