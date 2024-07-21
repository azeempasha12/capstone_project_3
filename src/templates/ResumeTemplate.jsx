
import Template1  from "./template1"
import  Template2  from "./template2"
import Template3  from "./template3"
import { Container,Grid,} from "@mui/material"




export default function ResumeTemplatesHomePage(){

    return(
        <div>
      <Container maxWidth="xl" sx={{ marginTop: '80px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Template1 />
          </Grid>
          <Grid item xs={12} md={4}>
            <Template2 />
          </Grid>
          <Grid item xs={12} md={4}>
            <Template3 />
          </Grid>
        </Grid>
      </Container>
        </div>
    )
}