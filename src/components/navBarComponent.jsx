import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import '../styles/navBarComponent.css'

export const NavBarComponent = () => {
  const { shoppingList } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          HiperCompras
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link active" aria-current="page">
              Products
            </NavLink>
            <div className="navbar-nav">
              <NavLink
                to="/carrito"
                className="nav-link active"
                aria-current="page"
              >
                Carrito
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink className='cart-icon' to="/carrito">
          <Badge badgeContent={shoppingList.length} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};
