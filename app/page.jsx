import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left" style={{ width: '60%' }}>
            <h1 className="h1 mb-6 hover:text-accent">Decentralize Your Data with BlocDoc</h1>
            <p className="mb-9 text-white/80 hover:text-red/80">
            BlocDoc empowers you to take control of your digital assets by leveraging the power of Web3 technology. Connect your wallet and effortlessly upload your files to the InterPlanetary File System (IPFS), ensuring secure, immutable, and decentralized storage. With BlocDoc, your data remains in your hands, protected and accessible anytime, anywhere.
            </p>
          </div>
          {/* photo */}
          <div className="w-full h-full relative">
            <div className="w-[498px] h-[498px]">
            <Image src = "/assets/block.gif" priority quality={100} fill alt="BlocDoc"  className="object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}