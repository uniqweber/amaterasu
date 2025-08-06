import BlurText from "./ui/blur-text";
import Button from "./ui/button";

export default function Discover() {
    return (
        <div
            id="discover"
            data-navbar-theme="light"
            data-text-color="text-blue-900"
            data-button-bg="bg-blue-900"
            data-button-border="border-blue-900/50"
            data-bg-color="bg-blue-900"
            data-border-color="border-black/20"
            data-theme-logo="invert-0"
            className=" bg-no-repeat flex flex-col items-center padding-x justify-center bg-cover bg-center py-40 md:min-h-screen"
            style={{
                backgroundImage: `url(/xshape.svg)`,
            }}
        >
            <BlurText
                text="Lets start your journey"
                delay={100}
                animateBy="words"
                direction="bottom"
                className="text-4xl md:text-5xl justify-center font-medium  mb-10  text-blue-900 "
            />
            <Button>
                Get in Touch <span className="h-1 w-3 inline-block bg-transparent"></span>
            </Button>
        </div>
    );
}
