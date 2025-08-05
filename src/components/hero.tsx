export default function Hero() {
    return (
        <div className="min-h-screen w-full bg-[#020A44] relative">
            {/* Blue Radial Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 600px at 50% 50%, #1F3B82, transparent)`,
                }}
            />
            {/* Your Content/Components */}
        </div>
    );
}
