import BlurText from "./ui/blur-text";
import Button from "./ui/button";

export default function Discover() {
    return (
        <div
            className=" bg-no-repeat flex flex-col items-center justify-center bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url(/xshape.svg)`,
            }}
        >
            <BlurText
                text="Lets start your journey"
                delay={100}
                animateBy="words"
                direction="bottom"
                className="text-5xl font-medium tracking-widest mb-10  text-blue-900 "
            />
            <Button>
                Get in Touch <span className="h-1 w-3 inline-block bg-transparent"></span>{" "}
            </Button>
        </div>
    );
}
