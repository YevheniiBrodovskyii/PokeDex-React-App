function Footer() {
  return (
    <footer className="page-footer purple darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Developed by Yevhenii Brodovskyi
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/YevheniiBrodovskyii"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
