export default async function CardDetails({
  params,
}: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  
  return <div className="mt-22">CardDetails: {id}</div>
}
