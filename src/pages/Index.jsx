import Header from "../components/ui/Header";
import Swiper from "../components/ui/Swiper";

function Index() {
    return (
        <>
            <Header />
            <section className="p-32 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 p-4 m-4">
                    <Swiper />
                </div>
                <div className="col-span-1 p-4 m-4">
                    <Swiper />
                </div>
            </section>
        </>
    );
}

export default Index;
