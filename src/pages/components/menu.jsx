import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
        variant="outlined"
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link className="hover:border-b-2" href="http://localhost:3000/">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="hover:border-b-2" href="../about">
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2"
            href="https://www.facebook.com/bekub.bilguun/"
          >
            <li>Facebook</li>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2"
            href="https://www.instagram.com/rimzss/"
          >
            <li>Instagram</li>
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
