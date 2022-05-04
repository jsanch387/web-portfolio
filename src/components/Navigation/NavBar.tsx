import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Grid, Icon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useAppBarStyle from "./AppBar.style";




const ResponsiveAppBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const classes = useAppBarStyle();

  const handleLinkClick = () => {
    mobileMenu && setMobileMenu(false) 
    return;
  }

  const links = [
    <Link
      name="Home"
      to="home"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className={classes.navLinks}
      onClick={handleLinkClick}
    >
      Home
    </Link>,
  
    <Link
      name="About"
      to="about"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className={classes.navLinks}
      onClick={handleLinkClick}
    >
      About
    </Link>,
  
    <Link
      name="Skills"
      to="skills"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className={classes.navLinks}
      onClick={handleLinkClick}
    >
      Skills
    </Link>,
  
    <Link
      name="Contact"
      to="contact"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className={classes.navLinks}
      onClick={handleLinkClick}
    >
      Contact
    </Link>,
  ];

  const breakPoint = 800;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    if(width > breakPoint) {
      setMobileMenu(false);
    }

    return () => window.removeEventListener("resize", handleWindowResize);
  },[width]);


  const handleNavMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <AppBar className={classes.nav}>
      <Grid container className={classes.navItems}>
        <Grid item xs={2}>
          Logo
        </Grid>
        <Grid
          item
          container
          xs={10}
          justifyContent="right"
          columnSpacing={10}
          
        >
          {width > breakPoint ? (
            links.map((link) => {
              return <Grid className={classes.linkContainer} item>{link}</Grid>;
            })
          ) : (
            <Grid item className={classes.menuIcon}>
              <Icon onClick={handleNavMenu}>
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
              </Icon>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container>
        {mobileMenu && width < breakPoint &&(
          <Grid
            className={classes.mobileMenu}
            direction="column"
            alignItems="center"
            item
            container
            rowSpacing={4}
          >
            {links.map((link) => {
              return <Grid item >{link}</Grid>;
            })}
          </Grid>
        )}
      </Grid>
    </AppBar>
  );
};
export default ResponsiveAppBar;
