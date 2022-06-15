import Image from "next/image";

function Imagebox({src}) {
  return (
    <div style={{minHeight:"400px", backgroundImage: `url(${src})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
      {/* <Image width={315} height={269} /> */}
    </div>
  );
}

export default Imagebox