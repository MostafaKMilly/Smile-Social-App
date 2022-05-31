import React from "react";
import Rightbar from './Rightbar'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Add from './Add'
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

const postPage = () => {
  
    return (
     <>
     <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
          <Feed />
          {/* <Rightbar /> */}
        </Stack>
        <Add />
   
     </>
      
    )
};

export default postPage;
