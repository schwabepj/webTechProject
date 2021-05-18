import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

//ProjectName: String, ProjectAddress: String, GeneratedDate: String, CompanyName: String
function Manual() {
    return (
        <Box my={12}>
          <Card my = {2}>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                Getting Started
              </Typography>
              <Box my = {2}>
                <Typography variant = "h5">
                  What is a DataSphere?      
                </Typography>
                <Typography color = "textSecondary">
                While a datasphere is quite simple to use, understanding a few simple concepts will greatly enhance the datasphere experience for an end user. The basic concepts are explained in this section.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                    What Is a Property?    
                </Typography>
                <Typography color = "textSecondary">
                A property is a physical location that could contain equipment or other assets.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                    What Are Property Levels?     
                </Typography>
                <Typography color = "textSecondary">
                  A datasphere organizes properties into a directory using the following levels:
                </Typography>
                <Typography color = "textSecondary">
                Enterprise – a group of properties that are very geographically diverse, such as a corporation with properties located across the nation or globe.
                </Typography>
                <Typography color = "textSecondary">
                Region – a group of properties that are somewhat geographically diverse, such as properties located in an area of the country, a particular state, or a metropolitan area.
                </Typography>
                <Typography color = "textSecondary">
                Complex – a group of properties that share a geographical location, such as an apartment complex, a mall, or a college or corporate campus.
                </Typography>
                <Typography color = "textSecondary">
                Wing – a section of a building that may contain multiple floors, such as the north wing or east tower.
                </Typography>
                <Typography color = "textSecondary">
                Building/Structure – a property that is a stand-alone structure, such as an office building or cell phone tower.
                </Typography>
                <Typography color = "textSecondary">
                Floor – a level or a floor of a structure, such as the basement of a building or the 175-foot level of a cell tower.
                </Typography>
                <Typography color = "textSecondary">
                Apartment/Suite/Segment – a segment of a level or floor, such as a single apartment on the third floor.
                </Typography>
                <Typography color = "textSecondary">
                Room – a single room within an apartment or office suite, such as the bathroom
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  What are Specifications?    
                </Typography>
                <Typography color = "textSecondary">
                A Specification is a descriptive attribute of a property such as a floor finish. As an example, the specification items which describe the floor finishes may include Manufacturer, Color, Pattern, etc.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  What are Systems?    
                </Typography>
                <Typography color = "textSecondary">
                A System is a group of interrelated equipment types (equipment) which comprise a whole unit servicing a common purpose or operation. The standard systems cataloged within a datasphere are Conveyance, Electrical, Life Safety, Mechanical, Plumbing and Thermal/Moisture Protection (Roof). An example is the Electrical System which would be comprised of equipment such as transformers, panels, switchgear and generators.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                What is Equipment?     
                </Typography>
                <Typography color = "textSecondary">
                Equipment are the physical resources used in the operation of a system or the building. A datasphere can contain information about a piece of equipment or resource such as the manufacturer, model number, serial number and specifications.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  What are Contacts?     
                </Typography>
                <Typography color = "textSecondary">
                Contacts are references to people or companies that are associated with the properties or equipment contained in a datasphere. Contact data may include, names, phone numbers, email addresses, etc... Each individual contact is classified by Type and maybe further classified by Scope. For example a contact could have a type of manufacturer and a scope of electrical equipment.
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                What Are Documents?    
                </Typography>
                <Typography color = "textSecondary">
                Documents are references to specific paper or electronic information such as drawings, an Adobe PDF file or a digital photograph that are associated with a specific property, individual piece of equipment or specific model. Each document reference contains a description, category and subcategory data.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
    )
}

export default Manual;