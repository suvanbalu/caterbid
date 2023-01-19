import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import React from "react";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import sivesh from "./team/sivesh.jpg";
const AboutUs = () => {
  let message = "This is a sample text sample sample sample sample sample";
  return (
    <React.Fragment>
      <div>
      <Navbar />
      </div>
      <section className="bg-gradient-to-b from-black to-slate-900 h-full w-full p-4 flex justify-center">
        <div className="container">
          <div className=" about_us_text text-white text-center">
            <h2 className="header bold text-4xl p-2">About Us</h2>
            <p className="section-subtitle text-2xl">{message}</p>
            <br></br>
          </div>

          <div className="main-grid grid grid-cols-3 text-center lg:grid-cols-5 m-4 h-fit w-full justify-center text-white">
            <TeamMemberDetail
              name="Suvan Sathyendira"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
              githubLink = {"//www.github.com/suvanbalu"}
              instaLink = {"//www.instagram.com/suvan.balu/"}
              linkedinLink = {"//www.linkedin.com/in/suvanbalu/"}
            />
            <TeamMemberDetail
              name="Ashwin V"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
              githubLink = {"//www.github.com/asxwin"}
              instaLink = {"//www.instagram.com/ashwin.in/"}
              linkedinLink = {"//www.linkedin.com/in/ashwin-v-108068219/"}
            />
            <TeamMemberDetail
              name="Shivani Sri"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
              githubLink = {"//www.github.com/shxvani"}
              instaLink = {"//www.instagram.com/shxvani/"}
              linkedinLink = {"//www.linkedin.com/in/shivani-s-b640241b2/"}
            />
            <TeamMemberDetail
              name="Nashita V"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
              githubLink = {"//www.github.com/NashitaV"}
              instaLink = {"//www.instagram.com/na_shhhhh/"}
              linkedinLink = {"//www.linkedin.com/in/nashita-v-972563219/"}
            />
            <TeamMemberDetail
              name="Sivesh Kannan"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
              githubLink = {"//www.github.com/siveshk"}
              instaLink = {"//www.instagram.com/sivesh_k/"}
              linkedinLink = {"//www.linkedin.com/in/sivesh-kannan-455811252/"}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;

const TeamMemberDetail = ({
  name,
  organization,
  githubLink = "",
  instaLink = "",
  linkedinLink = "",
  content = "",
  image = "",
}) => {
  return (
    <div className="suvan shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150">
      <div
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded-full m-5 w-44 h-44 aspect-square bg-white"
      />
      <br></br>
      <h3 className="Ashwin bold text-xl">{name}</h3>
      <div className="team-info italic">
        <p>{organization}</p>
      </div>
      <p>{content}</p>

      <div className="mt-4 flex justify-center py-2 px-20">
        <Link to={githubLink} target="_blank">
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineGithub size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                Github
              </span>
            </div>
          </div>
        </Link>

        <Link to={instaLink} target="_blank">
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineInstagram size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                Instagram
              </span>
            </div>
          </div>
        </Link>

        <Link to={linkedinLink} target="_blank">
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineLinkedin size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                Linkedin
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
