import Footer from "./Footer";
import Nav from "./Nav";

interface Layoutprops {
  children: React.ReactNode;
}

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
