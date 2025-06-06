import React from "react";
import { motion } from "framer-motion";

interface HeaderTextInterface {
  title: string;
  description?: string;
  required?: boolean;
  className?: string;
}

const HeaderText = ({
  title,
  description,
  required,
  className,
}: HeaderTextInterface) => {
  return (
    <>
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gradient text-4xl bg-clip-text font-bold">
          {title}
        </h2>

        {required && <div className="h-1 w-24 bg-level mx-auto mb-4"></div>}

        <p
          className={`mt-4 text-lg text-accent max-w-2xl mx-auto ${className}`}
        >
          {description || ""}
        </p>
      </motion.div>
    </>
  );
};

export default HeaderText;
