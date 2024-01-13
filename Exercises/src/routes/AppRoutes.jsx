import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import BitcoinRates from "../components/BitcoinRates";
import LoginPage from "../pages/Loginpage";

//special component containing all the possible routes for the app
// any props passed into AppRoutes will also pass onto child components using {...props}

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="login" element={<LoginPage {...props} />} />
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      <Route path="bitcoin" element={<BitcoinRates {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
