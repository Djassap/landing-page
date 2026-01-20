import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Store } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground space-y-6 p-4 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <Store className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">404 - Page Non Trouvée</h2>
            <p className="text-muted-foreground text-lg max-w-md">
                Oups ! La page que vous cherchez ne semble pas être disponible.
            </p>
            <Button asChild size="lg">
                <Link href="/">Retourner à l'accueil</Link>
            </Button>
        </div>
    )
}
