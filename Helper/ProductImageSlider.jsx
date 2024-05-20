import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Flex, Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProductImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box height="400px" minW={"xs"}>
        <Flex
          justifyContent="center"
          height="100%"
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "center"} // Center vertically on mobile
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
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
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
    </>
  );
};

export default ProductImageSlider;
