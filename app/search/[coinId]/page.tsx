import SpeedGauge from "@/components/speed-gauge";

const fetchData = async (coinId: string) => {
  const response = await fetch(`/api/search`, {
    method: "POST",
    body: JSON.stringify({ coin: coinId }),
  });
  const data = await response.json();
  return data;
};

export default async function Page({ params }: { params: { coinId: string } }) {
  const speed = await fetchData(params.coinId);
  return (
    <section
      id="poop-page"
      className="flex min-h-screen flex-col items-center  gap-10 p-24"
    >
      <h1 className="font-bold uppercase">Coin: {params.coinId}</h1>
      <SpeedGauge speed={10} />
    </section>
  );
}
