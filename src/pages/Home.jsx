import TextType from "../components/react-bits/TextType";
import developerImg from "../assets/images/developer.webp";


function Home() {
  
  return (
    <div className="min-h-screen lg:w-full bg-cover bg-center flex items-center px-10 relative"
      style={{
        backgroundImage: `url(${developerImg})`,
      }}
    >
      <div className="absolute bg-black/40"></div>

      <div className="absolute text-white space-y-4 lg:top-[70%] top-[67%] text-black lg:left-20 left-5">
        <h1 className="lg:text-6xl text-4xl font-bold">Balaji R</h1>

        {/* Typing text */}
        <div className="lg:text-2xl text-xl pl-[5px] font-semibold">
          <p>
            <span className="border-r-2 border-white pr-1">
              I'm{" "}
              <TextType 
                text={["Software Engineer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </p>
          {/* Blue underline */}
          <div className="w-[100px] h-1 bg-blue-500 mt-2 ml-[25px]"></div>
        </div>  
      </div>
    </div>
  );
}

export default Home;

