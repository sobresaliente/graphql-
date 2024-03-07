import TypographyH1 from '@/components/ui/TypegraphyH1'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TypographyH1>Hello thereツ</TypographyH1>
            <Button>Click me</Button>
        </main>
    )
}
