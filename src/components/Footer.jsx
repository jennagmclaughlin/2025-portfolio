export const Footer = () => {
  return (
    <footer className="bg-footer relative z-1">
      <div className="container py-3 md:py-5">
        <p className="text-center">
          © {new Date().getFullYear()} Jenna McLaughlin.
        </p>
      </div>
    </footer>
  );
};
