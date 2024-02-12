import { useTheme } from "@emotion/react";
import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

function SideNav({ sideNavExpanded }) {
  const theme = useTheme();
  return (
    <Sidebar
      collapsed={!sideNavExpanded}
      toggled={sideNavExpanded}
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      //backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Avatar Name"
          src="src/assets/avatars/sample-avatar.jpg"
        />
        {sideNavExpanded ? (
          <Typography variant="body2" sx={styles.yourChannel}>
            Your Channel
          </Typography>
        ) : null}
        {sideNavExpanded ? (
          <Typography variant="overline">Channel Name</Typography>
        ) : null}
      </Box>
      <Menu>
        <MenuItem active icon={<DashboardOutlined />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceOutlined />}>
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem active icon={<AnalyticsOutlined />}>
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<StyleOutlined />}>
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 1,
  },
};

export default SideNav;
