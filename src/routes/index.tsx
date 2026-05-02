import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  BrainCircuit,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Moon,
  Sun,
  MessageSquareText,
  BarChart3,
  Clock3,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: SignaLandingPage,
  head: () => ({
    meta: [
      { title: "Signa — Gestão clínica inteligente para psicanalistas" },
      {
        name: "description",
        content:
          "Plataforma elegante para psicanalistas gerenciarem agenda, pacientes, pagamentos e rotina com apoio de IA. Organize seu consultório sem perder a essência da clínica.",
      },
      { name: "keywords", content: "psicanalista, gestão clínica, agenda psicanalista, controle financeiro, IA para psicanalistas, consultório virtual, Signa" },
      { name: "author", content: "Signa" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Signa — Gestão clínica inteligente para psicanalistas" },
      { property: "og:description", content: "Organize seu consultório sem perder a essência da clínica. Agenda, pacientes, financeiro e IA numa plataforma elegante." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://signa.app" },
      { property: "og:image", content: "https://signa.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Signa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Signa — Gestão clínica inteligente para psicanalistas" },
      { name: "twitter:description", content: "Organize seu consultório sem perder a essência da clínica. Agenda, pacientes, financeiro e IA numa plataforma elegante." },
      { name: "twitter:image", content: "https://signa.app/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://signa.app" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Signa",
          "description": "Plataforma elegante para psicanalistas gerenciarem agenda, pacientes, pagamentos e rotina com apoio de IA.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "BRL",
            "offerCount": "2",
            "offers": [
              {
                "@type": "Offer",
                "name": "Plano Mensal",
                "price": "39.00",
                "priceCurrency": "BRL"
              },
              {
                "@type": "Offer",
                "name": "Plano Anual",
                "price": "298.80",
                "priceCurrency": "BRL"
              }
            ]
          },
          "provider": {
            "@type": "Organization",
            "name": "Signa",
            "url": "https://signa.app"
          }
        })
      }
    ]
  }),
});

const features = [
  { icon: CalendarDays, title: "Agenda clínica inteligente", description: "Organize sessões avulsas ou recorrentes, visualize sua semana e acompanhe horários com clareza." },
  { icon: Users, title: "Gestão de pacientes", description: "Cadastre pacientes, valores, frequência, modalidade de cobrança e status sem criar prontuário clínico." },
  { icon: CreditCard, title: "Controle financeiro", description: "Registre pagamentos via Pix, acompanhe pendências, atrasos, faturamento mensal e histórico por paciente." },
  { icon: BrainCircuit, title: "Assistente IA contextual", description: "Pergunte sobre sua agenda, pagamentos e pacientes. A IA responde com base no contexto real da sua clínica." },
  { icon: MessageSquareText, title: "Mensagens elegantes", description: "Gere mensagens de cobrança, confirmação, retorno e reagendamento com tom discreto e profissional." },
  { icon: ShieldCheck, title: "Segurança por clínica", description: "Cada profissional acessa apenas seus próprios dados, com isolamento por tenant e políticas de segurança." },
];

const painPoints = [
  "Agendamentos espalhados em conversas de WhatsApp",
  "Cobranças desconfortáveis e pagamentos esquecidos",
  "Pouca clareza sobre faturamento mensal",
  "Remarcações frequentes sem visão da agenda",
  "Trabalho repetitivo que consome tempo fora da clínica",
];

const benefits = [
  "Mais clareza sobre sua semana clínica",
  "Menos desgaste com cobranças e lembretes",
  "Controle financeiro simples e objetivo",
  "Organização sem transformar a clínica em burocracia",
  "IA como assistente administrativa, não como substituta da escuta",
];

const faq = [
  { question: "A Signa possui prontuário clínico?", answer: "Não. A proposta da Signa é organizar agenda, pacientes e financeiro sem armazenar conteúdo clínico, diagnósticos ou notas terapêuticas." },
  { question: "Preciso entender de tecnologia?", answer: "Não. A interface foi pensada para uso cotidiano, com navegação simples, visual limpo e suporte para começar." },
  { question: "A IA interfere na clínica?", answer: "Não. A IA atua apenas como assistente administrativa: ajuda com mensagens, agenda, pagamentos e organização operacional." },
  { question: "O pagamento da assinatura é automático?", answer: "Neste primeiro momento, a mensalidade é feita por Pix manual, mantendo o custo baixo e o atendimento próximo." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#102033]/20 bg-[#F5EFE6]/80 px-4 py-2 text-sm font-medium text-[#102033]/80 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="https://wa.me/5575991512810?text=Olá,%20quero%20conhecer%20a%20Signa"
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B07A32] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-[#B07A32]/20 transition hover:-translate-y-0.5 hover:bg-[#B07A32]/80 dark:bg-[#B07A32] dark:text-white dark:hover:bg-[#B07A32]/80"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function SignaLandingPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#102033] dark:bg-[#0d1117] dark:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#B07A32]/20 blur-3xl dark:bg-[#B07A32]/10" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#B07A32]/15 blur-3xl dark:bg-[#B07A32]/10" />
      </div>

       <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
         <div className="flex items-center">
           <img src="/logo.png" alt="Signa" className="h-[90px] w-auto" />
         </div>
         <nav className="hidden items-center gap-8 text-sm text-[#102033]/80 dark:text-slate-300 md:flex">
           <a href="#significado" className="hover:text-[#0B2239] dark:hover:text-white">O nome</a>
           <a href="#funcoes" className="hover:text-[#0B2239] dark:hover:text-white">Funções</a>
           <a href="#preco" className="hover:text-[#0B2239] dark:hover:text-white">Preço</a>
         </nav>
         <a href="https://wa.me/5575991512810?text=Olá,%20quero%20conhecer%20a%20Signa" className="hidden rounded-full border border-[#102033]/20 bg-[#F5EFE6]/70 px-4 py-2 text-sm font-medium text-[#102033]/80 backdrop-blur transition hover:bg-[#F5EFE6] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 sm:inline-flex">
           Falar no WhatsApp
         </a>
       </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#102033]/20 bg-[#F5EFE6]/80 px-4 py-2 text-sm text-[#102033]/80 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
             <span className="h-2 w-2 rounded-full bg-[#B07A32]" />
             Para psicanalistas de consultório individual
           </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#0B2239] dark:text-white md:text-7xl">
            Organize seu consultório sem perder a essência da clínica.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#102033]/80 dark:text-slate-300">
            A Signa é uma plataforma elegante para psicanalistas gerenciarem agenda, pacientes, pagamentos e rotina administrativa com apoio de inteligência artificial.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton>Quero conhecer a Signa</CTAButton>
            <p className="text-sm text-slate-500 dark:text-slate-400">
               Mensalidade simples: <strong className="text-[#0B2239] dark:text-white">R$ 39,00</strong>
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-[#0B2239]/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
               <div className="rounded-[1.5rem] bg-[#0B2239] p-5 text-white dark:bg-[#111827]">
                 <div className="mb-6 flex items-center justify-between">
                   <div>
                     <p className="text-sm text-slate-400">Dashboard</p>
                     <h3 className="text-2xl font-semibold">Boa tarde, Analista</h3>
                   </div>
                   <div className="flex gap-2">
                     <Sun className="h-5 w-5 text-slate-400" />
                     <Moon className="h-5 w-5 text-[#B07A32]" />
                   </div>
                 </div>
                 <div className="grid gap-3 sm:grid-cols-2">
                   <div className="rounded-2xl bg-white/10 p-4">
                     <Clock3 className="mb-3 h-5 w-5 text-[#B07A32]" />
                     <p className="text-sm text-slate-400">Sessões hoje</p>
                     <p className="mt-1 text-3xl font-semibold">6</p>
                   </div>
                   <div className="rounded-2xl bg-white/10 p-4">
                     <CreditCard className="mb-3 h-5 w-5 text-emerald-300" />
                     <p className="text-sm text-slate-400">Receita mensal</p>
                     <p className="mt-1 text-3xl font-semibold">R$ 8.420</p>
                   </div>
                   <div className="rounded-2xl bg-white/10 p-4">
                     <BarChart3 className="mb-3 h-5 w-5 text-[#B07A32]/80" />
                     <p className="text-sm text-slate-400">Pendências</p>
                     <p className="mt-1 text-3xl font-semibold">4</p>
                   </div>
                   <div className="rounded-2xl bg-white/10 p-4">
                     <BrainCircuit className="mb-3 h-5 w-5 text-[#B07A32]/90" />
                     <p className="text-sm text-slate-400">Insight IA</p>
                     <p className="mt-1 text-sm leading-6 text-slate-200">
                       2 pacientes estão há mais de 15 dias sem sessão.
                     </p>
                   </div>
                 </div>
               </div>
          </div>
        </motion.div>
      </section>

       <section id="significado" className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-8">
         <SectionLabel>O sentido do nome</SectionLabel>
         <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">Por que Signa?</h2>
         <div className="mt-8 grid gap-8 text-lg leading-8 text-[#102033]/80 md:grid-cols-2">
           <p>O nome Signa remete ao signo, ao significante, ao que marca, organiza e dá forma à experiência. Na clínica, sabemos que não é o excesso que orienta, mas a estrutura.</p>
           <p>A Signa nasce desse princípio: organizar sem invadir, estruturar sem reduzir, auxiliar sem interferir. Um suporte silencioso para que sua clínica funcione melhor.</p>
         </div>
       </section>

       <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
         <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
           <div>
             <SectionLabel>O problema</SectionLabel>
             <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">A clínica exige presença. A rotina exige organização.</h2>
             <p className="mt-6 text-lg leading-8 text-[#102033]/80">
               O trabalho administrativo acontece fora da sessão, mas afeta diretamente a vida do consultório. Quando tudo fica no improviso, o psicanalista perde tempo, energia e clareza.
             </p>
           </div>
           <div className="grid gap-4">
             {painPoints.map((item) => (
               <div key={item} className="flex items-start gap-4 rounded-3xl border border-[#102033]/20 bg-[#F5EFE6]/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                 <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0B2239] dark:bg-white" />
                 <p className="text-[#102033]/90 dark:text-slate-300">{item}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-[#0B2239] p-8 text-white shadow-2xl shadow-[#0B2239]/20 dark:bg-white dark:text-slate-950 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#B07A32] dark:text-[#B07A32]">A solução</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">A Signa não organiza apenas. Ela pensa a operação com você.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300 dark:text-slate-700">
              <p>Diferente de sistemas comuns, a Signa automatiza partes essenciais da rotina: sessões recorrentes, pendências financeiras, vencimentos, status de pagamento e consultas administrativas via IA.</p>
              <p>Você não apenas registra. Você passa a ter controle real do funcionamento do consultório.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>Benefícios</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">Mais tempo clínico. Menos desgaste operacional.</h2>
            <p className="mt-6 text-lg leading-8 text-[#102033]/80">
              A Signa cuida da estrutura administrativa para que você possa preservar aquilo que realmente sustenta sua prática: a escuta.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-3xl bg-[#F5EFE6]/80 p-5 shadow-sm ring-1 ring-[#102033]/20 dark:bg-white/5 dark:ring-white/10">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B07A32] dark:text-[#B07A32]" />
                <p className="text-[#102033]/90 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funcoes" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Funcionalidades</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">O que você encontra na Signa</h2>
          <p className="mt-6 text-lg leading-8 text-[#102033]/80">
            Uma plataforma completa para a operação do consultório, sem prontuário clínico e sem interferência no conteúdo da análise.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[1.75rem] border border-[#102033]/20 bg-[#F5EFE6]/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2239] text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2239]">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#102033]/80 dark:text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#102033]/20 bg-[#F5EFE6]/80 p-8 shadow-xl shadow-[#0B2239]/5 dark:border-white/10 dark:bg-white/5 md:p-10">
            <BrainCircuit className="mb-6 h-10 w-10 text-[#B07A32] dark:text-[#B07A32]" />
            <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239]">IA real, não superficial.</h2>
            <p className="mt-6 text-lg leading-8 text-[#102033]/80 dark:text-slate-300">
              O assistente da Signa compreende o contexto da sua clínica: pacientes, sessões, pagamentos recentes e sua própria base de conhecimento personalizada.
            </p>
          </div>
          <div className="space-y-4">
            {["Quem está inadimplente?", "Quem está há mais de 15 dias sem vir?", "Quanto faturei este mês?", "Gere uma cobrança cordial para um pagamento pendente."].map((q) => (
              <div key={q} className="rounded-3xl bg-[#0B2239] p-5 text-white shadow-lg dark:bg-white dark:text-slate-950">
                <p className="text-sm text-slate-400 dark:text-slate-500">Você pode perguntar:</p>
                <p className="mt-2 text-lg font-medium">"{q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <SectionLabel>Diferencial</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">Um sistema que compreende a lógica do consultório.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#102033]/80 dark:text-slate-300">
          A maioria das plataformas exige que você adapte sua prática ao sistema. A Signa faz o contrário: considera sessões recorrentes, variações de frequência, pagamentos nem sempre imediatos e organização sem interferência na clínica.
        </p>
      </section>

      <section id="preco" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <SectionLabel>Investimento</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">Escolha o plano ideal para você.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#102033]/80 dark:text-slate-300">
            Comece hoje mesmo e transforme a gestão do seu consultório.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div className="rounded-[2rem] border border-[#102033]/20 bg-[#F5EFE6]/90 p-8 text-center shadow-xl shadow-[#0B2239]/5 dark:border-white/10 dark:bg-white/5 md:p-10">
            <h3 className="text-xl font-semibold text-[#0B2239]">Plano Mensal</h3>
            <div className="mt-6 flex items-end justify-center gap-2">
              <span className="text-6xl font-semibold tracking-tight text-[#0B2239]">R$ 39</span>
              <span className="pb-2 text-[#102033]/60">/ mês</span>
            </div>
            <p className="mt-4 text-sm text-[#102033]/60">Cobrança mensal recorrente</p>
            <ul className="mx-auto mt-8 space-y-3 text-left text-sm text-[#102033]/80 dark:text-slate-300">
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Acesso à plataforma</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Agenda e pacientes</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Controle financeiro</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Assistente IA (uso limitado)</li>
            </ul>
            <div className="mt-8">
              <CTAButton>Quero o plano mensal</CTAButton>
            </div>
          </div>
          <div className="relative rounded-[2rem] border-2 border-[#B07A32] bg-[#F5EFE6] p-8 text-center shadow-2xl shadow-[#B07A32]/10 md:p-10">
            <div className="absolute -top-4 left-[50%] -translate-x-1/2 rounded-full bg-[#B07A32] px-4 py-1 text-xs font-semibold text-white">
              MAIS VANTAGEM
            </div>
            <h3 className="text-xl font-semibold text-[#0B2239]">Plano Anual</h3>
            <div className="mt-6 flex items-end justify-center gap-2">
              <span className="text-6xl font-semibold tracking-tight text-[#0B2239]">R$ 24,90</span>
              <span className="pb-2 text-[#102033]/60">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-[#102033]/60">R$ 298,80 cobrados anualmente</p>
            <div className="mt-4 rounded-xl bg-[#B07A32]/10 p-3">
              <p className="text-sm font-semibold text-[#B07A32]">
                Economize R$ 169,20 por ano
              </p>
              <p className="text-xs text-[#B07A32]/80">
                Você pagaria R$ 468,00 no plano mensal
              </p>
            </div>
            <ul className="mx-auto mt-6 space-y-3 text-left text-sm text-[#102033]/80 dark:text-slate-300">
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Acesso à plataforma</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Agenda e pacientes</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Controle financeiro</li>
              <li className="flex items-center gap-2"><svg className="h-4 w-4 text-[#B07A32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Assistente IA (uso limitado)</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/5575991512810?text=Olá,%20quero%20o%20plano%20anual%20da%20Signa"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B07A32] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-[#B07A32]/20 transition hover:-translate-y-0.5 hover:bg-[#B07A32]/80"
              >
                Quero o plano anual
                <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-[#102033]/60 dark:text-slate-400">
          Pagamento via Pix ou cartão de crédito. Sem taxas escondidas.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-[#0B2239] md:text-5xl">Antes de começar</h2>
        <div className="mt-10 grid gap-4">
          {faq.map((item) => (
            <div key={item.question} className="rounded-3xl border border-[#102033]/20 bg-[#F5EFE6]/80 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold text-[#0B2239]">{item.question}</h3>
              <p className="mt-3 leading-7 text-[#102033]/80 dark:text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center lg:px-8">
        <div className="rounded-[2.5rem] bg-[#0B2239] px-8 py-16 text-white shadow-2xl shadow-[#0B2239]/20 dark:bg-white dark:text-slate-950">
          <Lock className="mx-auto mb-6 h-10 w-10 text-[#B07A32] dark:text-[#B07A32]" />
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Sua clínica não precisa funcionar no improviso.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-700">
            Ela pode ter estrutura, clareza e inteligência sem perder aquilo que a sustenta.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/5575991512810?text=Olá,%20quero%20aderir%20à%20Signa"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B07A32] px-6 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#B07A32]/80"
            >
              Começar com a Signa
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-10 text-xl font-medium">Signa organiza o que não é da clínica — para proteger o que é.</p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#102033]/20 px-6 py-8 text-center text-sm text-[#102033]/60 dark:border-white/10 dark:text-slate-400">
        <p>© 2026 Signa. Gestão clínica inteligente para psicanalistas.</p>
      </footer>
    </main>
  );
}
