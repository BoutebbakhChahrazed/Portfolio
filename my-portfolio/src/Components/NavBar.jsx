import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const pages = ["About me", "Projects", "Education", "Experience", "Contact me"];

const sectionIdMap = {
  "About me": "about",
  "Projects": "projects",
  "Education": "education",
  "Experience": "experience",
  "Contact me": "contact",
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (page) => {
    const sectionId = sectionIdMap[page];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleCloseNavMenu();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    const heroElement = document.getElementById("home");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(sectionIdMap);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (page) => sectionIdMap[page] === activeSection;

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(244, 114, 182, 0.15)",
        zIndex: 1100,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "68px" }}>
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            onClick={scrollToTop}
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
            <span className="font-bold text-lg text-gray-900 tracking-tight hover:text-pink-600 transition-colors">
              Chahrazed<span className="text-pink-500">.</span>
            </span>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#374151" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  padding: "6px",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #f3f4f6",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => scrollToSection(page)}
                  sx={{
                    borderRadius: "10px",
                    margin: "2px 0",
                    backgroundColor: isActive(page) ? "#fdf2f8" : "transparent",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: isActive(page) ? 600 : 500,
                      color: isActive(page) ? "#db2777" : "#4b5563",
                      fontSize: "0.9rem",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            component="a"
            href="#home"
            onClick={scrollToTop}
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: "6px",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="font-bold text-base text-gray-900">
              Chahrazed<span className="text-pink-500">.</span>
            </span>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {pages.map((page) => {
              const active = isActive(page);
              return (
                <button
                  key={page}
                  onClick={() => scrollToSection(page)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-pink-50 text-pink-700 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <a
              href="/resume.pdf"
              download="Chahrazed_Boutebbakh_CV.pdf"
              className="ml-4 px-4 py-1.5 rounded-full text-xs font-semibold text-pink-600 border border-pink-200 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all shadow-2xs"
            >
              Download CV
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
