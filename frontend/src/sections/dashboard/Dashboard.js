import  React , {useState , useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../redux/auth/authSlice";

const drawerWidth = 240;

const Dashboard = () => {

  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/csscolornames/colors');
    const json = await resp.json();
    setData(json);
  }
  useEffect(() => {
    getData();
  }, []);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();

  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={handleLogOut}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="md">
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
          >
            Welcome to the Dashboard 
          </Typography>
          <Typography
            variant="p"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Check Color Names from Sample API
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell> Color Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { data.length && data?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
