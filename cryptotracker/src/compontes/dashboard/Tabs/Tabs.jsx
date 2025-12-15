import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import Gridindex from "../Grid/Gridindex";
import Listindex from "../List/Listindex";

// Define a theme with Poppins font and primary color
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#3a80e9",
    },
  },
});

const tabStyle = {
  color: "var(--white)",
  fontSize: "1.6rem",
  fontWeight: 600,
  fontFamily: "Poppins",
  textTransform: "capitalize",
};

const Tabs = ({ coins }) => {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="tabs"
              variant="fullWidth"
              TabIndicatorProps={{
                style: {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <Tab label="Grid" value="grid" sx={tabStyle} />
              <Tab label="List" value="list" sx={tabStyle} />
            </TabList>
          </Box>
          <TabPanel value="grid">
            <div className="grid-flex">
              {coins.map((coin, i) => (
                <Gridindex coin={coin} key={i} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className="list-table">
              {coins.map((item, i) => (
                <Listindex coin={item} key={i} />
              ))}
            </table>
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
};

export default Tabs;
