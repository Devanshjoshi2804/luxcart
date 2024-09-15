import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header openCart={function (): void {
        throw new Error('Function not implemented.');
      } } />
      {children}
      <Footer />
    </>
  );
};

export default Layout;