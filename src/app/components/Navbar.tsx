import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <>
        <Link style={{color:"white", fontFamily:"timeroman"}}href="#">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white", fontFamily:"timeroman"}}href="#education">Education</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white", fontFamily:"timeroman"}}href="#project">Projects</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white", fontFamily:"timeroman"}}href="#contact">Contact</Link>
      </>
    </nav>
  );
}
