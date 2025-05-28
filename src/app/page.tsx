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
            <a href="https://catholiccharitiessf.org" target="_blank"><button className ="TopBarButton" > CYO-Home</button></a>
            <button className ="TopBarButton"> Social Media</button>
            <a href='/gallery'><button className ="TopBarButton"> Gallery</button> </a>

          </div>
        </div>
        <div className ="MainBody">
          <div className="WEB">
            <div className ="ImageContainer">
              <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} className="MainImage"/>
                <div className="ImageText">
                  <p> We are a catering company that is here for you. </p>
                  <div className="ImageButtons">
                    <a href="/Contact"> <button className ="Button">Contact Us</button> </a>
                    <button className ="Button">Support</button>
                  </div>
                </div>
            </div>
            
              <div className ="ImageContainer">
                  <div className="ImageText">
                    <p> We are a catering company that is here for you. </p>
                    <div className="ImageButtons">
                      <a href="/Contact"> <button className ="Button">Contact Us</button> </a>
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
                      <a href="/Contact"> <button className ="Button">Contact Us</button> </a>
                      <button className ="Button">Support</button>
                    </div>
                  </div>
              </div>
  
            </div>
            <div className="Mobile">
              <div className ="ImageContainer">
                <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} className="MainImage"/>
                <div className ="mobButtons">

                  <button className ="Button"> Contact us </button>
                  <button className ="Button"> Gallery </button>
                  <button className ="Button"> Social Media </button>
                  
                  
                </div>
              </div>

            
            </div>
        </div>
          <div className ="PageFooter">
            
              <a href="/Contact"><p className="FooterText"> Contact us</p></a>
              <p className="FooterText">Social</p>
              <p className="FooterText">Directions</p>
            
          </div>

    </div> 
  );
}
