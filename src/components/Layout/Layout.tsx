import Nav from "./Nav";

interface Layoutprops {
  children: React.ReactNode;
}

function Layout(props: Layoutprops) {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Nav />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
