import WashiTape from "../ui/WashiTape";

import {
    HeartHandshake,
    BriefcaseMedical,
    Award,
    ShieldCheck,
    UserCheck,
    GraduationCap
} from "lucide-react";

export default function TrustBar() {
    const credentials = [
        { label: "CPR Certified", icon: HeartHandshake },
        { label: "First Aid / AED", icon: BriefcaseMedical },
        { label: "State Licensed", icon: Award },
        { label: "Insured", icon: ShieldCheck },
        { label: "Background Checked", icon: UserCheck },
        { label: "ECE Degree", icon: GraduationCap },
    ];

    return (
        <section className="relative bg-forest-green/10 py-12 my-12 rotate-[-1deg] mx-[-1%] w-[102%] shadow-inner border-y-2 border-dashed border-forest-green/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                    {credentials.map((cred) => (
                        <div key={cred.label} className="flex flex-col items-center gap-2 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-forest-green shadow-md border-2 border-forest-green/20 group-hover:scale-110 transition-transform rotate-1 group-hover:rotate-6">
                                <cred.icon size={32} strokeWidth={2} />
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
