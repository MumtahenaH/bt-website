import { useEffect, useState } from 'react';

function AboutUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    {
      name: "Nur Mohammad",
      position: "Project Manager",
      bio: "Microsoft certified engineer with 10+ years of experience",
      img: "/assets/7f837a61-550e-465e-ac01-794233e41fa6.jpg"
    },
    {
      name: "Md. Sadiqul Islam",
      position: "Project Manager",
      bio: "Cisco certified engineer with 10+ years of experience",
      img: "/assets/7f837a61-550e-465e-ac01-794233e41fa6.jpg"
    },

  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: isMobile ? "40vh" : "60vh",
          backgroundImage: "url(/assets/1801886b-974d-41bb-bd87-7c743c706d4f.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.7)",  // Adjust opacity
                zIndex: 1
              }}
        ></div>

        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            zIndex: 2,
            padding: isMobile ? "20px" : "0", 
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
            color: "#931f1d"
          }}
        >
          About Our Company
        </h1>
        <p style={{
          fontSize: isMobile ? "1rem" : "1.2rem",
          color: "#931f1d",
          maxWidth: "800px",
          position: "relative",
          zIndex: 2,
          padding: isMobile ? "0 20px" : "0"
        }}>
          Pioneering technology solutions since 1998
        </p>
      </div>

      {/* Company Overview */}
      <div style={{
        padding: isMobile ? "60px 20px" : "80px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: 300,
          color: "#333"
        }}>
          Who We Are
        </h2>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "40px",
          alignItems: "center"
        }}>
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: 1.6,
              color: "#555",
              marginBottom: "20px"
            }}>
             We commenced business in December, 1996 with the focus on
providing high quality and cost-effective ICT solutions and support
services.

<br/>
<br/>

Our Mission is to continue serving as an ICT infrastructure solution
providing company, focusing on People, Process & Technology, to
deliver functional, flexible and scalable infrastructure solutions with
optimal ROI.
            </p>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: 1.6,
              color: "#555"
            }}>
              27 years down the road, we have toiled hard and obtained
              confidence of our Clientele.

            </p>
           
           
          </div>
          <div style={{
            flex: 1,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <img 
              src="/assets/collaborative-brainstorming-session-about-us-page-concept_1263357-35648.avif" 
              alt="Our headquarters" 
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div style={{
        backgroundColor: "#931f1d",
        padding: isMobile ? "60px 20px" : "80px 40px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: 300,
            color: "#fff"
          }}>
            Our Mission & Values
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "30px"
          }}>
            <div style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginBottom: "15px",
                color: "#222"
              }}>Innovation</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#555"
              }}>
                We constantly push boundaries to deliver cutting-edge solutions that drive business transformation.
              </p>
            </div>
            <div style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginBottom: "15px",
                color: "#222"
              }}>Integrity</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#555"
              }}>
                We build trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
            <div style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginBottom: "15px",
                color: "#222"
              }}>Excellence</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#555"
              }}>
                We're committed to delivering superior quality in every solution and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{
        padding: isMobile ? "60px 20px" : "80px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: 300,
          color: "#333"
        }}>
          Meet Our Core Team
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "30px",
          marginBottom: "60px"
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              <div style={{
                width: isMobile ? "120px" : "150px",
                height: isMobile ? "120px" : "150px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0
              }}>
                <img 
                  src={member.img} 
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.3rem",
                  marginBottom: "5px",
                  color: "#222"
                }}>{member.name}</h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "10px"
                }}>{member.position}</p>
                <p style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  color: "#555"
                }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CEO Spotlight */}
        <div style={{
          backgroundColor: "#931f1d",
          borderRadius: "8px",
          padding: "40px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "40px",
          alignItems: "center"
        }}>
          <div style={{
            width: isMobile ? "180px" : "250px",
            height: isMobile ? "180px" : "250px",
            borderRadius: "8px",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}>
            <img 
              src="/assets/ceo.png" 
              alt="CEO"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              marginBottom: "10px",
              color: "#fff"
            }}>Mohammad Zafer Khan</h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "20px"
            }}> <b>CEO</b></p>
            <p style={{
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "16px"
            }}> Quote:</p>
              <p style={{
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "20px"
            }}>  <i>"At the heart of everything we do is a commitment to quality, optimization, access to information, and the success of those we serve."</i></p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;