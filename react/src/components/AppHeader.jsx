import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function AppHeader({sideNavExpanded, setSideNavExpanded}) {
  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton onClick={() => sideNavExpanded ? setSideNavExpanded(false) : setSideNavExpanded(true)} color="secondary">
          <MenuTwoTone />
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src="/src/assets/sample-logo.png"
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notifications" color="">
          <Badge badgeContent={14} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="">
          <SettingsIcon />
        </IconButton>
        <IconButton title="Signout" color="">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    ml: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
