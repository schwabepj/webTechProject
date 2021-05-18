import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

//ProjectName: String, ProjectAddress: String, GeneratedDate: String, CompanyName: String
function Home(props) {
    return (
        <Box my={12}>
          <Card my = {2}>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                Electronic Close-Out Manual
              </Typography>
              <Box my = {2}>
                <Typography variant = "h5">
                  Project Description: Compass Health - St Robert
                </Typography>
                <Typography color = "textSecondary">
                  {props.ProjectName}
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  Project Address: 155 Park Drive, St Robert, MO
                </Typography>
                <Typography color = "textSecondary">
                  {props.ProjectAddress}
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  DataSphere Generated On: 2021-5-18    
                </Typography>
                <Typography color = "textSecondary">
                  {props.GeneratedDate}
                </Typography>
              </Box>
              <Box my = {2}>
                <Typography variant = "h5">
                  Prepared For: Compass Health
                </Typography>
                <Typography color = "textSecondary">
                  {props.CompanyName}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
    )
}

export default Home;
