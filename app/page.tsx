import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, MessageSquare, PhoneIcon as WhatsApp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-bg">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=450&width=1200"
            alt="Consultório de psicologia"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 z-10">
          <div className="bg-purple-light/80 backdrop-blur-sm p-8 rounded-lg max-w-md">
            <p className="text-purple-dark mb-2">Para quem busca apoio, compreensão e clareza.</p>
            <p className="text-purple-dark text-sm mb-1">Psicóloga clínica - CRP-08/33621</p>
            <h1 className="text-4xl md:text-5xl font-serif text-purple-dark mb-6">Karina Brasil</h1>

            <Button className="bg-purple-light hover:bg-purple text-purple-dark rounded-full px-6">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 md:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-purple-dark mb-2">Prazer, eu sou a psicóloga</p>
            <h2 className="text-2xl font-medium text-purple-dark mb-4">Karina Brasil,</h2>
            <p className="text-purple-dark mb-6">com especialização em</p>

            <div className="space-y-4">
              <div className="bg-purple-accent/70 rounded-lg p-4">
                <p className="text-center text-purple-dark font-medium">Terapia Cognitivo Comportamental.</p>
              </div>

              <div className="bg-purple-accent/70 rounded-lg p-4">
                <p className="text-center text-purple-dark font-medium">Neurociências e Comportamento Humano</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ilustração de sessão de terapia"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-purple-dark">
            Trabalhando sempre com um espaço seguro e estruturado para lidar com questões internas como:
          </p>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Ambiente de terapia"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-4">
            <div className="bg-purple-light/80 backdrop-blur-sm rounded-full w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4">
              <p className="text-center text-purple-dark font-medium">Depressão e Transtornos de Ansiedade</p>
            </div>

            <div className="bg-purple-light/80 backdrop-blur-sm rounded-full w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4">
              <p className="text-center text-purple-dark font-medium">TDAH e Desregulação Emocional</p>
            </div>

            <div className="bg-purple-light/80 backdrop-blur-sm rounded-full w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4">
              <p className="text-center text-purple-dark font-medium">Relacionamentos e Psicopatologias em geral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-12 px-4 md:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-2xl text-purple-dark">
            Primeiro <span className="font-medium">respiro,</span> depois
          </p>
          <p className="text-2xl text-purple-dark">
            um <span className="font-medium">pequeno</span> passo.
          </p>

          <p className="mt-4 text-purple-dark">Vamos juntos entender o que está acontecendo agora?</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ilustração de sessão de terapia"
              width={400}
              height={300}
              className="w-full"
            />
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image src="/placeholder.svg?height=100&width=100" alt="Planta decorativa" width={100} height={100} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="bg-purple-accent hover:bg-purple text-purple-dark rounded-full px-8">
            Agendar Atendimento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-bg py-8 px-4 md:px-16 border-t border-purple-light/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-purple-dark text-sm">Para quem busca apoio, compreensão e clareza.</p>
            <p className="text-purple-dark text-sm mt-2">
              Karina Maria Brasil Henriques
              <br />
              CRP-08/33621
              <br />
              Terapia Cognitivo Comportamental
              <br />
              Atendimentos online
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-purple-dark text-sm mb-2">Clube do livro, sociais, ebook</p>
            <div className="flex gap-4">
              <Link href="#" className="text-purple-dark hover:text-purple">
                <WhatsApp size={20} />
              </Link>
              <Link href="#" className="text-purple-dark hover:text-purple">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-purple-dark hover:text-purple">
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 text-center">
          <p className="text-purple-dark text-xs">© 2025 Todos os Direitos Reservados</p>
        </div>
      </footer>
    </main>
  )
}

