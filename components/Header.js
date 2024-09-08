import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex items-center justify-end py-4 px-4 w-full">
      <motion.button
        className="px-4 py-2 bg-sky-400 text-white rounded-md font-semibold uppercase"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileHover={{ scale: 1.05 }}
      >
        {theme === "light" ? "Dark" : "Light"}
      </motion.button>
    </header>
  );
};

export default Header;