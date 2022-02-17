import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Carousel from "react-bootstrap/Carousel";

function Welcome({ user }) {
  console.log(user); //email,displayName, photoURL
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.clear();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section className="text-center">
      <h1>Welcome</h1>
      <h2>{user.displayName || user.email}</h2>
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile of logged-in user." />
      )}
      <br />
      <button
        onClick={handleLogout}
        style={{ backgroundColor: "black", color: "white", border: "none" }}
      >
        Logout
      </button>
      <br />
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              width="100"
              height="400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              width="100"
              height="400"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              width="100"
              height="400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Welcome;
