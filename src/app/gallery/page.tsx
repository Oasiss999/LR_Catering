import Image from "next/image";
import "./gallery.css";
export default function Gallery() {
    return( 

        <div>
            <div className ="TopBar">
                <div className = "TopBarText">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className ="MainBody">
                <div className="anImage">
                <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} />
                </div>
                <div className="anImage">
                <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} />
                </div>
                <div className="anImage">
                <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} />
                </div>
                <div className="anImage">
                <Image src= '/Images/-Insert_image_here-.svg.png' alt="Image" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}
