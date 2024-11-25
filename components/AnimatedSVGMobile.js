import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';

const montserrat = Montserrat({ 
    subsets: ['latin'],
    weight: ['900'],
    variable: '--font-montserrat'
  });

const AnimatedSVGMobile = () => {
    const [dimensions, setDimensions] = useState({ width: 1400, height: 700 });

    useEffect(() => {
        const updateDimensions = () => {
          if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width <= 640) { // Mobile
              setDimensions({ width: width * 0.95, height: width * 0.95 });
            } else if (width <= 768) { // Tablet
              setDimensions({ width: width * 0.85, height: width * 0.7 });
            } else if (width <= 1024) { // Small laptop
              setDimensions({ width: width * 0.8, height: width * 0.6 });
            } else { // Desktop
              setDimensions({ width: 1400, height: 700 });
            }
          }
        };
    
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
      }, []);
    
      // Calcular el escalado del texto basado en el ancho
      const getFontSize = () => {
        const width = dimensions.width;
        if (width <= 640) return "40"; // Mobile
        if (width <= 768) return "60"; // Tablet
        if (width <= 1024) return "80"; // Small laptop
        return "130"; // Desktop
      };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 1000 1000"
      width={dimensions.width}
      height={dimensions.height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
        display: 'block'
      }}
    >
      <defs>
        <linearGradient
          id="Degradado_sin_nombre_17"
          x1="176"
          y1="905.25"
          x2="906.5"
          y2="174.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset=".1" stopColor="#d5d5d5" />
          <stop offset=".2" stopColor="#b0b0b0" />
          <stop offset=".29" stopColor="#959595" />
          <stop offset=".38" stopColor="#858585" />
          <stop offset=".44" stopColor="gray" />
          <stop offset=".51" stopColor="#898989" />
          <stop offset=".62" stopColor="#a2a2a2" />
          <stop offset=".75" stopColor="#cbcbcb" />
          <stop offset=".9" stopColor="#fff" />
        </linearGradient>
      </defs>

      <motion.g 
        id="englobante" 
        initial={{ y: -440, x: -50, scale: 0.4 }}
      >
      <motion.g id="Marco" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <path
          fill="url(#Degradado_sin_nombre_17)"
          d="M541.25,25C255.12,25,23.17,255.57,23.17,540s231.95,515,518.08,515,518.08-230.57,518.08-515S827.38,25,541.25,25ZM542.99,1016.71c-263.12,0-476.42-213.35-476.42-476.52S279.87,63.67,542.99,63.67s476.42,213.35,476.42,476.52-213.3,476.52-476.42,476.52Z"
        />
      </motion.g>
      <motion.circle
        id="Fondo_color"
        cx="545.2"
        cy="540"
        r="477.21"
        fill="#001c24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{delay: 0.5, duration: 0.5 }}
      />
      <motion.g id="Circuitos" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
      <motion.g id="inferior" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>

      <defs>
    <mask id="combinedMask">
      <g>
        {/* Mascara vertical */}
        <motion.rect
          x="550"
          width="300"
          height="150"
          rx="50"    // Radio de redondeo horizontal
          ry="50"    // Radio de redondeo vertical
          fill="white"
          initial={{ y: 200 }}
          animate={{ y: 1000 }}
          transition={{
            duration: 2,
            ease: "circIn",
            delay: 2.1
          }}
        />
        
        {/* Mascara horizontal */}
        <motion.rect
          y="200"
          width="250"
          height="450"
          rx="50"    // Radio de redondeo horizontal
          ry="50"    // Radio de redondeo vertical
          fill="white"
          initial={{ x: 0 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 2,
            ease: "circIn",
            delay: 2
          }}
        />
      </g>
    </mask>
  </defs>

  <defs>
  <linearGradient id="glowGradient" x1="0" x2="0" y1="0" y2="1">
    <motion.stop
      offset="0%"
      stopColor="white"
      stopOpacity="0"
      animate={{
        offset: ["0%", "100%"]
      }}
      transition={{
        duration: 0.5,
        delay: 4
      }}
    />
    <motion.stop
      offset="65%"
      stopColor="white"
      stopOpacity="0.9"
      animate={{
        offset: ["45%", "145%"]
      }}
      transition={{
        duration: 0.5,
        delay: 4
      }}
    />
    <motion.stop
      offset="50%"
      stopColor="white"
      stopOpacity="0"
      animate={{
        offset: ["50%", "150%"]
      }}
      transition={{
        duration: 0.5,
        delay: 4
      }}
    />
  </linearGradient>
</defs>

<motion.rect //1er brillo
  x="560"
  y="780"
  width="20"
  height="1000"
  rx="50"    // Radio de redondeo horizontal
  ry="50"    // Radio de redondeo vertical
  fill="url(#glowGradient)"
  style={{
    filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
    mixBlendMode: "screen"
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: 4 // Ajusta este valor segun necesites
    }
  }}
/>

<motion.rect //2do brillo
  x="603"
  y="780"
  width="20"
  height="1000"
  rx="50"    // Radio de redondeo horizontal
  ry="50"    // Radio de redondeo vertical
  fill="url(#glowGradient)"
  style={{
    filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
    mixBlendMode: "screen"
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: 4 // Ajusta este valor segun necesites
    }
  }}
/>

<motion.rect //3er brillo
  x="642"
  y="780"
  width="20"
  height="1000"
  rx="50"    // Radio de redondeo horizontal
  ry="50"    // Radio de redondeo vertical
  fill="url(#glowGradient)"
  style={{
    filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
    mixBlendMode: "screen"
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: 4 // Ajusta este valor segun necesites
    }
  }}
/>

<motion.rect //4to brillo
  x="683"
  y="780"
  width="20"
  height="1000"
  rx="50"    // Radio de redondeo horizontal
  ry="50"    // Radio de redondeo vertical
  fill="url(#glowGradient)"
  style={{
    filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
    mixBlendMode: "screen"
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: 4 // Ajusta este valor segun necesites
    }
  }}
/>

      <motion.path
        fill="#fff"
        d="M581.31,888.98v-242.91c5.19-2.83,8.71-8.34,8.71-14.67,0-9.22-7.48-16.7-16.7-16.7s-16.7,7.48-16.7,16.7c0,6.36,3.56,11.89,8.79,14.71v242.84c-6.23,2.96-10.55,9.3-10.55,16.66,0,10.19,8.26,18.46,18.46,18.46s18.46-8.26,18.46-18.46c0-7.33-4.28-13.64-10.47-16.62Z"
      />

<motion.path
  fill="#fff"
  stroke="#80ffff"
  d="M581.31,888.98v-242.91c5.19-2.83,8.71-8.34,8.71-14.67,0-9.22-7.48-16.7-16.7-16.7s-16.7,7.48-16.7,16.7c0,6.36,3.56,11.89,8.79,14.71v242.84c-6.23,2.96-10.55,9.3-10.55,16.66,0,10.19,8.26,18.46,18.46,18.46s18.46-8.26,18.46-18.46c0-7.33-4.28-13.64-10.47-16.62Z"
  style={{
    filter: "blur(2px) drop-shadow(0 0 2px #80ffff)",
    mixBlendMode: "screen",
    mask: "url(#combinedMask)",
    maskComposite: "intersect"
  }}
/>

      <motion.path
        fill="#fff"
        d="M621.68,925.55c.29-28.29,3.49-346.86,3.49-365.34s-13.14-17.58-13.14-17.58c0,0-160.87-1.76-169.65,0s5.27,15.82,5.27,15.82l159.57,2.83v23.54h-133.2l-.18,1.8c-4.26-11.31-15.14-19.37-27.94-19.37-16.5,0-29.88,13.38-29.88,29.88s13.38,29.88,29.88,29.88c14.73,0,26.94-10.67,29.4-24.69l128.79-3.43,3.11,326.17c-8.93,2.79-15.41,11.12-15.41,20.97,0,12.13,9.84,21.97,21.97,21.97s21.97-9.84,21.97-21.97c0-9.33-5.83-17.29-14.04-20.47ZM445.84,616.46c-10.65,0-19.28-8.63-19.28-19.28s8.63-19.28,19.28-19.28,19.28,8.63,19.28,19.28-8.63,19.28-19.28,19.28Z"
      />

      <motion.path
        fill="#fff"
        stroke="#80ffff"
        d="M621.68,925.55c.29-28.29,3.49-346.86,3.49-365.34s-13.14-17.58-13.14-17.58c0,0-160.87-1.76-169.65,0s5.27,15.82,5.27,15.82l159.57,2.83v23.54h-133.2l-.18,1.8c-4.26-11.31-15.14-19.37-27.94-19.37-16.5,0-29.88,13.38-29.88,29.88s13.38,29.88,29.88,29.88c14.73,0,26.94-10.67,29.4-24.69l128.79-3.43,3.11,326.17c-8.93,2.79-15.41,11.12-15.41,20.97,0,12.13,9.84,21.97,21.97,21.97s21.97-9.84,21.97-21.97c0-9.33-5.83-17.29-14.04-20.47ZM445.84,616.46c-10.65,0-19.28-8.63-19.28-19.28s8.63-19.28,19.28-19.28,19.28,8.63,19.28,19.28-8.63,19.28-19.28,19.28Z"
        style={{
          filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
          mixBlendMode: "screen",
          mask: "url(#combinedMask)",
          maskComposite: "intersect"
        }}
      />

          <motion.rect
            x="526.75"
            y="735.98"
            width="15.82"
            height="124.8"
            rx="4.5"
            ry="4.5"
            fill="#fff"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.3 }}
          />

        <motion.path
          fill="#fff"
          d="M659.41,881.11c.57-1.09.92-2.32.92-3.64v-161.71c0-4.37-3.54-7.91-7.91-7.91s-7.91,3.54-7.91,7.91v161.71c0,1.54.46,2.96,1.22,4.18-6.92,2.95-11.76,9.8-11.76,17.79,0,10.68,8.66,19.33,19.33,19.33s19.33-8.66,19.33-19.33c0-8.54-5.55-15.78-13.23-18.33Z"
        />

        <motion.path
          fill="#fff"
          stroke="#80ffff"
          d="M659.41,881.11c.57-1.09.92-2.32.92-3.64v-161.71c0-4.37-3.54-7.91-7.91-7.91s-7.91,3.54-7.91,7.91v161.71c0,1.54.46,2.96,1.22,4.18-6.92,2.95-11.76,9.8-11.76,17.79,0,10.68,8.66,19.33,19.33,19.33s19.33-8.66,19.33-19.33c0-8.54-5.55-15.78-13.23-18.33Z"
          style={{
          filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
          mixBlendMode: "screen"
          }}
          mask="url(#combinedMask)"
        />
        <motion.path
          fill="#fff"
          d="M801.83,704.34h-108.98c-4.37,0-7.91,3.54-7.91,7.91v179.28c0,.36.06.71.11,1.06-5.29,2.8-8.9,8.36-8.9,14.76,0,9.22,7.48,16.7,16.7,16.7s16.7-7.48,16.7-16.7c0-6.4-3.61-11.96-8.9-14.76.05-.35.11-.7.11-1.06v-171.37h101.07c4.37,0,7.91-3.54,7.91-7.91s-3.54-7.91-7.91-7.91Z"
        />

      <motion.path
        fill="#fff"
        stroke="#80ffff"
        d="M801.83,704.34h-108.98c-4.37,0-7.91,3.54-7.91,7.91v179.28c0,.36.06.71.11,1.06-5.29,2.8-8.9,8.36-8.9,14.76,0,9.22,7.48,16.7,16.7,16.7s16.7-7.48,16.7-16.7c0-6.4-3.61-11.96-8.9-14.76.05-.35.11-.7.11-1.06v-171.37h101.07c4.37,0,7.91-3.54,7.91-7.91s-3.54-7.91-7.91-7.91Z"
        style={{
          filter: "blur(4px) drop-shadow(0 0 2px #80ffff)",
          mixBlendMode: "screen"
        }}
        mask="url(#combinedMask)"
      />
        </motion.g>
        <motion.g id="izquierda" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>

      {/* Path base */}
      <motion.path
        fill="#fff"
        d="M524.32,311.92c0-16.02-12.98-29-29-29s-29,12.98-29,29c0,13.56,9.32,24.92,21.9,28.09-.08.45-.14.9-.14,1.37v126.55c0,4.37,3.54,7.91,7.91,7.91s7.91-3.54,7.91-7.91v-126.55c0-.59-.07-1.15-.19-1.7,11.93-3.6,20.62-14.66,20.62-27.76ZM495.32,329.54c-9.73,0-17.61-7.89-17.61-17.61s7.89-17.62,17.61-17.62,17.61,7.89,17.61,17.62-7.89,17.61-17.61,17.61Z"/>

          <motion.path
            fill="#fff"
            d="M352.74,266.68s-3.52-10.55,8.79-7.03c12.3,10.55,56.25,54.49,56.25,54.49,0,0,3.52,15.82-8.79,10.55-8.79-8.79-56.25-58-56.25-58Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />

          <motion.path
            fill="#fff"
            d="M421.29,340.5h37.03s6.92,1.76,6.92,8.79-1.76,8.79-8.79,8.79h-35.15s-9.32-1.76-9.06-8.79,9.06-8.79,9.06-8.79Z"
            initial={{ x: -30 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.path
            fill="#fff"
            d="M454.19,379.38s-64.54-.21-78.41,0c-11.05,1.37-25.68-16.34-28.92-20.45,6.78-5.31,11.15-13.55,11.15-22.82,0-16.02-12.98-29-29-29s-29,12.98-29,29,12.98,29,29,29c1.01,0,2.01-.05,2.99-.15.2,4.6,16.17,17.05,20.27,23.35,4.81,7.37,13.19,6.69,13.19,6.69h83.95c7.03,0,10.55,0,10.55-7.03s-5.77-8.58-5.77-8.58ZM328.82,354.56c-10.02,0-18.14-8.12-18.14-18.14s8.12-18.14,18.14-18.14,18.14,8.12,18.14,18.14-8.12,18.14-18.14,18.14Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />


          <motion.path
            fill="#fff"
            d="M334.09,207.55c-12.93,0-23.41,10.48-23.41,23.41s10.48,23.41,23.41,23.41,23.41-10.48,23.41-23.41-10.48-23.41-23.41-23.41ZM333.94,245.86c-8.09,0-14.64-6.56-14.64-14.65s6.56-14.64,14.64-14.64,14.65,6.56,14.65,14.64-6.56,14.65-14.65,14.65Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}

          />

          <motion.path
            fill="#fff"
            d="M458.73,421.36h-238.36c-1.66,0-3.16.64-4.31,1.67-3.42-11.11-13.75-19.18-25.98-19.18-15.01,0-27.18,12.17-27.18,27.18s12.17,27.18,27.18,27.18c13.28,0,24.32-9.53,26.69-22.12,1.03.69,2.26,1.09,3.59,1.09h60.73c-6.83,7.77-23.06,26.14-28.55,31.64-7.03,7.03-5.27,14.94-5.27,14.94v75.58c0,4.37,3.54,7.91,7.91,7.91s7.91-3.54,7.91-7.91v-75.58c0-7.91,3.52-9.67,3.52-9.67l34.68-36.91h157.44c3.59,0,6.5-2.91,6.5-6.5v-2.83c0-3.59-2.91-6.5-6.5-6.5ZM187.85,444.21c-7.28,0-13.18-5.9-13.18-13.18s5.9-13.18,13.18-13.18,13.18,5.9,13.18,13.18-5.9,13.18-13.18,13.18Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

        </motion.g>
        <motion.g id="derecha" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <motion.path
            fill="#fff"
            d="M333.78,617.84l-3.9-7.02c-1.04-1.86-.72-4.19.78-5.71l85.25-86.36c.07-.07.13-.13.19-.21,1.18-1.35,14.45-16.33,24.52-16.33s177.84,2.21,208.05,2.61c2.59.03,4.67,2.11,4.73,4.7l3.32,154.96c.06,2.61,2.19,4.7,4.8,4.7h200.19c2.65,0,4.8,2.15,4.8,4.8v7.66c0,2.65-2.15,4.8-4.8,4.8h-211.16s-9.55,2.06-11.31-17.27c-1.55-17.09-1.05-119.96-.91-143.66.02-2.68-2.17-4.85-4.85-4.82l-193.74,1.71s-5.04-2.86-20.98,15.27c-13.41,15.26-62.22,65.6-77.34,81.17-2.24,2.31-6.08,1.8-7.64-1.02Z"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            fill="#fff"
            d="M898.5,647.22c-19.41,0-35.15,15.74-35.15,35.15s15.74,35.15,35.15,35.15,35.15-15.74,35.15-35.15-15.74-35.15-35.15-35.15ZM898.5,701.71c-10.68,0-19.33-8.66-19.33-19.33s8.66-19.33,19.33-19.33,19.33,8.66,19.33,19.33-8.66,19.33-19.33,19.33Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          />
          <motion.path
            fill="#fff"
            d="M767.55,352.81s12.3-12.3,15.82-8.79,5.27,9.09-7.91,21.24c-13.18,12.15-85.25,85.97-85.25,85.97v173.32h193.5s10.39-1.07,6.88,11.23c-3.52,12.3-5.27,8.64-27.24,8.71-21.97.08-187.19,2.71-187.19,2.71l-3.52-202.17,94.91-92.24Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.3 }}
          />
          <motion.path
            fill="#fff"
            d="M776.34,400.26s30.06-30.62,33.4-28.12c7.03,5.27,5.18,14.45-6.8,23.72s-77.57,71.19-77.57,71.19v121.28l172.25,1.76s13.08,2.8,9.89,12.18-4.79,6.59-24.74,6.65c-19.96.06-169.7-1.25-169.7-1.25l-3.36-143.38,66.64-64.02Z"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.4 }}
          />
          <motion.path
            fill="#fff"
            d="M931.89,564.61c-17.47,0-31.64,14.16-31.64,31.64s14.16,31.64,31.64,31.64,31.64-14.16,31.64-31.64-14.16-31.64-31.64-31.64ZM931.89,615.58c-10.68,0-19.33-8.66-19.33-19.33s8.66-19.33,19.33-19.33,19.33,8.66,19.33,19.33-8.66,19.33-19.33,19.33Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.1 }}
          />

<motion.rect
  x="694.61"
  y="188.46"
  width="19.33"
  height="154.68"
  rx="4.5"
  ry="4.5"
  fill="#fff"
  initial={{ 
    scale: 0,
    rotate: 90,
    x: 438.47,
    y: 970.08
  }}
  animate={{ 
    scale: 1,
    rotate: 90,
    x: 0,
    y: 0
  }}
  transition={{ duration: 1.5 }}
/>
          <motion.path
            fill="#fff"
            d="M621,311.92c0-16.02-12.98-29-29-29s-29,12.98-29,29c0,13.56,9.32,24.92,21.9,28.09-.08.45-.14.9-.14,1.37v80.85c0,.15.04.29.04.44-7.22,2.8-12.35,9.8-12.35,18.01,0,10.68,8.66,19.33,19.33,19.33s19.33-8.66,19.33-19.33c0-7.56-4.35-14.08-10.67-17.26.06-.39.12-.78.12-1.19v-80.85c0-.59-.07-1.15-.19-1.7,11.93-3.6,20.62-14.66,20.62-27.76ZM591.99,329.54c-9.73,0-17.61-7.89-17.61-17.61s7.89-17.62,17.61-17.62,17.61,7.89,17.61,17.62-7.89,17.61-17.61,17.61Z"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </motion.g>
      </motion.g>
    <motion.g id="Cerebro_contorno" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
        <motion.path
          fill="#fff"
          d="M526.75,669.72s8.79-11.08,15.82-6.69,11.46,3.91-4.81,23.49c-16.28,19.58-56.7,98.67-152.5,67.03-95.79-31.64-71.19-125.67-71.19-125.67,0,0-91.4,37.9-151.16-30.7-59.76-68.61-54.49-117.82-47.46-147.7s14.37-33.36,14.21-54.47c-.15-21.11,30.4-58.86,58.19-65.47-.34-34.73,9.67-76.37,79.37-83.67,15.21-38.94,59.15-102.22,132.97-68.82,33.4-42.18,76.32-73.82,133.95-5.27,15.45-17.58,85.76-77.26,138.49.92,24.61-6.19,115.78-28.49,146.65,73.18,41.42-.27,83.6,37.55,79.21,83.67,30.76,19.75,74.7,49.64,43.06,105.88,38.67,40.43,54.49,66.79,17.58,117.76,5.27,14.06-5.27,19.33-19.33,7.03-14.06-12.3,9.67-21.97,18.46-32.52s19.33-59.76-40.43-83.49c17.58-23.73,24.45-85.25-34.35-94.91-9.59.88-10.43-5.23-8.25-19.75,2.18-14.52,9.51-65.49-70.61-63.73-8.06-7.03-8.06-105.46-138.13-70.31-12.3-19.33-58.83-86.13-120.81-2.64-.47,64.16,0,310.62,0,310.62l-18.92-1.27V198.36s-14.52-48.41-60.43-45.85-54.09,44.94-54.09,44.94c0,0-115.62-49.41-126.66,78.03-35.65-9.67-79.52-10.93-74.28,67.92-1.8,8.54-51.01,3.27-61.56,68.3,0,33.4-12.3,35.15-12.3,68.55s12.84,126.55,121.55,134.46c40.16-.88,55.22-8.88,62.13,0,12.3,15.82,3.52,19.33,7.03,42.18,1.95,12.7,29.93,74.7,90.11,79.1,60.18,4.39,108.51-66.26,108.51-66.26Z"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          fill="#fff"
          d="M721.85,857.26v-73.82s8.79-10.85,21.09-3.67c12.3,7.18,52.73,38.82,93.16,7.18,14.06-12.3,26.37-38.67,24.61-63.28h47.46s-3.52,17.58-24.61,15.82c-8.79-1.76-3.74,15.82-11.54,29.88-7.79,14.06-28.89,54.49-85.13,50.97,0,0-37.79-7.91-46.58-21.97,0,28.12,2.64,58.88,2.64,58.88,0,0-.88,4.39-13.18,4.39-5.27,0-7.91-4.39-7.91-4.39Z"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.g>
      </motion.g>

      <defs>
  <mask id="texto-mask">
    <motion.rect
      x="50%"
      y="50%"
      width="100%"
      height="100%"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
      fill="white"
    />
  </mask>
</defs>

      {/* Ajustar la posicion del texto basado en el viewport */}
      <motion.text
        x={dimensions.width <= 640 ? "-80" : "-220"}
        y={dimensions.width <= 640 ? "880" : "880"}
        fill="white"
        fontSize={getFontSize()}
        fontWeight="bold"
        fontFamily={montserrat.style.fontFamily}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          filter: [
            "drop-shadow(0 0 40px #80ffff)",
            "drop-shadow(0 0 0px #80ffff)"
          ]
        }}
        transition={{ 
          opacity: { duration: 0.2, delay: 4.2 },
          filter: { 
            duration: 1.5,
            delay: 4.2
          }
        }}
        style={{
          mixBlendMode: "screen"
        }}
      >
        EN CONSTRUCCIÓN
      </motion.text>

      {/* Texto con efecto de brillo */}
      <motion.text
        x={dimensions.width <= 640 ? "-80" : "-220"}
        y={dimensions.width <= 640 ? "880" : "880"}
        fill="white"
        fontSize={getFontSize()}
        fontWeight="bold"
        fontFamily={montserrat.style.fontFamily}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          filter: [
            "drop-shadow(0 0 7px #80ffff)",
            "drop-shadow(0 0 12px #80ffff)",
            "drop-shadow(0 0 7px #80ffff)"
          ]
        }}
        transition={{ 
          opacity: { duration: 0.2, delay: 4.2 },
          filter: { 
            duration: 1.5,
            repeat: Infinity,
            delay: 4.2
          }
        }}
        style={{
          mixBlendMode: "screen"
        }}
      >
        EN CONSTRUCCIÓN
      </motion.text>

    </motion.svg>
  );
};

export default AnimatedSVGMobile;
