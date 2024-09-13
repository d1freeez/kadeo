import Link from "next/link";
import Modal from "@/components/Modal"

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
    const show = searchParams?.show;

    return (
        <>
            <Link href="/?show=true">
                SUMMON THE MODAL
            </Link>

            {show && <Modal />}
        </>
    );
}