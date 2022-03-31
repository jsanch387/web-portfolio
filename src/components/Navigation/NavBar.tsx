import { Grid } from "@mui/material";
import { Link } from 'react-scroll';

import useNavBarStyles from "./NavBar.style";

const NavBar = (): JSX.Element => {
  const classes = useNavBarStyles();
  return (
    <header>
      <nav className={classes.nav}>
        <Grid container>
          <Grid item xs={3}>
            <h1 className={classes.logo}>JS</h1>
          </Grid>
          <Grid item container xs={9} justifyContent="end">
            <ul className={classes.linksContainer}>
              <li>
                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Me</Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
};

export default NavBar;
