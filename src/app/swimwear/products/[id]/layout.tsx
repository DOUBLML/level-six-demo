export async function generateStaticParams() {
  return [
    { id: "eclipse-bikini-bottom" },
    { id: "sunflare-reversible-bikini-bottom" },
    { id: "daisy-reversible-bikini-top" },
    { id: "cove-reversible-swim-shorts" },
  ];
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}