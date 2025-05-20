import Image from "next/image";
import "./homePage.css";



export default function Home() {
  return (
    <div>
        <div className="TopBar">
          <div className="Logo">
            <Image
              src="/Images/cyo-logo.png"
              alt="Logo"
              width={90}
              height={100}
              className="LogoImage"
            />
          </div>
          <div className="Title">Our Lady of the Redwoods Catering</div>
          <div className ="TopBarButtons">
            <button className ="TopBarButton"> CYO-Home</button>
            <button className ="TopBarButton"> Social Media</button>
            <button className ="TopBarButton"> Gallery</button> 

          </div>
        </div>
        <div className ="MainBody">
          <div className ="ImageContainer">
            <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} className="MainImage"/>
              <div className="ImageText">
                <p> We are a catering company that is here for you. </p>
                <div className="ImageButtons">
                  <button className ="Button">Contact Us</button>
                  <button className ="Button">Support</button>
                </div>
              </div>
          </div>
          <div className ="ImageContainer">

              <div className="ImageText">
                <p> We are a catering company that is here for you. </p>
                <div className="ImageButtons">
                  <button className ="Button">Contact Us</button>
                  <button className ="Button">Support</button>
                </div>
              </div>
            <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} className="MainImage"/>
          </div>
          <div className ="ImageContainer">
            <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} className="MainImage"/>
              <div className="ImageText">
                <p> We are a catering company that is here for you. </p>
                <div className="ImageButtons">
                  <button className ="Button">Contact Us</button>
                  <button className ="Button">Support</button>
                </div>
              </div>
          </div>
 
        </div>
          <div className ="PageFooter">
            <div className="FooterText">
              <p>Contact us</p>
              <p>Social</p>
              <p>Directions</p>
            </div>
          </div>

    </div>
  );
}
