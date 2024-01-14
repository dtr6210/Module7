import { NavLink } from "react-router-dom";
import { AppBar, Box, Typography, Button } from "@mui/material";
import { Toolbar } from "@mui/material";

// export default function NavBar() {
//   return (
//     <nav className="NavBar">
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/login">Login</NavLink>
//         </li>
//         <li>
//           <NavLink to="/bitcoin">Bitcoin Rates</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// to include AppBar from MUI
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#991E00" }}>
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={NavLink} to="/bitcoin">
            Bitcoin-Rates
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
