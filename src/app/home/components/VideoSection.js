"use client";

import Image from "next/image";
import { useEffect } from "react";

const DiorScrollEffect = () => {
  useEffect(() => {
    const middleVideo = document.getElementById("middle-video");
    const mainVideo = document.getElementById("mainVideo");
    const imageBoxes = document.querySelectorAll(".image1");

    let unlocked = false;

    const handleWheel = (e) => {
      if (!unlocked && e.deltaY > 0) {
        e.preventDefault();
        unlocked = true;

        imageBoxes.forEach((box) => box.classList.add("active"));
        mainVideo.style.clipPath = "inset(0% 33.33%)";
        middleVideo.style.position = "unset";
        middleVideo.style.width = "33.33%";

        setTimeout(() => {
          document.documentElement.style.overflow = "auto";
          document.body.style.overflow = "auto";
        }, 2000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className="image-strip" id="imageStrip">
        <div className="image-box image1">
          <Image
            src="/images/image1.jpg"
            alt="Ready-To-Wear"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="image-box middle" id="middle-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
            id="mainVideo"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <h1>Fall 2025 New Arrivals</h1>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="image-box image1 image2">
          <Image
            src="/images/image12.jpg"
            alt="Sunglasses"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      <div className="section2"></div>

      <style jsx>{`
        .image-strip {
          display: flex;
          height: 100vh;
          width: 100%;
          position: relative;
          transition: all 0.6s ease;
          align-items: end;
          gap: 30px;
        }

        .image-box {
          position: relative;
          width: 33.33%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .middle {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .bg-video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          clip-path: inset(0% 0%);
          transition: clip-path 0.6s ease;
          z-index: 1;
        }

        .video-text {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
        }

        .video-text h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .video-text a {
          color: white;
          text-decoration: underline;
        }

        .section2 {
          height: 100vh;
        }

        .image1 {
          height: 0;
          transition: 1.8s ease-in-out;
        }

        .image-box.image1.image2 {
          transition: 2.2s ease-in-out;
        }

        .image1.active {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default DiorScrollEffect;
