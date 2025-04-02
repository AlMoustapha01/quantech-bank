import Layout from "@/components/layouts";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}