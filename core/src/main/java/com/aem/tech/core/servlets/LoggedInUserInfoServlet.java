

import com.ap.commons.authentication.usermanagement.AuthenticationStatus;
import com.ap.commons.authentication.usermanagement.UserManagementService;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.PrintWriter;

@SlingServlet(path = {"aem/tech/user"}, methods = "POST", extensions = "json", selectors = "details")
public class GetLoggedInUserDetailsServlet extends SlingAllMethodsServlet {
    @Reference
    transient UserManagementService userManagementService;
    private static final Logger LOGGER = LoggerFactory.getLogger(GetLoggedInUserDetailsServlet.class);

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        JSONObject loggedInUserDetails = new JSONObject();
        AuthenticationStatus authenticationStatus = userManagementService.getAuthenticationStatus(request, false);
        if (authenticationStatus.isUserLoggedIn()) {
            try {
                loggedInUserDetails.put("mobileNumber", userManagementService.getUserProfile(request).getMobileNumber());
                loggedInUserDetails.put("email", userManagementService.getUserProfile(request).getEmail());
                loggedInUserDetails.put("name", userManagementService.getUserProfile(request).getGivenName());
            } catch (JSONException e) {
                LOGGER.error("A JSON exception occurred attempting to retrieve the logged in user details: " + e.getMessage());
            }
        }
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(loggedInUserDetails);
        out.close();
    }
}
