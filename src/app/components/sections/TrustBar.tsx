import WashiTape from "../ui/WashiTape";

const credentials = [
    { label: "CPR Certified", icon: "❤️" },
    { label: "First Aid / AED", icon: "⛑️" },
    { label: "State Licensed", icon: "📜" },
    { label: "Insured", icon: "🛡️" },
    { label: "Background Checked", icon: "✅" },
    { label: "ECE Degree", icon: "🎓" },
];

export default function TrustBar() {
    return (
        <section className="relative bg-forest-green/10 py-12 my-12 rotate-[-1deg] mx-[-1%] w-[102%] shadow-inner border-y-2 border-dashed border-forest-green/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                    {credentials.map((cred) => (
                        <div key={cred.label} className="flex flex-col items-center gap-2 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-2 border-forest-green/20 group-hover:scale-110 transition-transform">
                                {cred.icon}
                            </div>
                            <span className="text-forest-green font-bold text-center font-hand text-lg leading-tight">
                                {cred.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
