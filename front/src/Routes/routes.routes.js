import App from "../App";
import Cart from "../Components/Cart/Cart";
import Dashboard from "../Components/Dashboard/Dashboard";
import Products from "../Components/Products/Products";

export const routes = [
  {
    path: "/",
    name: "IndexHomePage",
    element: Dashboard,
  },
  {
    path: "/products",
    nombre: "Productos",
    element: Products,
  },
  {
    path: "/cart",
    nombre: "Cart",
    element: Cart
  }
];
