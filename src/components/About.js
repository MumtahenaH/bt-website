function About(){
  return(
      <div>
<section id="about"
     style={{
      minHeight: "100vh",
      backgroundImage: "url('/assets/about.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",            // Use flexbox to center
      flexDirection: "column",    // Align items vertically
      justifyContent: "center",   // Center vertically
      alignItems: "center",       // Center horizontally
      textAlign: "center",        // Ensure text is centered
    }}>
      <a style={{ fontSize: "3rem", fontFamily: "'Space Grotesk', sans-serif", color: "white", marginBottom: "20px", padding: "70px"}} className="font-light">
      A catchy marketing description about our company
      </a>
      
      <button style={{
borderRadius: "999px",
padding: "16px 24px",
backgroundColor: "#ffffff",
border: "2px solid #ffffff",
color: "#000",
fontWeight: "bold",
fontSize: "14px",
textTransform: "uppercase",
display: "flex",
alignItems: "center",
gap: "8px",
boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
cursor: "pointer",
transition: "all 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
}}
onMouseOver={(e) => {
e.currentTarget.style.transform = "scale(1.05)";
e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
}}
onMouseOut={(e) => {
e.currentTarget.style.transform = "scale(1)";
e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
}}
onMouseDown={(e) => {
e.currentTarget.style.transform = "scale(0.95)";
e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.15)";
}}
onMouseUp={(e) => {
e.currentTarget.style.transform = "scale(1.05)";
e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
}}
>
Learn More <span style={{ fontSize: "16px", transition: "transform 0.3s ease-in-out" }}>→</span>
</button>

     
</section>
   
      </div>
  )
}
export default About;