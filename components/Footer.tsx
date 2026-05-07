export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-white-200 text-slate-800 px-20 py-6">
      <div className="text-lg font-bold text-slate-800">
        <span className="font-extrabold">Dusi</span>
        <span>Code</span>
      </div>
      <div className="space-x-4">
        <a href="#" className="hover:underline text-slate-800">Home</a>
          <a href="#" className="hover:underline text-slate-800">Custom Software</a>
          <a href="#" className="hover:underline text-slate-800">Services</a>
          <a href="#" className="hover:underline text-slate-800">Portfolio</a>
          <a href="#" className="hover:underline text-slate-800">About</a>
          <a href="#" className="hover:underline text-slate-800">Blog</a>
          <a href="#" className="hover:underline text-slate-800">Contact</a>
        </div>

      <a href="#" className="hover:underline text-slate-800">Get Started</a>
    </footer>
  );
}