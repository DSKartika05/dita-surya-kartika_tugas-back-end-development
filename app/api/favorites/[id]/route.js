import { favorites } from "@/lib/db";

export async function DELETE(request, { params }) {
  const { id } = await params;

  const index = favorites.findIndex((f) => String(f.id) === id);

  if (index === -1) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  favorites.splice(index, 1);

  return Response.json({ message: "Berhasil dihapus" });
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  const index = favorites.findIndex((f) => String(f.id) === id);

  if (index === -1) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  const body = await request.json();

  if (!body.note) {
    return Response.json(
      { error: "note wajib diisi" },
      { status: 400 }
    );
  }

  favorites[index] = {
    ...favorites[index],
    note: body.note,
  };

  return Response.json(favorites[index]);
}