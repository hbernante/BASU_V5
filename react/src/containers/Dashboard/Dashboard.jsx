import { Box, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";

function Dashboard() {
  return <Box>
    <Typography sx={StyleSheet.pageTitle} variant='h5'>
      Channel Dashboard
    </Typography>
    <Box sx={styles.columnsContainer}>
    <LatestVideoCard sx={styles.item} />
    </Box>
  </Box>;
}

export default Dashboard;


/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2
  },
  columnsContainer: {
    columns: '280px 3',
    maxWidth: 1400
  },
  item: {
    mb: 2
  }
};