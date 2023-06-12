import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import Setup from "../Setups/Setup";
import { Button } from "@mui/material";
import Results from "../Results/Results";
const drawerWidth = 255;

export default function ClippedDrawer() {
  const [menuData, setMenuData] = React.useState("setup");

  return (
    <Box sx={{ display: "flex", bgcolor: "#398585 !imporant" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#398585", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0px 20px' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ISCP - Integrated Supply Chain Planning
          </Typography>
        </Toolbar>

        {
          menuData === 'result' ? <p style={{ fontSize: '18px', margin: '0px' }}>ABC/XYZ Analysis</p> : <p style={{ fontSize: '18px', margin: '0px' }}>Segmentation Setup</p>
        }
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#398585",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", bgcolor: "#398585" }}>
          <List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "10px",
                }}
              >
                {/* <InboxIcon /> */}
                <Button
                  sx={{ color: "white" }}
                  onClick={() => setMenuData("setup")}
                >
                  Segmentation Setups
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "10px",
                }}
              >
                {/* <InboxIcon /> */}
                <Button
                  sx={{ color: "white" }}
                  onClick={() => setMenuData("result")}
                >
                  Segmentation Results
                </Button>
              </Box>
            </Box>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {menuData === "setup" && <Setup />}
        {menuData === "result" && <Results />}
      </Box>
    </Box>
  );
}
