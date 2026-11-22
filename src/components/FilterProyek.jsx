"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript"];
const tombolBiasa = "rounded-full border border-utama px-4 py-1 text-sm font-semibold text-utama";

export default function FilterProyek ({ proyek }) {
    const [kategori, setKategori] = useState("Semua");

    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-2">
                {daftarKategori.map((k) => (
                    <Button key={k} varriant={kategori === k ? "default" : "outline"} onClick={() => setKategori(k)}>
                        {k}
                    </Button>
                ))}
            </div>
            <p className="mt-4 text-gray-700">Kategori terpilih: {kategori}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
                {proyek.map((item) => (
                    <ProyekCard key={item.slug} proyek={item} />
                ))}
            </div>
        </div>
    );
}