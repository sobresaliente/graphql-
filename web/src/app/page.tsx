import TypographyH1 from '@/components/ui/TypegraphyH1'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Picture of the author"
            />
            <TypographyH1>Hello thereツ</TypographyH1>
            <TypographyH1>My name is Sobresaliente</TypographyH1>
            <TypographyH1>Indie hacker</TypographyH1>
            <Link href={'dashboard'}><Button>Go further</Button></Link>
        </main>
    )
}
