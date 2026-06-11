const Header = ({ children }) => {
  return (
    <div className="border-border-light bg-neutral-white sticky top-0 z-50 rounded-b-3xl border-b px-4 pt-5 pb-4 shadow-sm">
      <header className="mb-4 text-center">
        <h1 className="text-brand-primary text-xl font-bold tracking-tight">Blacklist</h1>
        <p className="text-neutral-gray-base mt-0.5 text-xs font-bold tracking-wider uppercase">
          Rentcar Kalselteng
        </p>
      </header>

      {children}
    </div>
  );
};

export default Header;
