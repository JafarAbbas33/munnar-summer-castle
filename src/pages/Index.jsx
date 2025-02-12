import Header from "../components/ui/Header";
import Swiper from "../components/ui/Swiper";

function Index() {
    return (
        <>
            <Header />
            <section className="pt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 p-4 m-4">
                    <Swiper />
                </div>
                <div className="col-span-1 p-4 m-4 my-auto">
                    <h2 className="text-4xl font-bold text-secondary-bg">
                        Welcome to the Tea Country
                    </h2>
                    <p className="font-normal text-lg  mt-8">
                        You really can’t overstate the reason for visiting Munnar, a sprawling hill station that excels in Natural Splendour. Anachal in Munnar is carpeted in greens and florals, a chilly Western Ghats climate with dappled forests.
                    </p>
                    <p className="font-normal text-lg">
                        All these elements combined Munnar Summer Castle is hands-down the best option for your stay during your high- range vacation.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Index;
