import Image from 'next/image'

import NavigationMenuDemo from '@/components/NavigationMenu'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-betwn p-24">
            <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Picture of the author"
                className="mb-8"
            />
            <NavigationMenuDemo />
        </main>
    )
}
