const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Velocirabbit2. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;