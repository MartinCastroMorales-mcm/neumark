import { CheckCircle } from "lucide-react";

export default function Welcome() {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
                Bienvenidos a <span className="text-[#ddd] tracking-wide">NEUMAK</span> Repuestos
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200">
                Expertos en repuestos y maestranza de alta calidad
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
                    <div>
                        <p className="text-gray-100 text-lg md:text-xl">
                            Somos una empresa líder en la importación y venta de repuestos
                            automotrices y marítimos, con una amplia experiencia en el mercado.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
                    <div>
                        <p className="text-gray-100 text-lg md:text-xl">
                            Además, contamos con <span className="font-semibold text-white">Servicio de Maestranza</span>: Centrado en la reparación y mantenimiento para
                            vehículos y embarcaciones, así como en la fabricación de repuestos y
                            piezas especiales a medida.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
                    <div>
                        <p className="text-gray-100 text-lg md:text-xl">
                            Nuestro equipo de expertos está comprometido con la calidad y el
                            servicio para satisfacer las necesidades de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}