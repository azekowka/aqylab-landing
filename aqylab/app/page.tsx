"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Header */}
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white/90 py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Aqylab Logo"
                width={150}
                height={150}
                className="w-10 h-10 md:w-16 md:h-16 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="#analyzer" 
              onClick={(e) => scrollToSection(e, 'analyzer')} 
              className="text-gray-800 hover:text-purple-600 transition-colors px-3 py-2 text-sm lg:text-base"
            >
              Анализатор
            </Link>
            <Link 
              href="#papers" 
              onClick={(e) => scrollToSection(e, 'papers')} 
              className="text-gray-800 hover:text-purple-600 transition-colors px-3 py-2 text-sm lg:text-base"
            >
              Рабочие листы
            </Link>
            <Link 
              href="#ai-assistant" 
              onClick={(e) => scrollToSection(e, 'ai-assistant')} 
              className="text-gray-800 hover:text-purple-600 transition-colors px-3 py-2 text-sm lg:text-base"
            >
              ИИ-Ассистент
            </Link>
            <button
              onClick={openModal}
              className="text-gray-800 hover:text-purple-600 transition-colors flex items-center px-3 py-2 text-sm lg:text-base"
            >
              Для инвесторов <ExternalLink className="ml-1 h-4 w-4" />
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm">
              <span>RU</span>
            </div>
            <button
              onClick={openModal}
              className="hidden md:flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full transition-colors text-sm lg:text-base"
            >
              Подключить школу
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Aqylab Logo"
                  width={80}
                  height={80}
                  className="w-12 h-12 object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col space-y-6">
              <Link 
                href="#analyzer" 
                onClick={(e) => { scrollToSection(e, 'analyzer'); setIsMobileMenuOpen(false) }} 
                className="text-gray-800 hover:text-purple-600 py-2 text-lg"
              >
                Анализатор
              </Link>
              <Link 
                href="#papers" 
                onClick={(e) => { scrollToSection(e, 'papers'); setIsMobileMenuOpen(false) }} 
                className="text-gray-800 hover:text-purple-600 py-2 text-lg"
              >
                Рабочие листы
              </Link>
              <Link 
                href="#ai-assistant" 
                onClick={(e) => { scrollToSection(e, 'ai-assistant'); setIsMobileMenuOpen(false) }} 
                className="text-gray-800 hover:text-purple-600 py-2 text-lg"
              >
                ИИ-Ассистент
              </Link>
              <button
                onClick={openModal}
                className="text-gray-800 hover:text-purple-600 flex items-center py-2 text-lg"
              >
                Для инвесторов <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </nav>

            <div className="mt-auto">
              <button
                onClick={openModal}
                className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                Подключить школу
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 md:pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-purple-600">IoT набор </span>
                для интерактивного <span className="text-purple-600">изучения химии, </span>
                превращающий обучение в игру!
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openModal}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors flex items-center justify-center"
                >
                  Подключить школу
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <Link 
                  href="#products" 
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="border border-gray-300 hover:border-purple-600 text-gray-800 px-6 py-3 rounded-full transition-colors flex items-center justify-center"
                >
                  Узнать больше
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <Image
                src="/kit.svg"
                alt="Aqylab Kit"
                width={600}
                height={400}
                className="object-contain w-full max-w-md md:max-w-none"
                priority
              />
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section id ="products" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Наши продукты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div id="analyzer" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Химический анализатор</h3>
              <p className="text-gray-600 mb-6">Анализатор с 14 датчиками позволяет ученику понять материал наглядно с помощью визуализации данных</p>
              <div className="flex justify-between items-center">
                <Link
                  href="#analyzer"
                  onClick={(e) => scrollToSection(e, 'analyzer')}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                  aria-label="Learn more about analyzer"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/kit.svg"
                  alt="Aqylab kit"
                  width={250}
                  height={250}
                  className="object-contain w-32 h-32 md:w-48 md:h-48"
                />
              </div>
            </div>

            <div id="papers" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Рабочие листы</h3>
              <p className="text-gray-600 mb-6">Рабочие листы с красочными иллюстрациями добавляют интерес ученикам</p>
              <div className="flex justify-between items-center">
                <Link
                  href="#papers"
                  onClick={(e) => scrollToSection(e, 'papers')}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                  aria-label="Learn more about worksheets"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/papers.svg"
                  alt="Aqylab Papers"
                  width={250}
                  height={250}
                  className="object-contain w-32 h-32 md:w-48 md:h-48"
                />
              </div>
            </div>

            <div id="ai-assistant" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">ИИ-Ассистент</h3>
              <p className="text-gray-600 mb-6">Приложение со встроенным ИИ-помощником полностью сопровождает ученика во время проведения эксперимента</p>
              <div className="flex justify-between items-center">
                <Link
                  href="#ai-assistant"
                  onClick={(e) => scrollToSection(e, 'ai-assistant')}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                  aria-label="Learn more about AI assistant"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Image
                  src="/dashboard.svg"
                  alt="AI Dashboard"
                  width={250}
                  height={250}
                  className="object-contain w-32 h-32 md:w-48 md:h-48"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">+ 100</h3>
                <p className="text-lg">опытов проводит наш набор</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">+ 5,000</h3>
                <p className="text-lg">активных пользователей</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">7</h3>
                <p className="text-lg">довольных школ в Казахстане</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect School CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Готовы внедрить Aqylab в вашу школу?</h2>
            <button
              onClick={openModal}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full transition-colors font-medium text-lg"
            >
              Подключить школу
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Aqylab Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <Link 
                href="https://wa.me/77755124030" 
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +7 (775) 512 4030
              </Link>
              <button
                onClick={openModal}
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
              >
                Для инвесторов <ExternalLink className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            © {new Date().getFullYear()} Aqylab. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}