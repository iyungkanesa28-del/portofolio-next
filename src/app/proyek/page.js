import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Proyek",
  description: "Daftar proyek HTML, CSS, JavaScript karya Fathir Azzikri Putra Wibowo",
};

export default async function DaftarProyek() {
  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("created_at");
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Proyek Saya</h1>
      <p className="mt-3 text-lg text-muted-foreground">Kumuplan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat detailnya.</p>
      
      {error && (
        <p className="mt-8 rounded-x1 border border-dashed border-input p-6 tet-center text-aksen">
          Data Proyek Gagal Dimuat: {error.message}
        </p>
      )}
      {proyek && proyek.length > 0 && <FilterProyek proyek={proyek} />}
    </main>
  );
}