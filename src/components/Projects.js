import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import teamalumnet from "../assets/img/Team_alumnet.jpg";
import research from "../assets/img/research.jpg";
import analisiskebutuhan from "../assets/img/analisiskebutuhan.jpg";
import uiux from "../assets/img/uiux.jpg";
import backend from "../assets/img/backend.jpg";
import tailwindImg from "../assets/img/tailwind.png";
import blackboxImg from "../assets/img/blackbox.jpg";
import deployImg from "../assets/img/deploy.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // Data proyek yang berkaitan dengan pembuatan aplikasi Alumnet
  const projects = [
    {
      title: "Challenge & Idea",
      description:
        "Faced a challenge to create a useful app and decided on an educational evaluation application.",
      imgUrl: teamalumnet,
    },
    {
      title: "Planning & Research",
      description:
        "Outlined the application and conducted research through journals and interviews with Pak Rifki Permana.",
      imgUrl: research,
    },
    {
      title: "Requirement Analysis",
      description:
        "Analyzed user needs (alumni, university, and industry) to define application features.",
      imgUrl: analisiskebutuhan,
    },
    {
      title: "UI/UX Design",
      description:
        "Designed an intuitive, attractive interface for better user navigation.",
      imgUrl: uiux,
    },
    {
      title: "Backend Development",
      description:
        "Built a backend system to manage alumni data, job listings, events, and admin access.",
      imgUrl: backend,
    },
    {
      title: "Frontend Development",
      description:
        "Used Tailwind CSS to develop the frontend and created data visualization features.",
      imgUrl: tailwindImg,
    },
    {
      title: "System Testing",
      description:
        "Conducted over 200 testing cases using Black Box Testing to ensure all features functioned as expected.",
      imgUrl: blackboxImg,
    },
    {
      title: "Deployment & Maintenance",
      description:
        "Deployed the application locally and conducted regular maintenance for updates.",
      imgUrl: deployImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* TrackVisibility untuk animasi saat elemen terlihat di layar */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
            <h2>Projects</h2>
<p className="text-base text-gray-700">
  Explore a <span className="text-yellow-400 font-bold">diverse collection</span> of projects by Afwan Gibran, including 
  <span className="text-yellow-400 font-bold"> professional applications</span>, 
  <span className="text-yellow-400 font-bold"> educational tools</span>, and 
  <span className="text-yellow-400 font-bold"> personal side projects</span>. 
  Each project is crafted with a focus on innovation, usability, and delivering meaningful impact to users.
</p>


                  {/* Tab Container untuk navigasi tab */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* Nav untuk tombol tab */}
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Alumnet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">GOBANA</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Side Project</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Konten untuk setiap tab */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Tab 1: Menampilkan daftar proyek Alumnet */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <p>
                          Alumnet is an application that connects alumni with
                          universities, alumni with other alumni, and alumni
                          with the professional world. This application is
                          designed to facilitate communication, share
                          information, and create career opportunities for
                          alumni.
                        </p>
                        <p>
                          For more information, visit my Instagram:
                          <a
                            href="https://www.instagram.com/afwan.gibran_/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @afwan.gibran_
                          </a>
                        </p>
                      </Tab.Pane>

                      {/* Tab 2: Placeholder */}
                      <Tab.Pane eventKey="second">
                        <p>
                          Fitur tambahan dan pengembangan lebih lanjut akan
                          dijelaskan di sini.
                        </p>
                      </Tab.Pane>

                      {/* Tab 3: Placeholder */}
                      <Tab.Pane eventKey="third">
                        <p>
                          Informasi lebih lanjut tentang kolaborasi dan
                          kemitraan akan ditampilkan di sini.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Gambar latar belakang di sebelah kanan */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
