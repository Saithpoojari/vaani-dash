import React, { useEffect, useState } from 'react';

const NewLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Replace with your actual login logic
    window.location.href = 'campaign.html'; // Redirect as per your original code
  };

  useEffect(() => {
    const requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    function Scene() {
      this.animation = undefined;
      this.canvas = undefined;
      this.height = 0;
      this.width = 0;
      this.context = undefined;
      this.paused = false;
    }

    Scene.prototype = {
      setup: function (canvas, animation, width, height) {
        this.canvas = canvas;
        this.animation = animation;
        this.height = this.canvas.height = height;
        this.width = this.canvas.width = width;
        this.context = this.canvas.getContext('2d');
      },
      animate: function () {
        if (!this.paused) {
          requestAnimFrame(this.animate.bind(this));
        }
        this.animation(this);
      },
    };

    const scene = new Scene();
    const particles = [];
    const len = 400;
    const height = document.body.offsetHeight;
    const width = document.body.offsetWidth;
    const speedFactor = 15;

    function Particle() {
      this.x = 0;
      this.y = 0;
      this.size = 0;
      this.depth = 0;
      this.vy = 0;
    }

    Particle.prototype = {
      update: function (width, height) {
        if (this.y > height) {
          this.y = 1 - this.size;
        }
        this.y += this.vy / speedFactor;
      },
    };

    for (let i = 0; i < len; i++) {
      const particle = new Particle();
      particle.x = Math.random() * width;
      particle.y = Math.random() * height;
      particle.depth = Math.random() * 30 | 0;
      particle.size = (particle.depth + 1) / 8;
      particle.vy = (particle.depth * 0.25) + 1 / Math.random();
      particles.push(particle);
    }

    function falling_particles() {
      const idata = this.context.createImageData(this.width, this.height);
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        for (let w = 0; w < particle.size; w++) {
          for (let h = 0; h < particle.size; h++) {
            const pData =
              (~~(particle.x + w) + (~~(particle.y + h) * this.width)) * 4;
            idata.data[pData] = 228;
            idata.data[pData + 1] = 218;
            idata.data[pData + 2] = 203;
            idata.data[pData + 3] = 255;
          }
        }
        particle.update(this.width, this.height);
      }
      this.context.putImageData(idata, 0, 0);
    }

    scene.setup(
      document.getElementById('new-login-canvas'),
      falling_particles,
      width,
      height
    );
    scene.animate();

    const handleResize = () => {
      scene.height = scene.canvas.height = document.body.offsetHeight;
      scene.width = scene.canvas.width = document.body.offsetWidth;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.paused = true;
    };
  }, []);

  return (
    <div className="new-login-container">
      <style>
        {`
          body {
            background: linear-gradient(
              185.01deg,
              #f1e5ed 3.7%,
              #eff5ff 12.92%,
              #e7e4df 52.14%,
              #fbf2f2 95.97%
            ) no-repeat;
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
          }

          .new-login-container {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .new-login-row {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .new-login-form-col {
            position: relative;
            flex: 1;
            max-width: 50%;
            padding: 20px;
          }

          .new-login-form-col::after {
            content: '';
            border-radius: 50%;
            position: absolute;
            width: 100vh;
            height: 100vh;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: radial-gradient(
              rgba(29, 68, 135, 0.14),
              rgba(115, 115, 115, 0),
              transparent
            );
            margin: auto;
            z-index: -1;
          }

          .new-login-form {
            max-width: 200px;
            margin: 0 auto;
          }

          .new-login-logo {
            width: 50%;
            display: block;
            margin: auto;
            margin-bottom: 10%
            
          }

          .new-login-form-group {
            position: relative;
            margin-bottom: 20px;
          }

          .new-login-form-group input {
            width: 100%;
            height: 49px;
            padding-left: 35px;
            border: 1px solid #1d4487;
            border-radius: 5px;
            font-size: 14px;
            color: #333;
          }

          .new-login-form-group input::placeholder {
            color: #999;
            font-weight: 400;
          }

          .new-login-form-group input:focus {
            border-color: #f6821f;
            box-shadow: 0 0 5px rgba(246, 130, 31, 0.3);
            outline: none;
          }

          .new-login-form-group svg {
            position: absolute;
            top: 17px;
            left: 10px;
            z-index: 1;
          }

          .new-login-btn {
            width: 100%;
            height: 49px;
            background-color: #f6821f;
            border-color: #d3690d;
            color: #fff;
            font-weight: 500;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .new-login-btn:hover {
            background-color: #d3690d;
            border-color: #f6821f;
          }

          .new-login-image-col {
            flex: 1;
            max-width: 50%;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .new-login-image {
            width: 50%;
            display: block;
          }

          .new-login-footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background: transparent;
          }
          .new-login-footer a::first-letter {
            color: #f6821f;
            text-transform: lowercase;
          }

          .new-login-footer a {
            font-weight: 600;
            color: #1f4585;
            text-decoration: none;
          }

  

          .new-login-canvas {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          @media (max-width: 768px) {
            .new-login-row {
              flex-direction: column;
            }

            .new-login-form-col {
              max-width: 80%;
            }

            .new-login-form-col::after {
              width: 50vh;
            }

            .new-login-image-col {
              display: none;
            }
          }
        `}
      </style>

      <div className="new-login-row">
        <div className="new-login-form-col">
          <div className="new-login-form">
            <img
              className="new-login-logo"
              src="../img/vaani-logo.png"
              alt="Vaani Logo"
            />
            <form onSubmit={handleSubmit}>
              <div className="new-login-form-group">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 7.85674C8.49456 7.85674 9.44839 7.48987 10.1517 6.83685C10.8549 6.18382 11.25 5.29812 11.25 4.3746C11.25 3.45108 10.8549 2.56538 10.1517 1.91235C9.44839 1.25932 8.49456 0.892456 7.5 0.892456C6.50544 0.892456 5.55161 1.25932 4.84835 1.91235C4.14509 2.56538 3.75 3.45108 3.75 4.3746C3.75 5.29812 4.14509 6.18382 4.84835 6.83685C5.55161 7.48987 6.50544 7.85674 7.5 7.85674ZM10 4.3746C10 4.99028 9.73661 5.58074 9.26777 6.0161C8.79893 6.45145 8.16304 6.69603 7.5 6.69603C6.83696 6.69603 6.20107 6.45145 5.73223 6.0161C5.26339 5.58074 5 4.99028 5 4.3746C5 3.75892 5.26339 3.16845 5.73223 2.7331C6.20107 2.29775 6.83696 2.05317 7.5 2.05317C8.16304 2.05317 8.79893 2.29775 9.26777 2.7331C9.73661 3.16845 10 3.75892 10 4.3746ZM15 13.6603C15 14.821 13.75 14.821 13.75 14.821H1.25C1.25 14.821 0 14.821 0 13.6603C0 12.4996 1.25 9.01746 7.5 9.01746C13.75 9.01746 15 12.4996 15 13.6603ZM13.75 13.6557C13.7487 13.3701 13.5575 12.5112 12.71 11.7242C11.895 10.9675 10.3612 10.1782 7.5 10.1782C4.6375 10.1782 3.105 10.9675 2.29 11.7242C1.4425 12.5112 1.2525 13.3701 1.25 13.6557H13.75Z"
                    fill="#1E4588"
                  />
                </svg>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User name"
                  required
                  autoFocus
                />
              </div>
              <div className="new-login-form-group">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.44842C7.74261 1.44842 8.4548 1.67846 8.9799 2.08794C9.505 2.49742 9.8 3.05279 9.8 3.63188V7.9988H4.2V3.63188C4.2 3.05279 4.495 2.49742 5.0201 2.08794C5.5452 1.67846 6.25739 1.44842 7 1.44842ZM11.2 7.9988V3.63188C11.2 2.76325 10.7575 1.93019 9.96985 1.31597C9.1822 0.701753 8.11391 0.356689 7 0.356689C5.88609 0.356689 4.8178 0.701753 4.03015 1.31597C3.2425 1.93019 2.8 2.76325 2.8 3.63188V7.9988C2.05739 7.9988 1.3452 8.22885 0.820101 8.63833C0.294999 9.0478 0 9.60318 0 10.1823V15.6409C0 16.22 0.294999 16.7754 0.820101 17.1849C1.3452 17.5943 2.05739 17.8244 2.8 17.8244H11.2C11.9426 17.8244 12.6548 17.5943 13.1799 17.1849C13.705 16.7754 14 16.22 14 15.6409V10.1823C14 9.60318 13.705 9.0478 13.1799 8.63833C12.6548 8.22885 11.9426 7.9988 11.2 7.9988ZM2.8 9.09054H11.2C11.5713 9.09054 11.9274 9.20556 12.1899 9.4103C12.4525 9.61504 12.6 9.89272 12.6 10.1823V15.6409C12.6 15.9305 12.4525 16.2081 12.1899 16.4129C11.9274 16.6176 11.5713 16.7327 11.2 16.7327H2.8C2.4287 16.7327 2.0726 16.6176 1.81005 16.4129C1.5475 16.2081 1.4 15.9305 1.4 15.6409V10.1823C1.4 9.89272 1.5475 9.61504 1.81005 9.4103C2.0726 9.20556 2.4287 9.09054 2.8 9.09054Z"
                    fill="#1D4487"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="new-login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="new-login-image-col">
          <img
            className="new-login-image"
            src="../img/right-img.png"
            alt="Login Illustration"
          />
        </div>
      </div>

      <footer className="new-login-footer">
        Powered by{' '}
        <a href="https://edas.tech/" target="_blank" rel="noopener noreferrer">
          eDAS
        </a>{' '}
        2025
      </footer>
      <canvas id="new-login-canvas" className="new-login-canvas"></canvas>
    </div>
  );
};

export default NewLogin;