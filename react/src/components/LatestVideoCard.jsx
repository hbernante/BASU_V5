import { Box, Card, CardContent, Typography } from "@mui/material";

function LatestVideoCard(props) {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">Card Title Description</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src="src/assets/avatars/sample-avatar.jpg"
          >
          </Box>
          <Typography sx={styles.latestVideoTitle}>
            React Searchbar Description
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.latestVideoTimeLabel}> First 6 Hours</Typography>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant="h7">Views</Typography>
            <Typography variant="h7">225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant="h7">Watchtime</Typography>
            <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant="h7">Likes</Typography>
            <Typography variant="h7">23</Typography>
        </Box>

        <Typography sx={styles.cardAction} variant='link'>Go to Video Analytics</Typography>
        <Typography sx={styles.cardAction} variant='link'>See Comments</Typography>
      </CardContent>
    </Card>
  );
}

export default LatestVideoCard;

/** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative",
  },
  latestVideoThumbnail: {
    width: "100%",
    mt: 1,
    filter: "brightness(20%)",
    display: "block",
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    color: "white",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    mb: 2,
  },
  latestVideoTimeLabel: {
    color: 'neutral.normal',
    mt: 2
  },
  latestVideoStatsRow: {
    display:  'flex',
    justifyContent: 'space-between',
    mt: 2
  },
  cardAction: {
    mt: 2
  },
};
