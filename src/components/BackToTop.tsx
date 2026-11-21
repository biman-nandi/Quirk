'use client'

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      aria-label="Back to the top"
      onClick={scrollToTop}
      className="text-sm inline cursor-pointer"
    >
      BACK TO THE TOP
      <span className="text-xl">↑</span>
    </button>
  );
};