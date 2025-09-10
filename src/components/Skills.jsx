import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { motion } from "framer-motion";
import { Javascript } from "@mui/icons-material";
// Custom Linear Progress
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundColor: "#FFD700", // gold
    ...theme.applyStyles("dark", {
      backgroundColor: "#FFC107",
    }),
  },
}));

// Skills data
const skillsData = [
  { name: "Python", value: 85 },
  { name: "JavaScript", value: 75 },
  { name: "React.js", value: 70 },
  { name: "Data Analysis", value: 80 },
];

// Gambar (taruh di /public/skills/)
const skillImages = [
  "/python.png",
  "/java.png",
  "/react.svg",
  "/technical-support.png",
];

function Skills() {
  return (
    <div className="h-auto bg-gray-900 py-20 px-12" id="skills">
      {/* Title */}
      <motion.h1
        className="text-white font-bold text-6xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Skills list */}
        <Stack spacing={6}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h2 className="text-white text-2xl mb-3">{skill.name}</h2>
              <BorderLinearProgress
                className="w-[500px]"
                variant="determinate"
                value={skill.value}
              />
            </motion.div>
          ))}
        </Stack>

        {/* Images */}
        <div className="grid grid-cols-2 gap-6">
          {skillImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`skill-${index}`}
              className="w-40 h-40 object-contain rounded-xl shadow-lg  p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
