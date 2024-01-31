import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <strong>Frontend Developer</strong>
      <nav>
        <Link href="/next">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
