import styles from "./Layout.module.scss";

function Layout({ children }) {
  const { wrapLayout, container } = styles;
  return (
    <main className={wrapLayout}>
      <div className={container}>{children}</div>
    </main>
  );
}

export default Layout;
