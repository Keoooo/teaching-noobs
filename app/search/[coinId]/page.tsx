export default function Page({ params }: { params: { slug: string } }) {
  return <div>My shit Coin: {params.slug}</div>;
}
