import { CardDetail } from "@/components/CardDetail"

export default async function Details({
  params,
}: Readonly<{ params: Promise<{ id: string }> }>) {
  const id = (await params).id
  
  return (
    <main className="w-full md:h-dvh pt-22 flex justify-center items-center">
      <CardDetail id={id} />
    </main>
  )
}
