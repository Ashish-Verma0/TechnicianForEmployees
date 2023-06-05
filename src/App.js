import React, { useEffect, useState } from "react";
import Employe from "./components/employeeSignup/Employee";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ResponsiveDrawer from "./components/sidebar/Sidebar";
import { Box } from "@mui/material";
import EmployeeLogin from "./components/employeeSignup/EmployeeLogin";
const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    return setUser(token);
  }, [user]);

  return (
    <Box sx={{ display: "flex", objectFit: "cover" }}>
      <ResponsiveDrawer />
      <Box sx={{ flexGrow: 1, marginTop: 7 }}>
        <Routes>
          <Route
            exact
            path="/"
            element={user?.length ? <Home /> : <EmployeeLogin />}
          />
          <Route exact path="/signup" element={<Employe />} />
        </Routes>
        {/* <Route exact path="/login" element={<EmployeeLogin />} /> */}
        {/* <Routes>
        <Route exact path="/signup" element={<Employe />} />
      </Routes> */}
      </Box>
    </Box>
  );
};

export default App;
