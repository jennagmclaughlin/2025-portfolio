import { useState, useEffect } from "react";

export const StarBackground = () => {
  //   const [stars, setStars] = useState([]);
  //   const [meteors, setMeteors] = useState([]);

  //   useEffect(() => {
  //     generateStars();
  //     generateMeteors();
  //   }, []);

  //   const generateStars = () => {
  //     const numberOfStars = Math.floor(
  //       (window.innerWidth * window.innerHeight) / 10000
  //     ); // adjust number of stars based on window size
  //     const newStars = [];
  //     for (let i = 0; i < numberOfStars; i++) {
  //       newStars.push({
  //         id: i, // index
  //         size: Math.random() * 2 + 1, // generate stars between sizes 1 and 3 pixels
  //         x: Math.random() * 100, // position, placing anywhere in viewport from 0-100% on x-axis
  //         y: Math.random() * 100, // same as above but on y-axis
  //         opacity: Math.random() * 0.5 + 0.5, // any opacity from 0.5 to 1
  //         animationDuration: Math.random() * 4 + 2, // animation duration anywhere from 2 to 6 seconds
  //       });
  //     }
  //     setStars(newStars);
  //   };

  //   const generateMeteors = () => {
  //     const numberOfMeteors = 4;
  //     const newMeteors = [];

  //     for (let i = 0; i < numberOfMeteors; i++) {
  //       newMeteors.push({
  //         id: i,
  //         size: Math.random * 2 + 1,
  //         x: Math.random() * 90 + 9,
  //         y: Math.random() * 250 + 50,
  //         animationDelay: Math.random() * 15,
  //         animationDuration: (Math.random() * 7) / 10 + 3,
  //       });
  //     }
  //     setMeteors(newMeteors);
  //   };

  //   return (
  //     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  //       {stars.map((star) => (
  //         <div
  //           key={star.id}
  //           className="star animate-pulse"
  //           style={{
  //             width: star.size + "px",
  //             height: star.size + "px",
  //             left: star.x + "%",
  //             top: star.y + "%",
  //             opacity: star.opacity,
  //             animationDuration: star.animationDuration + "s",
  //           }}
  //         />
  //       ))}
  //       {meteors.map((meteor) => (
  //         <div
  //           key={meteor.id}
  //           className="meteor w-[300px] animate-meteor"
  //           style={{
  //             // width: meteor.size + "px",
  //             // height: meteor.size * 3 + "px",
  //             left: meteor.x + "%",
  //             top: meteor.y + "%",
  //             animationDelay: meteor.animationDelay,
  //             animationDuration: meteor.animationDuration + "s",
  //           }}
  //         >
  //           <div className="meteorShine" />
  //         </div>
  //       ))}
  //     </div>
  //   );
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const numberOfMeteors = 4; // number of meteors

  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      ); // adjust number of stars based on window size
      const newStars = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i, // index
          size: Math.random() * 2 + 1, // generate stars between sizes 1 and 3 pixels
          x: Math.random() * 100, // position, placing anywhere in viewport from 0-100% on x-axis
          y: Math.random() * 100, // same as above but on y-axis
          opacity: Math.random() * 0.5 + 0.5, // any opacity from 0.5 to 1
          animationDuration: Math.random() * 4 + 2, // animation duration anywhere from 2 to 6 seconds
        });
      }
      setStars(newStars);
    };

    const generateMeteors = () => {
      const newMeteors = [];
      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random * 2 + 1,
          x: Math.random() * 90 + 9,
          y: Math.random() * 250,
          animationDelay: Math.random() * 15,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor, index) => (
        <div
          key={index}
          className="meteor animate-meteor"
          style={{
            top: meteor.y + "%",
            left: meteor.x + "%",
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration + "s",
          }}
        >
          <div className="meteorShine" />
        </div>
      ))}
    </div>
  );
};
