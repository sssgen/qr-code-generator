import QrGenerator from "@/components/main/QrGenerator";
import FooterLinks from "@/components/footer/FooterLinks";

const page = async () => {
    return (
        <>
            <main className='bg-background flex w-full h-full overflow-x-hidden flex-col gap-8 items-center justify-center'>
                <h1 className='text-primary text-6xl font-bold'>
                    QR code generator
                </h1>
                <QrGenerator />
            </main>
            <footer className='w-full flex items-center justify-between px-14 border-t border-gray-900 py-4'>
                <h2>© Dima Matushynets</h2>
                <FooterLinks />
            </footer>
        </>
    );
};

export default page;
