

const Footer = () => {
  return (
    <footer className="bg-slate-100 sticky bottom-0 border-t-2 left-0 right-0  text-slate-900 py-2">
      <div className="container mx-auto  px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center  md:text-left">
          {/* <h1 className="text-2xl font-bold">Blogged</h1> */}
          <p className=" text-slate-900">&copy; {new Date().getFullYear()} shareX. All rights reserved.</p>
        </div>
        <div className="flex max-sm:hidden space-x-4 mt-4 md:mt-0">
          <a href="#" className=" text-slate-900 transition duration-300">Privacy Policy</a>
          <a href="#" className=" text-slate-900 transition duration-300">Terms of Service</a>
          <a href="#" className=" text-slate-900 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
