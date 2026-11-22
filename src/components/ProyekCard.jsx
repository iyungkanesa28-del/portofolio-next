
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProyekCard({ proyek }) {

  // Mengubah kategori menjadi array
  const kategoriList = Array.isArray(proyek.kategori)
    ? proyek.kategori
    : typeof proyek.kategori === "string"
      ? proyek.kategori.split(",").map((kat) => kat.trim()).filter(Boolean)
      : [];

  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between"
    >
      <div className="flex flex-col h-full">

        <div className="relative w-full aspect-video overflow-hidden bg-slate-50 flex-shrink-0 border-b border-gray-100">
          <Card className="h-full">
            <Image
              src={proyek.gambar}
              alt={`Tangkapan layar ${proyek.judul}`}
              width={640}
              height={420}
              loading="eager"
              className="h-auto w-full"
            />

            <CardHeader>
              <Badge>{kategoriList.join(", ")}</Badge>
              <CardTitle className="text-lg text-primary">
                {proyek.judul}
              </CardTitle>
              <CardDescription>
                {proyek.deskripsi}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>

            {/* Bagian Kategori */}
            <div className="flex flex-wrap gap-1">
              {kategoriList.map((kat, index) => (
                <span
                  key={index}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-utama mr-1 mb-1"
                >
                  {kat}
                </span>
              ))}
            </div>

            {/* Judul Proyek */}
            <h3 className="mt-3 text-lg font-bold text-utama group-hover:text-blue-600 transition-colors line-clamp-2">
              {proyek.judul}
            </h3>

            {/* Deskripsi Proyek */}
            <p className="mt-1 text-sm text-gray-600 line-clamp-3 flex-grow">
              {proyek.deskripsi}
            </p>

          </div>
        </div>

      </div>
    </Link>
  );
}
