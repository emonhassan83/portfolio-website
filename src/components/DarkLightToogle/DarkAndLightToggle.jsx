const DarkAndLightToggle = () => {
  return (
    <div className="fixed overflow-x-hidden z-10 bottom-14 sm:bottom-16 md:bottom-4 left-4 text-black text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <p className="cursor-pointer">LIGHT</p> /
        <p className="cursor-pointer">MOODY</p>
      </div>
    </div>
  );
};

export default DarkAndLightToggle;
