"use client";

import { motion } from "framer-motion";

export default function Screen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="min-h-[100svh] flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
