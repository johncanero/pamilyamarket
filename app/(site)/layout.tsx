import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SiteLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow mx-auto">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SiteLayout;