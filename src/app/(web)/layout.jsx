import Nav from "@/components/ui/Header/Nav";

export default function Weblayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}