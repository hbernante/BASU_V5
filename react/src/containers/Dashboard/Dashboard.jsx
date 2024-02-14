import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";
import { useTheme } from "@emotion/react";

function Dashboard() {
  const theme = useTheme();
  return (
    <Box>
      <Typography sx={StyleSheet.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>

        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4,144</Typography>
            <Typography variant="h7"><ColorText> color={} +77</ColorText> <ColorText color='neutral.normal'>in last 28 days</ColorText></Typography>
            <Divider sx={styles.divider} />
            <Typography variant='h6'>Summary</Typography>
            <Typography variant='h9'><ColorText> color={theme.palette.grey[700]}Last 28 Days</ColorText></Typography>

          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: 'flex',
    alignItems: 'center',
    my: 3,
  },
  avatar: {
    width: '30px',
    height: 'auto',
    mr: 1
  },
  postMeta: {
    mr: 1,
    fontSize: '0.8rem',
    color: 'neutral.normal'
  },
  divider: {
    my: 2
  },
  postStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    my: 3
  },
  cardAction: {
    mt: 2
  }
};
