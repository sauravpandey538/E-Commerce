import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Flex, Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
};
// library sucks
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProductImageSlider = ({ mainImage }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = [
    mainImage,
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box height="400px" minW="xs" overflow="hidden">
      <Flex
        justifyContent="center"
        height="100%"
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : "center"}
      >
        {!isMobile && (
          <Box
            onClick={() => paginate(-1)}
            zIndex={2}
            cursor="pointer"
            color="black"
            paddingRight="10px"
          >
            <Icon as={GrFormPreviousLink} boxSize={10} />
          </Box>
        )}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.5 },
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <motion.img
              src={images[imageIndex]}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
          </motion.div>
        </AnimatePresence>
        {!isMobile && (
          <Box
            onClick={() => paginate(1)}
            zIndex={2}
            cursor="pointer"
            color="black"
            padding="10px"
          >
            <Icon as={GrFormNextLink} boxSize={10} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default ProductImageSlider;
