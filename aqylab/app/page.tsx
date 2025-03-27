"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault()
  const element = document.getElementById(id)
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo Aqylab"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#analyzer" onClick={(e) => scrollToSection(e, 'analyzer')} className="text-black hover:text-purple-500 transition-colors">
              Анализатор
            </Link>
            <Link href="#papers" onClick={(e) => scrollToSection(e, 'papers')} className="text-black hover:text-purple-500 transition-colors">
              Рабочие листы
            </Link>
            <Link href="#ai-assistant" onClick={(e) => scrollToSection(e, 'ai-assistant')} className="text-black hover:text-purple-500 transition-colors">
              ИИ-Ассистент
            </Link>
            <button
              onClick={openModal}
              className="text-black hover:text-purple-500 transition-colors flex items-center"
            >
              Для инвесторов <ExternalLink className="ml-1 h-4 w-4" />
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
            <span>RU</span>
          </div>
          <button
            onClick={openModal}
            className="hidden md:flex items-center bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
          >
            Подключить школу
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-purple-500">IoT набор </span>
                для интерактивного <span className="text-purple-500"> изучения химии </span>
                <br />
                превращающий обучение в игру!
                <br />
              </h1>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/kit.svg"
                alt="Aqylab Kit"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div id="analyzer" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Химический анализатор</h3>
              <p className="text-gray-600 mb-6">Анализатор с 14 датчиками позволяет ученику понять материал наглядно с помощью визуализации данных</p>
              <div className="flex justify-between items-center">
                <Link
                  href="/#analyzer"
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/kit.svg"
                  alt="Aqylab kit"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            <div id="papers" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Рабочие листы</h3>
              <p className="text-gray-600 mb-6">Рабочие листы с красочными иллюстрациями добавляют интерес ученикам</p>
              <div className="flex justify-between items-center">
                <Link
                  href="/#papers"
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/papers.svg"
                  alt="Aqylab Papers"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            <div id="ai-assistant" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">ИИ-Ассистент</h3>
              <p className="text-gray-600 mb-6">Приложение со встроенным ИИ-помощником полностью сопровождает ученика во время проведения эксперимента</p>
              <div className="flex justify-between items-center">
                <Link
                  href="/#ai-assistant"
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/dashboard.svg"
                  alt="AI Dashboard"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="container mx-auto px-4 py-12 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 text-center">
              <h3 className="text-3xl font-bold">+ 100 опытов</h3>
              <p className="text-xl">проводит наш набор</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-3xl font-bold">+ 5 000</h3>
              <p className="text-xl">активных пользователей</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-3xl font-bold">7 школ</h3>
              <p className="text-xl">в Республике Казахстане</p>
            </div>
          </div>
        </section>

        {/* Connect School CTA */}
        <section className="container mx-auto px-4 py-8">
          <button
            onClick={openModal}
            className="flex items-center justify-center bg-purple-500 text-white text-2xl px-8 py-6 rounded-full hover:bg-purple-600 transition-colors w-full max-w-4xl mx-auto"
          >
            Подключить Aqylab в вашу школу
          </button>
        </section>
      </main>

      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
                <Image
                src="/logo.svg"
                alt="Logo Aqylab"
                width={80}
                height={80}
                className="object-contain"
                />
            </div>
            <div className="flex space-x-6">
              <Link href="https://wa.me/77755124030" className="text-gray-600 hover:text-blue-500 transition-colors">
                WhatsApp: +7 (775) 512 4030
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aqylab. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  )
}

