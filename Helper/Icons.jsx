import React from "react";
import { motion } from "framer-motion";
// import { Link } from "@chakra-ui/react";
function Icons({ name: IconComponent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      style={{ width: "auto", height: "auto", fontSize: "25px" }}
    >
      <IconComponent style={{ color: "black" }} />
    </motion.div>
  );
}

export default Icons;
