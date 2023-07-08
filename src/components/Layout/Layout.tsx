import Footer from "./Footer";
import Nav from "./Nav";
import { Layoutprops } from "./types";

function Layout(props: Layoutprops) {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
