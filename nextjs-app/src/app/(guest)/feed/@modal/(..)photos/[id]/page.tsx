import { ModalPhoTo } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <ModalPhoTo>
    {photoId}
    </ModalPhoTo>;
}
